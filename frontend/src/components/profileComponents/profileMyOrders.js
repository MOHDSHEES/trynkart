import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import formatter from "../functions/formatter";
// import { formatter } from "./scroll";

function MyOrders(props) {
  const [data, setdata] = useState("");
  const [details, setdetails] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    async function logincredentials() {
      setloading(true);
      const { data } = await Axios.post("/api/user/details/" + props.userId);
      setdetails(data);
      setdata(data && data.order && data.order.length && data.order.reverse());
      setloading(false);
    }

    logincredentials();
  }, [props]);

  const history = useHistory();
  function orderDetails(item) {
    history.push({
      pathname: "/account/orderDetails",
      state: { item: item, details: details },
    });
  }
  return (
    <div
      className="profile-right profile-right-close animation slideIn "
      id="profile-myorders"
    >
      <p className="profile-info">My Orders</p>

      {loading ? (
        <div>Loading</div>
      ) : data && data.length ? (
        data.map((item, idx) => {
          return (
            <div className="myorder-flex-main" key={idx}>
              <div style={{ height: "auto" }} className=" borders">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => orderDetails(item)}
                  className="profile-myorder heading-color"
                >
                  <div className="placed" style={{ padding: "2px" }}>
                    ORDER PLACED<div>{item.date}</div>
                  </div>
                  <div className="qty" style={{ padding: "2px" }}>
                    QTY
                    <div>{item.qty}</div>
                  </div>
                  <div className="shiped" style={{ padding: "2px" }}>
                    SHIPS TO<div>{item.address.name}</div>
                  </div>
                  <div className="orderid" style={{ padding: "2px" }}>
                    ORDER ID<div> {item.orderId}</div>
                  </div>
                </div>
                <div className="delivered-status">
                  {/* Delivered 30-Apr-2021{" "} */}
                  Under Processing
                  <span style={{ float: "right", color: "grey" }}>
                    {/* Qty: {item.qty} */}
                    Total: {formatter.format(item.sellingPrice * item.qty)}
                  </span>
                </div>
                <div className="cart-items order-items">
                  {/* <Link
                      id="items-section-anchor"
                      to={"/item/laptops/" + item.productId}
                    > */}
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => orderDetails(item)}
                    className="cart-item-image"
                  >
                    <img src={item.productImg} alt="Laptop" />
                  </div>
                  {/* </Link> */}
                  <div className="cart-item-details">
                    {/* <Link
                        id="items-section-anchor"
                        to={"/item/laptops/" + item.productId}
                      > */}
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => orderDetails(item)}
                      className="cart-item-name"
                    >
                      <p>{item.displayInfo}</p>
                    </div>
                    {/* </Link> */}

                    <Link
                      to={"/product/laptops/" + item.productId}
                      className="btn btn-outline-primary buy-again-btn"
                    >
                      Buy again
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ padding: "10px", textAlign: "center" }}>
          <h4>No Orders Yet!</h4>
          <Link className="btn btn-success empty-cart-btn" to="/">
            Shop now
          </Link>
        </div>
        // <div className="empty-cart-container ">
        //   <div className="empty-cart">
        //     <h4>No Orders Yet!</h4>
        //     <Link to="/">
        //       <button className="btn btn-success empty-cart-btn">
        //         Shop now
        //       </button>
        //     </Link>
        //   </div>
        // </div>
      )}
      {/* <div className="myorder-flex-main">
        <div style={{ height: "auto" }} className=" borders">
          <div className="profile-myorder">
            <div className="placed">
              ORDER PLACED<div>24 April 2021</div>
            </div>
            <div className="total">
              TOTAL<div>45,500.00</div>
            </div>
            <div className="shiped">
              SHIPS TO<div>MOHD SHEES</div>
            </div>
            <div className="orderid">
              ORDER ID<div> 40229146178026760</div>
            </div>
          </div>
          <div className="delivered-status">Delivered 30-Apr-2021</div>
          <div className="cart-items order-items">
            <Link
              id="items-section-anchor"
              to={"/item/laptops/60f3d445574d77f19a61570a"}
            >
              <div className="cart-item-image">
                <img src="https://bit.ly/3vvAqXd" alt="Laptop" />
              </div>
            </Link>
            <div className="cart-item-details">
              <Link
                id="items-section-anchor"
                to={"/item/laptops/60f3d445574d77f19a61570a"}
              >
                <div className="cart-item-name">
                  <p>
                    ASUS Athlon Dual Core 3050U - (4 GB/1 TB HDD/Windows 10
                    Home) M515DA-EJ002TS Thin and Light Laptop (15.6 inch,
                    Transparent Silver, 1.80 kg, With MS Office)
                  </p>
                </div>
              </Link>
              <button type="submit" className="btn btn-primary buy-again-btn">
                Buy again
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default MyOrders;
