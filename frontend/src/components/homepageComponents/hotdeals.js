import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import formatter from "../functions/formatter";

const Hotdeals = () => {
  return (
    <div>
      {/* <div className="mb-2"></div> */}
      <div className="bg-light pt-3 ">
        <div className="container">
          <div className="heading heading-flex heading-border mb-3">
            <div className="heading-left">
              <h2 className="title">Hot Deals Products</h2>
            </div>

            <div className="heading-right">
              <ul
                className="nav nav-pills nav-border-anim justify-content-center "
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link  "
                    style={{ paddingTop: "1.55rem", paddingBottom: " 1.55rem" }}
                    id="hot-acc-link"
                    data-toggle="tab"
                    href="#hot-acc-tab"
                    role="tab"
                    aria-controls="hot-acc-tab"
                    aria-selected="false"
                  >
                    Accessories
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active hover-color "
                    style={{ paddingTop: "1.55rem", paddingBottom: " 1.55rem" }}
                    id="hot-all-link"
                    data-toggle="tab"
                    href="#hot-all-tab"
                    role="tab"
                    aria-controls="hot-all-tab"
                    aria-selected="true"
                  >
                    All
                  </a>
                </li>

                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    id="hot-elec-link"
                    data-toggle="tab"
                    href="#hot-elec-tab"
                    role="tab"
                    aria-controls="hot-elec-tab"
                    aria-selected="false"
                  >
                    Electronics
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    id="hot-furn-link"
                    data-toggle="tab"
                    href="#hot-furn-tab"
                    role="tab"
                    aria-controls="hot-furn-tab"
                    aria-selected="false"
                  >
                    Furniture
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    id="hot-clot-link"
                    data-toggle="tab"
                    href="#hot-clot-tab"
                    role="tab"
                    aria-controls="hot-clot-tab"
                    aria-selected="false"
                  >
                    Clothes
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="tab-content tab-content-carousel">
            <div
              className="tab-pane p-0 fade"
              id="hot-acc-tab"
              role="tabpanel"
              aria-labelledby="hot-acc-link"
            >
              <OwlCarousel
                className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow "
                // data-toggle="owl"

                nav={false}
                dots
                margin={20}
                loop={false}
                responsive={{
                  0: {
                    items: 2,
                  },
                  480: {
                    items: 2,
                  },
                  768: {
                    items: 3,
                  },
                  992: {
                    items: 4,
                  },
                  1280: {
                    items: 5,
                    nav: true,
                  },
                }}
              >
                {/* <div
                className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                data-toggle="owl"
                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1280": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'
              > */}
                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1640599268/Jewellery/Precious%20Jewellery/1640599265981.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>
                    {/* 
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                  
                    </div> */}

                    {/* <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                        Jwellery
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                        Jaipur Mart Jewellery Set for Women (Peach)(KN221PCH)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">
                        {formatter.format(42219)}
                      </span>
                      <span className="old-price">
                        Was {formatter.format(45890)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/furniture/6129fb3c265c55080a362140">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1630140169/products-images/stool_qkk3rn.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>
                    {/* 
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div> */}

                    {/* <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/furniture/6129fb3c265c55080a362140">
                        Furniture
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/furniture/6129fb3c265c55080a362140">
                        Modern small stool (chair)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">
                        {formatter.format(1899)}
                      </span>
                      <span className="old-price">
                        Was {formatter.format(2000)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>

                    {/* <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#b58555" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#93a6b0" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/clock/6214fe1ef7cf2b00044f5c04">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1645542965/Home%20Decor/Clocks%20and%20Wall%20Decor/1645542964254.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>

                    {/* <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div>

                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/clock/6214fe1ef7cf2b00044f5c04">
                        Ckocks
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/clock/6214fe1ef7cf2b00044f5c04">
                        DivineCrafts Analog 32.5 cm X 32.5 cm Wall Clock
                        (Multicolor, With Glass)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">{formatter.format(899)}</span>
                      <span className="old-price">
                        Was {formatter.format(1000)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>

                    {/* <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#b58555" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#93a6b0" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-top">Top</span>
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/computer/61c98c2413014d0004c2ad44">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1640598619/Computer%20-%20Accessories%20and%20Components/Laptops/1640598618944.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>

                    <div
                      className="product-countdown"
                      data-until="+9h"
                      data-format="HMS"
                      data-relative="true"
                      data-labels-short="true"
                    ></div>

                    {/* <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div>

                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/computer/61c98c2413014d0004c2ad44">
                        Computer
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/computer/61c98c2413014d0004c2ad44">
                        ASUS Athlon Dual Core 3050U - (4 GB/1 TB HDD/Windows 10
                        Home) M515DA-EJ002TS Thin and Light Laptop (15.6 inch,
                        Transparent Silver, 1.80 kg, With MS Office)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">
                        {formatter.format(74620)}
                      </span>
                      <span className="old-price">
                        Was {formatter.format(91000)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 1 Review )</span>
                    </div>

                    {/* <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#69b4ff" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#ff887f" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#333333" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div> */}
                  </div>
                </div>
                {/* </div> */}
              </OwlCarousel>
            </div>
            <div
              className="tab-pane p-0 fade show active"
              id="hot-all-tab"
              role="tabpanel"
              aria-labelledby="hot-all-link"
            >
              <OwlCarousel
                className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow "
                // data-toggle="owl"

                nav={false}
                dots
                margin={20}
                loop={false}
                responsive={{
                  0: {
                    items: 2,
                  },
                  480: {
                    items: 2,
                  },
                  768: {
                    items: 3,
                  },
                  992: {
                    items: 4,
                  },
                  1280: {
                    items: 5,
                    nav: true,
                    // dot: false,
                  },
                }}
              >
                {/* <div
                className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                data-toggle="owl"
                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1280": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'
              > */}
                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-new">New</span>
                    <Link to="/product/jwellery/621500d7f7cf2b00044f5d54">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1645869487/Jewellery/Precious%20Jewellery/1645869486909.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>

                    {/* <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div> */}

                    {/* <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/jwellery/621500d7f7cf2b00044f5d54">
                        Jwellery
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/jwellery/621500d7f7cf2b00044f5d54">
                        Gold Rings Online | Diamond Rings
                      </Link>
                    </h3>
                    <div className="product-price">
                      {formatter.format(40827)}
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-top">Top</span>
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/computer/61c98c2413014d0004c2ad44">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1640598619/Computer%20-%20Accessories%20and%20Components/Laptops/1640598618944.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>

                    <div
                      className="product-countdown"
                      data-until="+9h"
                      data-format="HMS"
                      data-relative="true"
                      data-labels-short="true"
                    ></div>

                    {/* <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div>

                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/computer/61c98c2413014d0004c2ad44">
                        Computer
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/computer/61c98c2413014d0004c2ad44">
                        ASUS Athlon Dual Core 3050U - (4 GB/1 TB HDD/Windows 10
                        Home) M515DA-EJ002TS Thin and Light Laptop (15.6 inch,
                        Transparent Silver, 1.80 kg, With MS Office)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">
                        {formatter.format(74620)}
                      </span>
                      <span className="old-price">
                        Was {formatter.format(91000)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 1 Review )</span>
                    </div>

                    {/* <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#69b4ff" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#ff887f" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#333333" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/clock/6214fe1ef7cf2b00044f5c04">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1645542965/Home%20Decor/Clocks%20and%20Wall%20Decor/1645542964254.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>

                    {/* <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div>

                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/clock/6214fe1ef7cf2b00044f5c04">
                        Ckocks
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/clock/6214fe1ef7cf2b00044f5c04">
                        DivineCrafts Analog 32.5 cm X 32.5 cm Wall Clock
                        (Multicolor, With Glass)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">{formatter.format(899)}</span>
                      <span className="old-price">
                        Was {formatter.format(1000)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>

                    {/* <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#b58555" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#93a6b0" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/furniture/6129fb3c265c55080a362140">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1630140169/products-images/stool_qkk3rn.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>
                    {/* 
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    
                    </div> */}

                    {/* <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/furniture/6129fb3c265c55080a362140">
                        Furniture
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/furniture/6129fb3c265c55080a362140">
                        Modern small stool (chair)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">
                        {formatter.format(1899)}
                      </span>
                      <span className="old-price">
                        Was {formatter.format(2000)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>

                    {/* <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#b58555" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#93a6b0" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media product-figure">
                    <span className="product-label label-sale">Sale</span>
                    <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1640599268/Jewellery/Precious%20Jewellery/1640599265981.jpg"
                        alt="Product"
                        className="product-image"
                      />
                    </Link>
                    {/* 
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                  
                    </div> */}

                    {/* <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <span>add to cart</span>
                      </a>
                    </div> */}
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                        Jwellery
                      </Link>
                    </div>
                    <h3 className="product-title break-lines-2">
                      <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                        Jaipur Mart Jewellery Set for Women (Peach)(KN221PCH)
                      </Link>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">
                        {formatter.format(42219)}
                      </span>
                      <span className="old-price">
                        Was {formatter.format(45890)}
                      </span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 0 Review )</span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotdeals;
