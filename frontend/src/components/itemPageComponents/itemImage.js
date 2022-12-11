import React, { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  detailsItem,
} from "../../actions/itemsDataActions";
import formatter from "../functions/formatter";
import popup from "../functions/popup";
import CategorySkeleton from "../skeletonComponents/categorySkeleton";

import Carousel, { Modal, ModalGateway } from "react-images";

const Itemimage = () => {
  const [src, setsrc] = useState();
  const [active, setActive] = useState("img-0");
  const [ar, setAr] = useState(false);

  const itemDetails = useSelector((state) => state.itemDetails);

  window.$(function () {
    window.$('[data-toggle="tooltip"]').tooltip();
    window.$("#tooltip2d").tooltip({ title: "2d" });
    window.$("#tooltip3d").tooltip({ title: "3d" });
  });
  // setting ar true and disabling 3d tooltip
  function button3dhandler() {
    window.$("#tooltip3d").tooltip("hide");
    window.$("#tooltip3d").tooltip("dispose");
    setAr(true);
  }
  // setting ar false and disabling 2d tooltip
  function button2dhandler() {
    window.$("#tooltip2d").tooltip("hide");
    window.$("#tooltip2d").tooltip("dispose");
    setAr(false);
  }
  //

  const { items, loading, error } = itemDetails;
  const userDetail = useSelector((state) => state.loginCheck);
  const { user } = userDetail;
  const dispatch = useDispatch();
  // console.log(items);
  // console.log(items && Object.keys(items).length);
  let { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (id.length === 24) {
      dispatch(detailsItem(id));
    } else {
      history.replace("/404");
    }
  }, [dispatch, id, history]);

  function toogle(param, src) {
    setsrc(src);
    document.getElementById(active).classList.toggle("active");
    document.getElementById(param).classList.toggle("active");
    setActive(param);
  }
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
    } else {
      window.$("#signin-modal").modal("show");
    }
  }

  const wishlistDetails = useSelector((state) => state.addToWishlist);
  const { wishlist } = wishlistDetails;
  // checking if product is in wishlist
  const obj = wishlist.find((o) => o.id === id);
  const [checked, setchecked] = useState(obj ? true : false);
  // wishlist handle (add/remove)
  function WishlistHandle() {
    if (user && user.user) {
      dispatch(
        addToWishlist(
          id,
          user.user._id,
          items.productImg,
          items.displayinfo,
          items.original_price,
          items.sellingPrice,
          items.off
        )
      );
      popup({ title: "Item Sucessfully Added." });
      setchecked(!checked);
    } else {
      window.$("#signin-modal").modal("show");
    }
  }

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = () => {
    // console.log();
    setCurrentImage(active.slice(-1));
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    // setCurrentImage(0);
    setViewerIsOpen(false);
  };

  function buyHandle() {
    if (!user) {
      window.$("#sign-model").modal("show");
    } else {
      // window.alert("You can buy products soon...");
      // displayRazorpay(items.sellingPrice);
      history.push({
        pathname: "/order/" + user.user._id,
        state: [{ ...items, cartqty: 1 }],
      });
    }
  }

  return loading ? (
    <CategorySkeleton />
  ) : error || items.msg ? (
    <div
      style={{ padding: "10px 30px", marginBottom: "30px" }}
      className="alert alert-danger "
      role="alert"
    >
      {error} Oops! No Product Found...
    </div>
  ) : (
    <div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={items.productImg.map((x) => ({
                src: x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div class="product-details-top mb-2">
        <div class="row">
          <div class="col-md-6">
            <div class="product-gallery product-gallery-vertical">
              <div class="row align-items-start">
                {/* <figure
                  style={{ height: "400px" }}
                  class="product-main-image d-flex align-items-center"
                > */}

                {items.ar && ar ? (
                  <model-viewer
                    src={items.src_glb}
                    style={{ width: "100%", height: "400px" }}
                    ios-src={items.src_usdz}
                    alt="A 3D model"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                  ></model-viewer>
                ) : (
                  <InnerImageZoom
                    //    style={{ height: "400px" }}

                    className="product-main-image d-flex align-items-center justify-content-center"
                    src={src ? src : items.productImg && items.productImg[0]}
                    // src="https://res.cloudinary.com/shees/image/upload/v1630136377/products-images/chair_cdzqsw.jpg"
                    // zoomType="hover"
                    zoomPreload="true"
                    hideHint="true"
                    hasSpacer="true"
                    // hideCloseButton="true"
                    // afterZoomOut={() => {}}
                  />
                )}
                {!ar && (
                  <div>
                    <a
                      onClick={openLightbox}
                      href="#!"
                      id="btn-product-gallery"
                      class="btn-product-gallery"
                    >
                      <i class="icon-arrows"></i>
                    </a>
                    {/* <a
                      href="#!"
                      //   id="btn-product-gallery"
                      class="btn-product-gallery btn-product-wishlist"
                    >
                      <i className="far fa-heart"></i>
                    </a> */}
                  </div>
                )}
                {items.ar &&
                  (ar ? (
                    <span>
                      <button
                        type="button"
                        // className=" btn btn-primary tooltip-ar  "
                        className="rounded-circle btn tooltip-ar tooltip2d"
                        data-toggle="tooltip1"
                        style={{ minWidth: "10px" }}
                        id="tooltip2d"
                        data-placement="right"
                        title="View product Images"
                        onClick={button2dhandler}
                      ></button>
                    </span>
                  ) : (
                    <span>
                      <button
                        className="rounded-circle btn tooltip-ar tooltip3d"
                        data-toggle="tooltip"
                        style={{ minWidth: "10px" }}
                        id="tooltip3d"
                        data-placement="right"
                        title="View product's 3d model in AR."
                        onClick={button3dhandler}
                      ></button>
                    </span>
                  ))}
                {/* </figure> */}

                {!ar && (
                  <div
                    id="product-zoom-gallery "
                    class="product-image-gallery scrollbar"
                  >
                    {items.productImg &&
                      items.productImg.map((img, key) => {
                        return (
                          <a
                            key={key}
                            class={`product-gallery-item ${
                              key === 0 && "active"
                            }`}
                            id={"img-" + key}
                            href="#!"
                            onClick={() => toogle("img-" + key, img)}
                          >
                            <img src={img} alt="product side" />
                          </a>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="product-details product-details-centered">
              <h1 class="product-title">{items.displayinfo}</h1>

              <div class="ratings-container">
                <div class="ratings">
                  <div class="ratings-val" style={{ width: "80%" }}></div>
                </div>
                <Link
                  class="ratings-text"
                  // href="#product-review-link"
                  onClick={() =>
                    document
                      .getElementById("product-review-link")
                      .scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  id="review-link"
                >
                  ( {items.rating ? items.rating.length : 0}
                  {items.rating && items.rating.length > 1
                    ? " Reviews"
                    : " Review"}{" "}
                  )
                </Link>
              </div>

              <div class="product-price sansarif">
                {formatter.format(items.sellingPrice)}
                <span className="original_price">
                  {formatter.format(items.original_price)}{" "}
                  {/* {formatter.format(items.off)}{" "} */}
                </span>
              </div>

              {/* <div class="product-content">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero.
                </p>
              </div> */}
              {items.colors && (
                <div class="details-filter-row details-row-size">
                  <label>Color:</label>

                  <div class="product-nav product-nav-dots">
                    {items.colors.map((color, idx) => {
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

                    {/* <a href="#" style={{ background: "#333333" }}>
                    <span class="sr-only">Color name</span>
                  </a> */}
                  </div>
                </div>
              )}

              {/* <div class="details-filter-row details-row-size">
                <label for="size">Size:</label>
                <div class="select-custom">
                  <select name="size" id="size" class="form-control">
                    <option value="#" selected="selected">
                      One Size
                    </option>
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>

                <a href="#" class="size-guide">
                  <i class="icon-th-list"></i>size guide
                </a>
              </div> */}

              <div class="product-details-action">
                <div class="details-action-col">
                  <label>Stock</label>
                  <div class="product-details-quantity">
                    <input
                      type="number"
                      id="qty"
                      class="form-control"
                      value={items.stock}
                      // min="1"
                      // max="10"
                      // step="1"
                      // data-decimals="0"
                      disabled
                      // required
                    />
                  </div>

                  <button
                    // href="#"
                    onClick={buyHandle}
                    id="btn-cart"
                    class="btn-product btn-cart btn-cart-itempage"
                  >
                    Buy Now
                  </button>
                </div>

                <div class="details-action-wrapper">
                  <a
                    onClick={WishlistHandle}
                    href="#"
                    class="btn-product btn-wishlist"
                    title="Wishlist"
                  >
                    <span>Add to Wishlist</span>
                  </a>
                  <a
                    href="#"
                    onClick={() => addToCartHandle(items)}
                    class="btn-product"
                    title="Compare"
                  >
                    <i
                      style={{ marginRight: "10px", fontSize: "15px" }}
                      class="fas fa-shopping-cart"
                    ></i>
                    <span>Add to Cart</span>
                  </a>
                </div>
              </div>

              <div class="product-details-footer">
                <div class="product-cat">
                  <span>Category:</span>
                  <a href="#!">{items.category}</a>,{" "}
                  <a href="#!">{items.subCategory}</a>,{" "}
                  <a href="#!">{items.name}</a>
                </div>

                <div class="social-icons social-icons-sm">
                  <span class="social-label">Brand:</span>
                  <a href="#!"> {items.brand} </a>
                  {/* <a
                    href="#"
                    class="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i class="icon-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    class="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i class="icon-twitter"></i>
                  </a>
                  <a
                    href="#"
                    class="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i class="icon-instagram"></i>
                  </a>
                  <a
                    href="#"
                    class="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i class="icon-pinterest"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div
        class="zoomContainer"
        style={{
          transform: "translateZ(0px)",
          position: "absolute",
          left: "110.406px",
          top: "190.5px",
          height: "391.594px",
          width: "391.594px",
        }}
      >
        <div class="zoomWindowContainer" style={{ width: "400px" }}>
          <div
            style={{
              zIndex: "999",
              overflow: "hidden",
              marginLeft: "0px",
              marginTop: "0px",
              backgroundPosition: "-351.08px -231.765px",
              width: "391.594px",
              height: "391.594px",
              float: "left",
              cursor: "crosshair",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              backgroundImage:
                "url('https://res.cloudinary.com/shees/image/upload/v1630136377/products-images/chair_cdzqsw.jpg')",
              top: "0px",
              left: "0px",
              backgroundSize: "1200px 1200px",
              display: "none",
            }}
            class="zoomWindow"
          >
            &nbsp;
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Itemimage;
