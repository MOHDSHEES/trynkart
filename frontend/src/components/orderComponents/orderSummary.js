import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import formatter from "../functions/formatter";
// import { formatter } from "../scroll";

function OrderSummary() {
  const location = useLocation();
  const data = location.state;
  const history = useHistory();
  useEffect(() => {
    if (!data) {
      history.push("/");
    }
  }, [data, history]);
  return (
    <div className="ordersummary-container">
      <div class="ordersummary-card mt-50 mb-50">
        <div class="col d-flex">
          <span class="text-muted mt-1" id="orderno">
            Order id:
            {data && data[0].orderId}
          </span>
        </div>
        {/* <div class="ordersummary-gap">
          <div class="col-2 d-flex mx-auto"> </div>
        </div> */}
        <div class="title mx-auto mt-3 mb-3" style={{ textAlign: "center" }}>
          {" "}
          Thank you for your order!{" "}
        </div>
        <div class="ordersummary-main">
          {" "}
          <span id="sub-title">
            <p style={{ fontSize: "1.3rem" }}>
              <b>Payment Summary</b>
            </p>
          </span>
          {data &&
            data.map((item, idx) => {
              return (
                <div class="row row-main">
                  <div class="col-3">
                    {" "}
                    <img class="img-fluid" src={item.productImg} alt="" />{" "}
                    {/* <img src="logo.jpeg" /> */}
                  </div>
                  <div class="col-6">
                    <div class="row d-flex">
                      <p style={{ fontSize: "1.1rem" }}>
                        {/* dfgfd gfdg fh fh fghfgh fg hfghdfh et t t 4y 33 */}
                        <b className="order-displayinfo">{item.displayInfo}</b>
                      </p>
                    </div>
                    {/* <div class="row d-flex">
                  <p class="text-muted"></p>
                </div> */}
                  </div>
                  <div class="col-3 d-flex justify-content-end">
                    <p>
                      <b className="sansarif" style={{ fontSize: "1.1rem" }}>
                        {/* {formatter.format(1684)} qty: 2 */}
                        {formatter.format(item.sellingPrice)} qty: {item.qty}
                      </b>
                    </p>
                  </div>
                </div>
              );
            })}
          <hr className="ordersummary-hr  mb-3" />
          <div class="total">
            <div class="row">
              <div class="col">
                {" "}
                <b style={{ fontSize: "1.4rem" }}> Total:</b>{" "}
              </div>
              <div class="col d-flex justify-content-end">
                {" "}
                <b className="sansarif" style={{ fontSize: "1.4rem" }}>
                  {data &&
                    formatter.format(
                      data.reduce(
                        (previousValue, currentValue) =>
                          previousValue +
                          currentValue.sellingPrice * currentValue.qty,
                        0
                      )
                    )}
                </b>{" "}
              </div>
            </div>{" "}
            <button
              onClick={() => history.replace("/")}
              class="btn d-flex mx-auto ordersummary-btn"
              style={{ fontSize: "1.2rem" }}
            >
              {" "}
              Shop More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
