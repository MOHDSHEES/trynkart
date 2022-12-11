// import React, { useEffect, useState } from "react";
import Axios from "axios";

// import { useDispatch } from "react-redux";
// import { orderPlacing } from "../../actions/orderDataAction";

// function RazorPay() {
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// function SaveOrder(userId, items, qty, address, orderId) {
//   const dispatch = useDispatch();

//   dispatch(orderPlacing(userId, items, qty, address, orderId));
// }

async function displayRazorpay(price, userId, items, qty, address, history) {
  //   console.log(userId);
  await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  const { data } = await Axios.post("/api/payment/order", {
    amount: price,
  });
  //   console.log(data);
  // <button id="rzp-button1">Pay</button>;
  //   test key
  //   rzp_test_zGkovoh4c3r7NR
  // rzp_live_usogw5HNyOHs5u
  var options = {
    key: "rzp_test_zGkovoh4c3r7NR", // Enter the Key ID generated from the Dashboard
    amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "TryNcart",
    description: "Test Transaction",
    image: "/logo.jpeg",
    order_id: data.id,
    handler: function (response) {
      // console.log(response.razorpay_payment_id);
      // // console.log(items);
      // console.log(response.razorpay_order_id);
      // console.log(response.razorpay_signature);
      const today = new Date();
      const dd = String(today.getDate());
      const mm = String(today.getMonth() + 1);
      const yyyy = today.getFullYear();
      const date = dd + "-" + mm + "-" + yyyy;
      let products = [];
      // console.log(items);
      items.map((item, idx) => {
        products.push({
          productId: item._id,
          displayInfo: item.displayinfo,
          productImg: item.productImg[0],
          sellingPrice: item.sellingPrice,
          address,
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          qty: qty[idx],
          mrp: item.original_price,
          date: date,
          userId: userId,
          sellerId: item.sellerId,
        });
        return null;
      });
      // console.log(products);
      Axios.post("/api/payment/order/placing", {
        userId,
        products,
      });
      history.replace({ pathname: "/order/summary", state: products });
      // alert("payment sucessfull");
      // SaveOrder(userId, items, qty, address, response.razorpay_order_id);
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    //   prefill: {
    //     name: "",
    //     email: "",
    //     contact: "",
    //   },
    //   notes: {
    //     address: "Razorpay Corporate Office",
    //   },
    theme: {
      color: "#3399cc",
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
  });

  rzp1.open();
  //   e.preventDefault();
}

//   return (
//     <div>
//       {/* <button id="rzp-button1">Pay</button>; */}
//       <button onClick={displayRazorpay} className="btn btn-primary">
//         pay
//       </button>
//     </div>
//   );
// }

export { displayRazorpay, loadScript };
