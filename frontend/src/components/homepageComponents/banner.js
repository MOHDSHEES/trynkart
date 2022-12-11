import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="mb-2"></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="banner banner-overlay">
              <a href="#!">
                <img
                  src={process.env.PUBLIC_URL + "/images/banner-1.jpg"}
                  alt="Banner"
                />
              </a>

              <div className="banner-content">
                <h4 className="banner-subtitle text-white">
                  <a href="#!">Weekend Sale</a>
                </h4>
                <h3 className="banner-title text-white">
                  <a href="#!">
                    Lighting <br />& Accessories <br />
                    <span>25% off</span>
                  </a>
                </h3>
                <a href="#!" className="banner-link">
                  Shop Now <i className="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 order-lg-last">
            <div className="banner banner-overlay">
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/images/banner-3.jpg"}
                  alt="Banner"
                />
              </a>

              <div className="banner-content">
                <h4 className="banner-subtitle text-white">
                  <a href="#">Smart Offer</a>
                </h4>
                <h3 className="banner-title text-white">
                  <a href="#">
                    Anniversary <br />
                    Special <br />
                    <span>15% off</span>
                  </a>
                </h3>
                <a href="#" className="banner-link">
                  Shop Now <i className="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner banner-overlay">
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "/images/banner-2.jpg"}
                  alt="Banner"
                />
              </a>

              <div className="banner-content">
                <h4 className="banner-subtitle text-white d-none d-sm-block">
                  <a href="#">Amazing Value</a>
                </h4>
                <h3 className="banner-title text-white">
                  <a href="#">
                    Clothes Trending <br />
                    Spring Collection 2019 <br />
                    <span>from &#8377;12,99</span>
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
    </div>
  );
};

export default Banner;
