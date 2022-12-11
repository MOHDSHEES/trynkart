import React from "react";
import { useSelector, useDispatch } from "react-redux";
import formatter from "../functions/formatter";
import { addToCart, addToWishlist } from "../../actions/itemsDataActions";
import popup from "../functions/popup";
import Sidebarfilter from "./sidebarFilter";
import { Link } from "react-router-dom";

const Categoryproducts = () => {
  const itemList = useSelector((state) => state.itemsPage);
  const { items, loading, error } = itemList;
  const userDetail = useSelector((state) => state.loginCheck);
  const { user } = userDetail;
  function togglemenu() {
    document.body.classList.toggle("sidebar-filter-active");
  }

  const dispatch = useDispatch();
  //  add to cart function
  function addToCartHandle(product) {
    // console.log("in");
    if (user && user.user) {
      dispatch(
        addToCart(
          product._id,
          user.user._id,
          product.productImg,
          product.name,
          product.original_price,
          product.sellingPrice || null,
          product.off,
          product.stock,
          product.displayinfo || "",
          product.sellerId[0]
        )
      );
      popup({ title: "Item Sucessfully Added." });
      // popup.current.classList.remove("cart-popup-close");
      // setTimeout(() => {
      //   popup.current.classList.add("cart-popup-close");
      // }, 2000);
    } else {
      window.$("#signin-modal").modal("show");
      // console.log("else");
    }
  }

  function WishlistHandle(item) {
    if (user && user.user) {
      dispatch(
        addToWishlist(
          item._id,
          user.user._id,
          item.productImg,
          item.displayinfo,
          item.original_price,
          item.sellingPrice,
          item.off
        )
      );
      popup({ title: "Item Sucessfully Added." });
      // setchecked(!checked);
    } else {
      window.$("#signin-modal").modal("show");
    }
  }

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div
      style={{ padding: "25px 30px", fontWeight: "600" }}
      className="alert alert-danger "
      role="alert"
    >
      {error.msg}
    </div>
  ) : (
    <div className="page-content">
      <div className="container">
        <div className="toolbox mt-4 mb-3">
          <div className="toolbox-left">
            <a href="#!" onClick={togglemenu} className="sidebar-toggler">
              <i className="icon-bars"></i>Filters
            </a>
          </div>

          <div className="toolbox-center">
            <div className="toolbox-info">
              Showing{" "}
              <span> {items && items.length + " of " + items.length}</span>{" "}
              Products
            </div>
          </div>

          <div className="toolbox-right">
            <div className="toolbox-sort">
              <label htmlFor="sortby">Sort by:</label>
              <div className="select-custom">
                <select name="sortby" id="sortby" className="form-control">
                  <option value="popularity" selected="selected">
                    Most Popular
                  </option>
                  <option value="rating">Most Rated</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="products">
          <div className="row">
            {items &&
              items.map((item, idx) => {
                let reviews = item.rating ? item.rating.length : 0;
                return (
                  item.status === "Active" && (
                    <div key={idx} className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div className="product">
                        <figure className="product-media product-figure">
                          {item.ar && (
                            <span className="product-label label-new">AR</span>
                          )}
                          <Link
                            to={"/product/" + item.category + "/" + item._id}
                          >
                            <img
                              src={item.productImg[0]}
                              alt="Product"
                              className="product-image"
                            />
                          </Link>

                          <div className="product-action-vertical">
                            <a
                              href="#"
                              onClick={() => WishlistHandle(item)}
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>

                          <div className="product-action action-icon-top">
                            <a
                              href="#"
                              onClick={() => addToCartHandle(item)}
                              className="btn-product btn-cart"
                            >
                              <span>add to cart</span>
                            </a>
                          </div>
                        </figure>

                        <div className="product-body">
                          <div className="product-cat">
                            <Link
                              to={"/product/" + item.category + "/" + item._id}
                            >
                              {item.name}
                            </Link>
                          </div>
                          <h3 className="product-title break-lines-2">
                            <Link
                              to={"/product/" + item.category + "/" + item._id}
                            >
                              {item.displayinfo}
                            </Link>
                          </h3>
                          <div className="product-price sansarif">
                            {formatter.format(item.sellingPrice)}
                          </div>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "0%" }}
                              ></div>
                            </div>
                            <span className="ratings-text">
                              {" "}
                              ( {reviews}
                              {reviews > 1 ? " Reviews" : " Review"} )
                            </span>
                          </div>

                          <div className="product-nav product-nav-dots">
                            {item.colors &&
                              item.colors.map((color, idx) => {
                                return (
                                  <a
                                    key={idx}
                                    href="#!"
                                    style={{
                                      background: color,
                                    }}
                                  >
                                    <span className="sr-only">{color}</span>
                                  </a>
                                );
                              })}
                            {/* <a
                              href="#"
                              style={{
                                background: item.colors && item.colors[0],
                              }}
                            >
                              <span className="sr-only">
                                {item.colors && item.colors[0]}
                              </span>
                            </a>
                          */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
          </div>
          {/* <div className="load-more-container text-center">
            <a href="#" className="btn btn-outline-darker btn-load-more">
              More Products <i className="icon-refresh"></i>
            </a>
          </div> */}
        </div>

        <Sidebarfilter />
        {/* <div className="sidebar-filter-overlay"></div>
        <aside className="sidebar-shop sidebar-filter">
          <div className="sidebar-filter-wrapper">
            <div className="widget widget-clean">
              <label>
                <i className="icon-close"></i>Filters
              </label>
              <a href="#" className="sidebar-filter-clear">
                Clean All
              </a>
            </div>
            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-1"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-1"
                >
                  Category
                </a>
              </h3>

              <div className="collapse show" id="widget-1">
                <div className="widget-body">
                  <div className="filter-items filter-items-count">
                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-1"
                        />
                        <label className="custom-control-label" for="cat-1">
                          Dresses
                        </label>
                      </div>
                      <span className="item-count">3</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-2"
                        />
                        <label className="custom-control-label" for="cat-2">
                          T-shirts
                        </label>
                      </div>
                      <span className="item-count">0</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-8"
                        />
                        <label className="custom-control-label" for="cat-8">
                          Sportwear
                        </label>
                      </div>
                      <span className="item-count">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-2"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-2"
                >
                  Size
                </a>
              </h3>

              <div className="collapse show" id="widget-2">
                <div className="widget-body">
                  <div className="filter-items">
                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="size-1"
                        />
                        <label className="custom-control-label" for="size-1">
                          XS
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-3"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-3"
                >
                  Colour
                </a>
              </h3>

              <div className="collapse show" id="widget-3">
                <div className="widget-body">
                  <div className="filter-colors">
                    <a href="#" style={{ background: "#b87145" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a href="#" style={{ background: "#f0c04a" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a
                      href="#"
                      className="selected"
                      style={{ background: "#cc3333" }}
                    >
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a href="#" style={{ background: "#3399cc" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a href="#" style={{ background: "#669933" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a href="#" style={{ background: "#f2719c" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                    <a href="#" style={{ background: "#ebebeb" }}>
                      <span className="sr-only">Color Name</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget widget-collapsible">
              <h3 className="widget-title">
                <a
                  data-toggle="collapse"
                  href="#widget-4"
                  role="button"
                  aria-expanded="true"
                  aria-controls="widget-4"
                >
                  Brand
                </a>
              </h3>

              <div className="collapse show" id="widget-4">
                <div className="widget-body">
                  <div className="filter-items">
                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="brand-1"
                        />
                        <label className="custom-control-label" for="brand-1">
                          Next
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside> */}
      </div>
    </div>
  );
};

export default Categoryproducts;
