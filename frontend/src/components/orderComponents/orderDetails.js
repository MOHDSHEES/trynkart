import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import formatter from "../functions/formatter";
import Axios from "axios";
import Invoice from "../invoice-pdf/invoice";
import { PDFDownloadLink } from "@react-pdf/renderer";

function OrderDetails() {
  const history = useHistory();
  const location = useLocation();
  const [item, setitem] = useState();
  const [together, settogether] = useState([]);
  const [payment, setpayment] = useState();

  window.$(function () {
    window.$('[data-toggle="tooltip"]').tooltip();
  });

  useEffect(() => {
    if (location.state && location.state.item) {
      // console.log(location.state.item);
      // console.log(location.state.details.order);
      setitem(location.state.item);
      async function fetchPayment(e) {
        const { data } = await Axios.post(
          "/api/payment/order/details/" + location.state.item.paymentId
        );
        setpayment(data);
      }

      fetchPayment();

      //   fetching products bought together (using OrderId)
      if (
        location.state.details &&
        location.state.details.order &&
        together.length === 0
      ) {
        let order = location.state.details.order;
        settogether([]);
        let flag = 0;
        order.forEach(function (ord) {
          if (ord.orderId === location.state.item.orderId) {
            flag = 1;
            if (ord.productId !== location.state.item.productId) {
              settogether([...together, ord]);
            }
          } else if (flag === 1) {
            return;
          }
          //   if (ord.orderId === location.state.item.orderId) {
          //     flag = 1;
          //   }
        });
      }
    } else {
      history.push("/account");
    }
  }, [location.state]);

  return item ? (
    <div className="orderdetails-container">
      {/* <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Invoice invoice={item} together={together} payment={payment} />
      </PDFViewer> */}
      <div
        className="d-flex flex-column justify-content-center align-items-center "
        id="order-heading"
      >
        <div className="text-uppercase ">
          <p className="order-detail-p">Order detail</p>
        </div>
        <div className="h4" style={{ marginBottom: "0" }}>
          Id:- {item.orderId}
        </div>
        <div className="pt-1">
          <p className="order-details-status" style={{ marginBottom: "0" }}>
            Placed on {" " + item.date} is currently<b> processing</b>
          </p>
          <div className="mb-1" style={{ textAlign: "center" }}>
            <PDFDownloadLink
              document={
                <Invoice invoice={item} together={together} payment={payment} />
              }
              fileName={"Invoice.pdf"}
              style={{ color: "white" }}
            >
              {({ blob, url, loading, error }) =>
                !loading && (
                  <div className="invoice-dnld-btn">
                    {" "}
                    Download Invoice {/* <span style={{ color: "red" }}> */}
                    {/* <i class="far fa-file-pdf"></i> */}
                    <i class="fas fa-file-invoice"></i>
                    {/* </span> */}
                    {/* <i class="fas fa-file-invoice"></i> */}
                  </div>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>

        {/* <div className="btn close text-white"> &times; </div> */}
      </div>
      <div className="orderdetails-wrapper bg-white shadow">
        <div className="table-responsive orderdetails-tableresponsive">
          <table className="table table-borderless orderdetails-table">
            <thead>
              <tr className="text-uppercase text-muted">
                <th scope="col">product id</th>
                <th scope="col" className="text-right">
                  mrp
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row "
                  style={{ paddingRight: "5px", color: "black" }}
                  className="orderdetails-row"
                >
                  {item.productId}
                </th>
                <td className="text-right">
                  <b>{formatter.format(item.mrp)}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="d-flex justify-content-start align-items-center orderdetails-list py-1"
          style={{ margin: "20px 0" }}
          onClick={() => history.push("/product/category/" + item.productId)}
        >
          <div style={{ marginRight: "1rem", width: "60px" }}>
            {" "}
            <img
              src={item.productImg}
              className="order-details-img"
              alt=""
              //   className="rounded-circle"
              // width="60"
              // height="60"
            />{" "}
          </div>
          <div className="order-item" style={{ marginRight: "10px" }}>
            {item.displayInfo}
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <b>{item.qty}</b>
          </div>
        </div>
        {together && together.length !== 0 && (
          <div>
            <div
              className="pl-3 font-weight-bold grey"
              style={{ fontSize: "1.4rem" }}
            >
              Products Bought Together
            </div>
            <div style={{ margin: "20px 0", marginBottom: "30px" }}>
              {together.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="d-flex justify-content-start align-items-center orderdetails-list py-1"
                    onClick={() =>
                      history.push("/product/category/" + item.productId)
                    }
                  >
                    <div style={{ marginRight: "1rem", width: "60px" }}>
                      {" "}
                      <img
                        src={item.productImg}
                        alt=""
                        className="order-details-img"
                        //   className="rounded-circle"
                        // width="60"
                        // height="60"
                      />{" "}
                    </div>

                    <div style={{ marginRight: "10px" }} className="order-item">
                      {item.displayInfo}
                    </div>
                    <div style={{ marginLeft: "auto", textAlign: "right" }}>
                      <b>
                        {formatter.format(item.sellingPrice)}
                        <br /> qty:{item.qty}
                      </b>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div
          className="border-bottom "
          style={{ marginBottom: "1rem", paddingTop: "0.5rem" }}
        ></div>
        <div className="d-flex justify-content-start align-items-center ">
          <div style={{ fontSize: "1.5rem" }} className="text-muted">
            Payment Method
          </div>
          <div className="ml-auto">
            {" "}
            {/* <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
              alt=""
              width="30"
              height="30"
            />{" "} */}
            <label className="orderdetails-label">
              {payment && payment.method}{" "}
              {payment && payment.wallet && payment.wallet}
            </label>{" "}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-1 ">
          <div style={{ fontSize: "1.5rem" }} className="text-muted">
            Shipping
          </div>
          <div className="ml-auto">
            {" "}
            <label className="orderdetails-label">Free</label>{" "}
          </div>
        </div>
        {/* <div className="d-flex justify-content-start align-items-center py-1">
          <div className="text-muted">Quantity</div>
          <div className="ml-auto">
            {" "}
            <label className="orderdetails-label">{item.qty}</label>{" "}
          </div>
        </div> */}
        <div
          className="d-flex justify-content-start align-items-center  border-bottom"
          style={{ paddingBottom: "1.5rem" }}
        >
          <div className="text-muted">
            {" "}
            <button
              className="text-white btn orderdetails-btn"
              style={{ fontSize: "1.4rem" }}
            >
              {(((item.mrp - item.sellingPrice) * 100) / item.mrp).toFixed()}%
              Discount
            </button>{" "}
          </div>
          <div className="ml-auto price" style={{ fontSize: "1.5rem" }}>
            {" "}
            - {formatter.format(item.mrp - item.sellingPrice)}{" "}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center py-1">
          <div className="text-muted" style={{ fontSize: "1.5rem" }}>
            Price
          </div>
          <div className="ml-auto">
            {" "}
            <label
              className="orderdetails-label"
              style={{ fontSize: "1.5rem" }}
            >
              {formatter.format(item.sellingPrice)}
            </label>{" "}
          </div>
        </div>
        <div
          className="d-flex justify-content-start align-items-center py-3  border-bottom"
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="text-muted" style={{ fontSize: "1.5rem" }}>
            Total Paid{" "}
          </div>
          <div className="ml-auto h5" style={{ marginBottom: "0" }}>
            {formatter.format(payment && payment.amount / 100)}{" "}
          </div>
        </div>
        <div className="row orderdetails-row border rounded p-1 my-3">
          <div className="col-md-12 py-3">
            <div className="d-flex flex-column align-items start">
              {" "}
              <b style={{ fontSize: "1.5rem" }}>Address</b>
              <p
                style={{ marginTop: "5px" }}
                className="orderdetails-text text-justify"
              >
                {item.address.name}
                <span style={{ marginLeft: "15px" }}>
                  {item.address.mobileno}
                </span>
              </p>
              <p
                style={{ marginTop: "-3px" }}
                className="orderdetails-text text-justify "
              >
                {item.address.address +
                  " " +
                  item.address.district +
                  " (" +
                  item.address.pincode +
                  ")."}
              </p>
              <p className="orderdetails-text text-justify">
                {item.address.state}
              </p>
            </div>
          </div>

          {/* <div className="col-md-6 py-3">
            <div className="d-flex flex-column align-items start">
              {" "}
              <b>Shipping Address</b>
              <p className="orderdetails-text text-justify pt-2">
                James Thompson, 356 Jonathon Apt.220,
              </p>
              <p className="orderdetails-text text-justify">New York</p>
            </div>
          </div> */}
        </div>
        <div className="pl-3 font-weight-bold" style={{ fontSize: "1.5rem" }}>
          More Details
        </div>
        <div className="d-sm-flex justify-content-between rounded my-3 subscriptions">
          <div>
            {" "}
            <b style={{ fontSize: "1.4rem", paddingRight: "10px" }}>
              Order Id : {" " + item.orderId}
            </b>
          </div>
          <div style={{ fontSize: "1.4rem", paddingRight: "10px" }}>
            Payment Id :{" " + item.paymentId}
          </div>

          {payment &&
          payment.acquirer_data &&
          payment.acquirer_data.transaction_data ? (
            <div style={{ fontSize: "1.4rem" }}>
              Transaction Id :{" " + payment.acquirer_data.transaction_id}
            </div>
          ) : payment && payment.card_id ? (
            <div style={{ fontSize: "1.4rem" }}>
              Card Id
              <span>
                <button
                  style={{
                    // marginBottom: "0",
                    lineHeight: "0",

                    margin: "0 5px 3px",
                  }}
                  type="button"
                  className="rounded-circle btn  tooltip-circle"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Id for the card used during payment. "
                >
                  ?
                </button>
              </span>
              :{" " + payment.card_id}
            </div>
          ) : (
            <div style={{ fontSize: "1.4rem" }}>
              Item Id :{" " + item.productId}
            </div>
          )}
          {/* <div>
            {" "}
            Total: <b> $68.8 for 10 items</b>{" "}
          </div> */}
        </div>
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default OrderDetails;
