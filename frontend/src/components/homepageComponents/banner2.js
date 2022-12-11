import React from "react";

const Banner2 = () => {
  return (
    <div className="container pb-2">
      <div className="mb-2"></div>
      <div className="row">
        <div className="col-lg-6">
          <div className="banner banner-overlay banner-overlay-light">
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "/images/banner-4.jpg"}
                alt="Banner"
              />
            </a>

            <div className="banner-content">
              <h4 className="banner-subtitle d-none d-sm-block">
                <a href="#">Spring Sale is Coming</a>
              </h4>
              <h3 className="banner-title">
                <a href="#">
                  All Smart Watches <br />
                  Discount <br />
                  <span className="text-primary">15% off</span>
                </a>
              </h3>
              <a href="#" className="banner-link banner-link-dark">
                Discover Now <i className="icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="banner banner-overlay">
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "/images/banner-5.png"}
                alt="Banner"
              />
            </a>

            <div className="banner-content">
              <h4 className="banner-subtitle text-white  d-none d-sm-block">
                <a href="#">Amazing Value</a>
              </h4>
              <h3 className="banner-title text-white">
                <a href="#">
                  Headphones Trending <br />
                  JBL Harman <br />
                  <span>from &#8377;59,99</span>
                </a>
              </h3>
              <a href="#" className="banner-link">
                Discover Now <i className="icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
