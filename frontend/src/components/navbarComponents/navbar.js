import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  logout,
  removeCartItem,
  userDetails,
  wishlistItems,
} from "../../actions/itemsDataActions";
import formatter from "../functions/formatter";
// import { categories } from "../../actions/sellerDataActions";
// import SignInUpmodal from "../signIn-UpComponent/signInUpModal";

const Navbar = (props) => {
  const [isActive, setisActive] = useState(false);
  const usersInfo = useSelector((state) => state.loginCheck);
  const { user: usercheck } = usersInfo;
  const userDetail = useSelector((state) => state.userDetailsReducer);
  const { items: user } = userDetail;
  const wishlistDetails = useSelector((state) => state.addToWishlist);
  const { wishlist, load } = wishlistDetails;
  const usersIn = useSelector((state) => state.cartItems);
  const { items, length } = usersIn;

  const [classActive, setclassActive] = useState(false);
  // const categ = useSelector((state) => state.categoriesReducer);
  // const { state, loading, flag } = categ;

  // toggle mobile menu on click
  function togglemenu() {
    if (classActive) {
      document.body.classList.remove("mmenu-active");
    } else {
      document.body.classList.add("mmenu-active");
    }
    setclassActive(!classActive);
    // document.body.classList.toggle("mmenu-active");
  }
  // console.log(items);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove("mmenu-active");
    if (items && !length && usercheck) {
      dispatch(cartItem(usercheck.user._id));
    }
    if (usercheck && wishlist && wishlist.length === 0 && !load) {
      dispatch(wishlistItems(usercheck.user._id));
    }
    // if (!flag) {
    //   dispatch(categories());
    // }
    // setsearch("");
    if (user && user.length === 0) {
      usercheck && dispatch(userDetails(usercheck.user._id));
    }
  }, [dispatch, usercheck, user, length, items, wishlist, load]);

  const [scroll, setScroll] = useState(false);
  // console.log(scroll);
  useEffect(() => {
    const updatePosition = () => {
      // console.log(window.scrollY);
      setScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  let history = useHistory();
  function logoutHandler() {
    history.push("/");
    dispatch(logout());
  }

  const [search, setsearch] = useState("");
  async function searchHandler(e) {
    e.preventDefault();

    if (search && isActive) {
      history.push("/products/product?search=" + search);
    }
    setisActive(!isActive);
    setsearch("");
  }
  async function searchHandlerMobile(e) {
    e.preventDefault();
    document.body.classList.remove("mmenu-active");

    history.push("/products/product?search=" + search);

    setisActive(!isActive);
    setsearch("");
  }

  function buyHandle(products) {
    history.push({ pathname: "/order/" + usercheck.user._id, state: products });
  }

  return (
    <div>
      {/* <div className="page-wrapper"> */}
      {/* <SignInUpmodal /> */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <div style={{ paddingTop: "0.9rem", paddingBottom: "0.8rem" }}>
                <a href="mailto:trynkart@gmail.com">
                  <i className="fa fa-envelope"></i> trynkart@gmail.com
                </a>
              </div>

              {/* <div className="header-dropdown">
              <a href="#">Eng</a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div> */}
            </div>

            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    {/* <li>
                    <a href="tel:#">
                      <i className="icon-phone"></i>Call: +0123 456 789
                    </a>
                  </li> */}
                    <li>
                      <Link to="/account?state=profile-wishlist">
                        <i className="far fa-heart"></i>Wishlist{" "}
                        <span>
                          {wishlist &&
                            wishlist.length > 0 &&
                            "(" + wishlist.length + ")"}
                        </span>
                      </Link>
                    </li>
                    <li>
                      {user && Object.keys(user).length > 0 ? (
                        <Link to="/account">Account</Link>
                      ) : (
                        <a
                          href="#!"
                          data-target="#signin-modal"
                          data-toggle="modal"
                        >
                          Account
                        </a>
                      )}
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      {usercheck && usercheck.token ? (
                        <Link
                          to=""
                          onClick={logoutHandler}
                          // data-toggle="modal"
                        >
                          Logout
                        </Link>
                      ) : (
                        <a href="#signin-modal" data-toggle="modal">
                          <i className="far fa-user"></i>Login
                        </a>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* middlenavbar */}
        <div
          className="sticky-wrapper"
          style={{ height: scroll && size > 945 && "115px" }}
        >
          <div
            className={`header-middle sticky-header ${scroll && "fixed"}`}
            style={{ padding: scroll && "5px 10px" }}
          >
            <div className="container">
              <div className="header-left">
                <button onClick={togglemenu} className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars"></i>
                </button>

                <Link
                  to="/"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    margin: "0",
                  }}
                  className="logo"
                >
                  TryNkart
                  {/* <img
                src="assets/images/logo.png"
                alt="Molla Logo"
                width="105"
                height="25"
              /> */}
                </Link>

                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/account?state=profile-information">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/account?state=profile-myorders">
                        My Orders
                      </Link>
                    </li>
                    {/* <li className="megamenu-container ">
                      <Link to="/faq">FAQ</Link>
                    </li> */}
                    <li className="megamenu-container ">
                      <a
                        href="https://trynkartseller.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        // className="sf-with-ul"
                      >
                        Sell with us
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="sf-with-ul">
                        Pages
                      </a>

                      <ul>
                        <li className="megamenu-container ">
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li className="megamenu-container ">
                          <Link to="/privacypolicy">Privacy Policy</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="product.html" className="sf-with-ul">
                        Product
                      </a>

                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>
                              <ul>
                                <li>
                                  <a href="product.html">Default</a>
                                </li>
                                <li>
                                  <a href="product-centered.html">Centered</a>
                                </li>
                                <li>
                                  <a href="product-extended.html">
                                    <span>
                                      Extended Info
                                      <span className="tip tip-new">New</span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="product-gallery.html">Gallery</a>
                                </li>
                                <li>
                                  <a href="product-sticky.html">Sticky Info</a>
                                </li>
                                <li>
                                  <a href="product-sidebar.html">
                                    Boxed With Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-fullwidth.html">
                                    Full Width
                                  </a>
                                </li>
                                <li>
                                  <a href="product-masonry.html">
                                    Masonry Sticky Info
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <a href="category.html">
                                <img src="/images/nav-2.jpg" alt="Banner" />

                                <div className="banner-content banner-content-bottom">
                                  <div className="banner-title text-white">
                                    New Trends
                                    <br />
                                    <span>
                                      <strong>spring 2019</strong>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    {/* <li>
                      <a href="#" className="sf-with-ul">
                        Pages
                      </a>

                      <ul>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a
                            href="https://trynkartseller.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Sell
                          </a>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="elements-list.html" className="sf-with-ul">
                        Elements
                      </a>

                      <ul>
                        <li>
                          <a href="elements-products.html">Products</a>
                        </li>
                        <li>
                          <a href="elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="elements-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="elements-banners.html">Banners</a>
                        </li>
                        <li>
                          <a href="elements-product-category.html">
                            Product Category
                          </a>
                        </li>
                        <li>
                          <a href="elements-video-banners.html">
                            Video Banners
                          </a>
                        </li>
                        <li>
                          <a href="elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="elements-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="elements-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="elements-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="elements-portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="elements-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="elements-icon-boxes.html">Icon Boxes</a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <div className="header-search">
                  <a
                    onClick={(e) => searchHandler(e)}
                    href="#!"
                    // className="search-toggle"
                    className={
                      isActive ? " search-toggle active" : "search-toggle"
                    }
                    role="button"
                    title="Search"
                  >
                    <i style={{ fontSize: "2rem" }} className="icon-search"></i>
                  </a>
                  <form onSubmit={(e) => searchHandler(e)}>
                    <div
                      //  className="header-search-wrapper"
                      className={
                        isActive
                          ? "header-search-wrapper show"
                          : "header-search-wrapper"
                      }
                    >
                      <label htmlFor="q" className="sr-only">
                        Search
                      </label>
                      <input
                        type="search"
                        onChange={(e) => setsearch(e.target.value)}
                        className="form-control"
                        placeholder="Search in..."
                        required
                      />
                    </div>
                  </form>
                </div>

                <div className="dropdown cart-dropdown">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <i
                      style={{ fontSize: "2rem", marginTop: "3px" }}
                      className="fa fa-shopping-cart"
                    ></i>
                    {items && items.length > 0 && (
                      <span className="cart-count">{items.length}</span>
                    )}
                  </a>

                  {!props.cart && (
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-cart-products">
                        {items &&
                          items.length > 0 &&
                          items.slice(-2).map((item, idx) => {
                            return (
                              <div className="product" key={idx}>
                                <div className="product-cart-details">
                                  <h4 className="product-title break-lines-2">
                                    <Link
                                      to={
                                        "/product/" +
                                        item.category +
                                        "/" +
                                        item._id
                                      }
                                    >
                                      {item.displayinfo}
                                    </Link>
                                  </h4>

                                  <span className="cart-product-info sansarif">
                                    <span className="cart-product-qty">
                                      {item.cartqty}
                                    </span>{" "}
                                    x {formatter.format(item.sellingPrice)}
                                  </span>
                                </div>

                                <figure className="product-image-container">
                                  <Link
                                    to={
                                      "/product/" +
                                      item.category +
                                      "/" +
                                      item._id
                                    }
                                    className="product-image"
                                  >
                                    <img
                                      style={{ maxHeight: "70px" }}
                                      src={item.productImg[0]}
                                      alt="product"
                                    />
                                  </Link>
                                </figure>
                                <a
                                  href="#!"
                                  onClick={() =>
                                    dispatch(
                                      removeCartItem(
                                        item._id,
                                        usercheck.user._id
                                      )
                                    )
                                  }
                                  className="btn-remove"
                                  title="Remove Product"
                                >
                                  <i className="icon-close"></i>
                                </a>
                              </div>
                            );
                          })}
                      </div>
                      {items && items.length > 0 ? (
                        <div className="dropdown-cart-total">
                          <span>Total</span>

                          <span className="cart-total-price sansarif">
                            {items &&
                              formatter.format(
                                items.reduce(function (acc, obj) {
                                  return acc + obj.cartqty * obj.sellingPrice;
                                }, 0)
                              )}
                          </span>
                        </div>
                      ) : usercheck && usercheck.token ? (
                        <div className="dropdown-cart-total">
                          Your Cart is Empty!
                        </div>
                      ) : (
                        <div className="dropdown-cart-total">
                          Sign In to View cart items.
                        </div>
                      )}

                      {/* <div className="dropdown-cart-total">
                      <span>Total</span>

                      <span className="cart-total-price">$160.00</span>
                    </div> */}

                      <div className="dropdown-cart-action">
                        <Link to="/cart" className="btn btn-primary">
                          {usercheck && usercheck.token
                            ? "View Cart"
                            : "Sign In / Sign Up"}
                        </Link>
                        {items && items.length > 0 && (
                          <button
                            onClick={() => buyHandle(items)}
                            className="btn btn-outline-primary-2"
                          >
                            <span>Checkout</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="dropdown compare-dropdown">
                  <Link
                    to="/account"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <i
                      style={{ fontSize: "2rem", marginTop: "0" }}
                      className="far fa-user"
                    ></i>
                    {/* <span className="cart-count">1</span> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* </div> */}

      <div onClick={togglemenu} className="mobile-menu-overlay"></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span onClick={togglemenu} className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <form
            onSubmit={(e) => searchHandlerMobile(e)}
            className="mobile-search"
          >
            <label htmlFor="q" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              onChange={(e) => setsearch(e.target.value)}
              value={search}
              // name="mobile-search"
              // id="mobile-search"
              placeholder="Search in..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search"></i>
            </button>
          </form>

          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              {/* <li>
                <a href="product.html" className="sf-with-ul">
                  Product
                  <span className="mmenu-btn"></span>
                </a>
              </li> */}
              <li>
                <a
                  href="https://trynkartseller.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="sf-with-ul"
                >
                  Sell with us
                </a>
              </li>
              <li className="megamenu-container ">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="megamenu-container ">
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </nav>

          <div className="social-icons">
            <a
              href="#!"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a
              href="#!"
              className="social-icon"
              target="_blank"
              title="Twitter"
            >
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#!"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="#!"
              className="social-icon"
              target="_blank"
              title="Youtube"
            >
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
