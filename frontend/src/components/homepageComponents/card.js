import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../actions/itemsDataActions";
import formatter from "../functions/formatter";
import popup from "../functions/popup";

const Card = (props) => {
  const itemList = useSelector((state) => state.itemsListReducer);
  const {
    items: [items],
    loading,
    error,
  } = itemList;

  const userDetail = useSelector((state) => state.loginCheck);
  const { user } = userDetail;

  // console.log(user && user.token);
  // console.log(items.products);
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
    }
  }

  // const wishlistDetails = useSelector((state) => state.addToWishlist);
  // const { wishlist } = wishlistDetails;
  // checking if product is in wishlist
  //  const obj = wishlist.find((o) => o.id === id);
  //  const [checked, setchecked] = useState(obj ? true : false);
  function WishlistHandle(item) {
    if (user && user.token) {
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

  // console.log(props.amount);
  // console.log(items.products);
  return (
    <div>
      <div className="bg-light pt-1 ">
        <div className="container">
          <div className="heading heading-flex heading-border mb-3">
            <div className="heading-left">
              <Link to={"/products/" + props.category}>
                <h2
                  // style={{ paddingTop: "1.55rem", paddingBottom: " 1.55rem" }}
                  className="title"
                >
                  {props.category}
                </h2>
              </Link>
            </div>

            <div className="heading-right">
              <ul
                className="nav nav-pills nav-border-anim justify-content-center "
                role="tablist"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link   hover-color "
                    style={{ paddingTop: "1.55rem", paddingBottom: " 1.55rem" }}
                    // id="hot-all-link"
                    // data-toggle="tab"

                    to={"/products/" + props.category}
                    // role="tab"
                    // aria-controls="hot-all-tab"
                    // aria-selected="true"
                  >
                    All
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content tab-content-carousel">
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
                  },
                }}
              >
                {[...Array(props.amount).keys()].map((key) => {
                  let product =
                    items.products[props.counter - props.amount + 1 + key];
                  // console.log(product.rating ? product.rating.length : 0);
                  let reviews = product.rating ? product.rating.length : 0;
                  return (
                    product.status === "Active" && (
                      <div className="product" key={key}>
                        <figure className="product-media product-figure">
                          {product.ar && (
                            <span className="product-label label-new">AR</span>
                          )}
                          <Link
                            to={
                              "/product/" + props.category + "/" + product._id
                            }
                          >
                            <img
                              src={product.productImg[0]}
                              alt="Product"
                              className="product-image"
                              width="100px"
                            />
                          </Link>

                          <div className="product-action-vertical">
                            <a
                              href="#!"
                              onClick={() => WishlistHandle(product)}
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>

                          <div className="product-action">
                            <Link
                              to="#"
                              onClick={() => addToCartHandle(product)}
                              className="btn-product btn-cart"
                              title="Add to cart"
                            >
                              <span>add to cart</span>
                            </Link>
                          </div>
                        </figure>

                        <div
                          className="product-body"
                          style={{ padding: "1.6rem 1rem 1.6rem 2rem" }}
                        >
                          <div
                            className="product-cat"
                            style={{ color: "#ccc" }}
                          >
                            <Link
                              to={
                                "/product/" + props.category + "/" + product._id
                              }
                            >
                              {product.name}
                            </Link>
                          </div>
                          <h3
                            className="product-title break-lines-2"
                            style={{ fontSize: "1.4rem" }}
                          >
                            <Link
                              to={
                                "/product/" + props.category + "/" + product._id
                              }
                            >
                              {product.displayinfo}
                            </Link>
                          </h3>
                          <div
                            style={{
                              fontSize: "1.4rem",
                              marginBottom: "1.1rem",
                              color: "#39f",
                            }}
                            className="product-price sansarif"
                          >
                            {formatter.format(product.sellingPrice)}
                          </div>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <span
                              className="ratings-text"
                              // style={{ marginLeft: "0.5rem" }}
                            >
                              ( {reviews}
                              {reviews > 1 ? " Reviews" : " Review"} )
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
