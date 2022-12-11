import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatter from "../functions/formatter";

const Cards = (props) => {
  const itemList = useSelector((state) => state.itemsListReducer);
  const {
    items: [items],
    loading,
    error,
  } = itemList;
  // console.log(items.products);
  // console.log(props.amount);
  // console.log(props.counter);
  return (
    <div>
      {/* <div className="mb-2"></div> */}
      <div className="bg-light pt-1 ">
        <div className="container">
          <div className="heading heading-flex heading-border mb-3">
            <div className="heading-left">
              <h2
                style={{ paddingTop: "1.55rem", paddingBottom: " 1.55rem" }}
                className="title"
              >
                {/* {props.category} */}
                sample
              </h2>
            </div>
          </div>

          <div className="tab-content tab-content-carousel">
            <div
              className="tab-pane p-0 fade show active"
              id="hot-all-tab"
              role="tabpanel"
              aria-labelledby="hot-all-link"
            >
              <div
                className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow "
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
              >
                <div className="product">
                  <figure className="product-media">
                    <span className="product-label label-new">New</span>

                    <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                      <img
                        src="https://res.cloudinary.com/shees/image/upload/v1640599268/Jewellery/Precious%20Jewellery/1640599265981.jpg"
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
                      <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                        Jwellery
                      </Link>
                    </div>
                    <h3 className="product-title">
                      <Link to="/product/jwellery/61c98e8a13014d0004c2ade1">
                        Jaipur Mart Jewellery Set for Women (Peach)(KN221PCH)
                      </Link>
                    </h3>
                    <div className="product-price">
                      {formatter.format(42219)}
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
                  <figure className="product-media">
                    <span className="product-label label-new">New</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-13/products/product-6.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>

                    <div className="product-action-vertical">
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
                    </div>
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Appliances</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">Neato Robotics</a>
                    </h3>
                    <div className="product-price">$399.00</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 12 Reviews )</span>
                    </div>
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media">
                    <span className="product-label label-top">Top</span>
                    <span className="product-label label-sale">Sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-13/products/product-5.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>

                    <div
                      className="product-countdown"
                      data-until="+7h"
                      data-format="HMS"
                      data-relative="true"
                      data-labels-short="true"
                    ></div>

                    <div className="product-action-vertical">
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
                    </div>
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Electronics</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Sony - Class LED 2160p Smart 4K Ultra HD
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">$1699.99</span>
                      <span className="old-price">Was $1999.99</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 10 Reviews )</span>
                    </div>
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media">
                    <span className="product-label label-sale">Sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-13/products/product-3.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>

                    <div className="product-action-vertical">
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
                    </div>
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Furniture</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Can 2-Seater Sofa <br />
                        frame charcoal
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">$3.050.00</span>
                      <span className="old-price">Was $3.200.00</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 6 Reviews )</span>
                    </div>

                    <div className="product-nav product-nav-dots">
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
                    </div>
                  </div>
                </div>

                <div className="product">
                  <figure className="product-media">
                    <span className="product-label label-sale">Sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-13/products/product-4.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>

                    <div className="product-action-vertical">
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
                    </div>
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Clothes</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">Tan suede biker jacket</a>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">$240.00</span>
                      <span className="old-price">Was $310.00</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">( 4 Reviews )</span>
                    </div>

                    <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: " #b58555" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#93a6b0" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
