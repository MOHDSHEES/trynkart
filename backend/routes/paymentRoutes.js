import express from "express";
import Razorpay from "razorpay";
import User from "../models/userModel.js";
import Seller from "../models/sellersModel.js";
const router = express.Router();
// key_id: "rzp_live_cap6CQPMdTvNEC",
// key_secret: "Ts96JFRtq7i519ss0ImygTvP",
// key_id: "rzp_test_zGkovoh4c3r7NR",
//     key_secret: "yyndCoYsjy3WBzhNXSx7v73o",
router.post("/order", async (req, res) => {
  var instance = new Razorpay({
    key_id: "rzp_test_zGkovoh4c3r7NR",
    key_secret: "yyndCoYsjy3WBzhNXSx7v73o",
  });
  try {
    const amount = req.body.amount;
    // console.log(amount);
    var options = {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, order) {
      //   console.log(order);
      res.send(order);
      if (err) res.send({ err });
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

router.post("/order/details/:paymentId", async (req, res) => {
  const paymentId = req.params.paymentId;
  var instance = new Razorpay({
    key_id: "rzp_test_zGkovoh4c3r7NR",
    key_secret: "yyndCoYsjy3WBzhNXSx7v73o",
  });
  try {
    instance.payments.fetch(paymentId, function (err, order) {
      res.send(order);
      if (err) res.send({ err });
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

router.post("/order/placing", async (req, res) => {
  try {
    const userId = req.body.userId;
    const items = req.body.products;
    // const address = req.body.address;
    // const orderId = req.body.orderId;
    // const paymentId = req.body.paymentId;
    // const signature = req.body.signature;
    // const today = new Date();
    // const dd = String(today.getDate());
    // const mm = String(today.getMonth() + 1);
    // const yyyy = today.getFullYear();
    // const date = dd + "-" + mm + "-" + yyyy;

    const user = await User.updateOne(
      { _id: userId },
      {
        $push: {
          order: {
            $each: items,
          },
        },
      }
    );

    // items.map((item) => {
    // console.log(items);
    const details = await Seller.bulkWrite(
      items.map((item) => {
        return {
          updateOne: {
            filter: { _id: item.sellerId },
            update: {
              $push: {
                order: item,
              },
            },
            upsert: true,
          },
        };
      })
    );
    // console.log(details);
    // const details = await Seller.bulkWrite([
    //   {
    //     updateOne: {
    //       filter: { _id: item[0].sellerId },
    //       update: {
    //         $push: {
    //           order: item[0],
    //         },
    //       },
    //     },
    //   },
    // ]);
    // console.log(details);
    // });

    // console.log(user);
    res.json(user);
  } catch (error) {
    // console.log(error);
    res.send({ msg: error.message });
  }
});

export default router;
