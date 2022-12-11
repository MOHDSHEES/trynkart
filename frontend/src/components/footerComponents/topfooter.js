import React from "react";

const Topfooter = () => {
  return (
    <div className="icon-boxes-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-rocket"></i>
                {/* <i className="far fa-shipping-fast"></i> */}
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Free Shipping</h3>
                <p>orders &#8377;50 or more</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-rotate-left"></i>
              </span>

              <div className="icon-box-content">
                <h3 className="icon-box-title">Free Returns</h3>
                <p>within 30 days</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-info-circle"></i>
              </span>

              <div className="icon-box-content">
                <h3 className="icon-box-title">Get Excitement offers</h3>
                <p>Upto 60% Off</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="icon-box icon-box-side">
              <span className="icon-box-icon text-dark">
                <i className="icon-life-ring"></i>
              </span>

              <div className="icon-box-content">
                <h3 className="icon-box-title">We Support</h3>
                <p>24/7 amazing services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topfooter;
