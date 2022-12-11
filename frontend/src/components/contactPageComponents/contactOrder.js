import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const Contactorder = () => {
  const [order, setorder] = useState([]);

  const usersInfo = useSelector((state) => state.loginCheck);
  const {
    user: { user },
  } = usersInfo;
  // getting order details
  useEffect(() => {
    async function logincredentials() {
      if (user && user._id && order.length === 0) {
        const { data } = await Axios.post("/api/user/details/" + user._id);

        setorder(
          data && data.order && data.order.length && data.order.reverse()
        );
      }
    }

    logincredentials();
  }, [user, order]);

  const history = useHistory();
  function orderDetails(item) {
    history.push({
      pathname: "/account/orderDetails",
      state: { item: item, details: { order: order } },
    });
  }
  return (
    <div>
      {order && order.length !== 0 && (
        <div
          id="contact-orders"
          className="borders"
          style={{ backgroundColor: "white", marginTop: "10px" }}
        >
          <h5 className="contact-headings mb-2">Help with your Orders</h5>
          {order.slice(0, 2).map((item, idx) => {
            return (
              <div
                key={idx}
                className=" contact-items"
                style={{ marginBottom: "0" }}
              >
                <div
                  onClick={() => orderDetails(item)}
                  style={{ cursor: "pointer" }}
                  className="cart-item-image wishlist-img"
                >
                  <img
                    style={{ margin: "auto" }}
                    src={item.productImg}
                    alt=""
                  />
                </div>

                <div className="contact-item-details">
                  <div className="btn-group wishlist-btn-div"></div>

                  <div
                    onClick={() => orderDetails(item)}
                    style={{ cursor: "pointer" }}
                    className="contact-item-name"
                  >
                    <p style={{ fontWeight: "400" }}>{item.displayInfo}</p>
                  </div>
                  <p
                    style={{ padding: "0" }}
                    className="delivered-status contact-delivered-status"
                  >
                    &#8226; Under Processing
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Contactorder;
