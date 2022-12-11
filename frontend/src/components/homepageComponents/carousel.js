import React, { useCallback } from "react";

const Carousel = () => {
  //   const carous = useRef();

  const carous = useCallback((node) => {
    if (node !== null) {
      window.$(".carousel").carousel({
        interval: 3000,
      });
    }
  }, []);
  return (
    <div className="main">
      <div className="intro-slider-container">
        <div
          ref={carous}
          id="homepagecarousels"
          class="carousel slide"
          data-interval="3000"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#homepagecarousels"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#homepagecarousels" data-slide-to="1"></li>
            <li data-target="#homepagecarousels" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="3000">
              <div
                className="intro-slide"
                style={{
                  backgroundImage: "url('/slide-1.jpg')",
                }}
              >
                <div className="container intro-content">
                  <h3 className="intro-subtitle">Bedroom Furniture</h3>
                  <h1 className="intro-title">
                    Find Comfort <br />
                    That Suits You.
                  </h1>

                  <a href="#!" className="btn btn-primary">
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <div
                className="intro-slide"
                style={{
                  backgroundImage: "url('/slide-2.jpg')",
                }}
              >
                <div className="container intro-content">
                  <h3 className="intro-subtitle">Deals and Promotions</h3>
                  <h1 className="intro-title">
                    Ypperlig <br />
                    Coffee Table <br />
                    <span className="text-primary">
                      <sup>&#8377;</sup>49,99
                    </span>
                  </h1>

                  <a href="#!" className="btn btn-primary">
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <div
                className="intro-slide"
                style={{
                  backgroundImage: "url('/slide-3.jpg')",
                }}
              >
                <div className="container intro-content">
                  <h3 className="intro-subtitle">Living Room</h3>
                  <h1 className="intro-title">
                    Make Your Living Room <br />
                    Work For You.
                    <br />
                    <span className="text-primary">
                      <sup className="text-white font-weight-light">from</sup>
                      <sup>&#8377;</sup>9,99
                    </span>
                  </h1>

                  <a href="#!" className="btn btn-primary">
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
