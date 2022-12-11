import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  logout,
  userDetails,
  removeCartItem,
  wishlistItems,
} from "../../actions/itemsDataActions";
import formatter from "../functions/formatter";
import { categories } from "../../actions/sellerDataActions";
// import SignInUpmodal from "../signIn-UpComponent/signInUpModal";

function NavbarHomepage() {
  const usersInfo = useSelector((state) => state.loginCheck);
  const { user: usercheck } = usersInfo;
  const userDetail = useSelector((state) => state.userDetailsReducer);
  const { items: user } = userDetail;
  const usersIn = useSelector((state) => state.cartItems);
  const { items, length } = usersIn;
  const wishlistDetails = useSelector((state) => state.addToWishlist);
  const { wishlist, load } = wishlistDetails;
  const categ = useSelector((state) => state.categoriesReducer);
  const { state: category, loading, flag } = categ;
  // console.log(loading);
  // console.log(category);

  const [classActive, setclassActive] = useState(false);
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
  let history = useHistory();
  function logoutHandler() {
    history.push("/");
    dispatch(logout());
  }

  // console.log(wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove("mmenu-active");
    if (items && !length && usercheck) {
      dispatch(cartItem(usercheck.user._id));
    }
    if (usercheck && wishlist && wishlist.length === 0 && !load) {
      dispatch(wishlistItems(usercheck.user._id));
    }
    // setsearch("");
    if (user && user.length === 0) {
      usercheck && dispatch(userDetails(usercheck.user._id));
    }
    if (!flag) {
      dispatch(categories());
    }
  }, [dispatch, usercheck, user, length, items, flag, wishlist, load]);

  const [scroll, setScroll] = useState(false);
  // console.log(scroll);
  useEffect(() => {
    setsearch("");
    const updatePosition = () => {
      // console.log(window.scrollY);
      setScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const [search, setsearch] = useState("");
  async function searchHandler(e) {
    e.preventDefault();
    // console.log(search);
    // document.body.classList.remove("mmenu-active");
    history.push("/products/product?search=" + search);
    setsearch("");

    // console.log(response);
  }

  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  function buyHandle(products) {
    history.push({ pathname: "/order/" + usercheck.user._id, state: products });
  }
  return (
    <div>
      {/* <SignInUpmodal /> */}
      {/* <div className="page-wrapper"> */}
      <header className="header header-2 header-intro-clearance">
        {/* <div className="mb-2"></div> */}
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              {/* <p>Special collection already available.</p>
                <a href="#">&nbsp;Read more ...</a> */}
              <div style={{ paddingTop: "0.9rem", paddingBottom: "0.8rem" }}>
                <a href="mailto:trynkart@gmail.com">
                  <i className="fa fa-envelope"></i> trynkart@gmail.com
                </a>
              </div>
              {/* <br />
                  <a href="tel:#">
                    <i className="icon-phone"></i> Call: +0123 456 789
                  </a> */}
            </div>

            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    <li>
                      <Link
                        to="/contact"
                        // data-toggle="modal"
                      >
                        Contact Us
                      </Link>
                    </li>
                    {/* <li>
                        <div className="header-dropdown">
                          <a href="#">USD</a>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <a href="#">Eur</a>
                              </li>
                              <li>
                                <a href="#">Usd</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li> */}
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
                        <a
                          href="#!"
                          // onClick={() => console.log("run")}
                          data-target="#signin-modal"
                          data-toggle="modal"
                        >
                          Sign in / Sign up
                        </a>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-middle">
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
                  src="assets/images/demos/demo-2/logo.png"
                  alt="Molla Logo"
                  width="105"
                  height="25"
                /> */}
              </Link>
            </div>

            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </a>
                <form onSubmit={(e) => searchHandler(e)}>
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      onChange={(e) => setsearch(e.target.value)}
                      value={search}
                      // name="q"
                      // id="q"
                      placeholder="Search product ..."
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="header-right">
              <div className="account">
                {user && Object.keys(user).length > 0 ? (
                  <Link to="/account" title="My account">
                    <div className="icon">
                      {/* <i className="icon-user"></i> */}
                      <i
                        style={{ fontSize: "2rem" }}
                        className="far fa-user"
                      ></i>
                    </div>
                    <p>
                      {user.fname
                        ? user.fname
                        : user && user.lname
                        ? user.lname
                        : "Account"}
                    </p>
                  </Link>
                ) : (
                  <Link
                    to=""
                    data-target="#signin-modal"
                    data-toggle="modal"
                    title="My account"
                  >
                    <div className="icon">
                      {/* <i className="icon-user"></i> */}
                      <i
                        style={{ fontSize: "2rem" }}
                        className="far fa-user"
                      ></i>
                    </div>
                    <p>Account</p>
                  </Link>
                )}
              </div>

              <div className="wishlist">
                <Link to="/account?state=profile-wishlist" title="Wishlist">
                  <div className="icon">
                    <i
                      style={{ fontSize: "2rem", marginTop: "8px" }}
                      className="far fa-heart"
                    ></i>
                    {wishlist && wishlist.length > 0 && (
                      <span className="wishlist-count badge">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                  <p>Wishlist</p>
                </Link>
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
                  <div className="icon">
                    {/* <i className="icon-shopping-cart"></i> */}
                    <i
                      style={{ fontSize: "2rem" }}
                      className="fa fa-shopping-cart"
                    ></i>
                    {/* <i className="fal fa-shopping-cart"></i> */}
                    {items && items.length > 0 && (
                      <span className="cart-count">{items.length}</span>
                    )}
                  </div>
                  <p>Cart</p>
                </a>

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
                                    "/product/" + item.category + "/" + item._id
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
                                  "/product/" + item.category + "/" + item._id
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
                            <Link
                              to=""
                              onClick={() =>
                                dispatch(
                                  removeCartItem(item._id, usercheck.user._id)
                                )
                              }
                              className="btn-remove"
                              title="Remove Product"
                            >
                              <i className="icon-close"></i>
                            </Link>
                          </div>
                        );
                      })}
                    {/* <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Beige knitted elastic runner shoes
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $84.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="assets/images/products/cart/product-1.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a href="#" className="btn-remove" title="Remove Product">
                          <i className="icon-close"></i>
                        </a>
                      </div>

                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Blue utility pinafore denim dress
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $76.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="assets/images/products/cart/product-2.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a href="#" className="btn-remove" title="Remove Product">
                          <i className="icon-close"></i>
                        </a>
                      </div> */}
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

                  <div className="dropdown-cart-action">
                    <Link to="/cart" className="btn btn-primary">
                      {usercheck && usercheck.token
                        ? "View Cart"
                        : "Sign In / Sign Up"}
                    </Link>
                    {items && items.length > 0 && (
                      <button
                        onClick={() => buyHandle(items)}
                        // href="checkout.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sticky-wrapper"
          style={{ height: scroll && size > 945 && "54px" }}
        >
          <div className={`header-bottom sticky-header ${scroll && "fixed"}`}>
            <div className="container">
              <div className="header-left">
                <div className="dropdown category-dropdown">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    title="Browse Categories"
                  >
                    Browse Categories
                  </a>

                  <div className="dropdown-menu">
                    <nav className="side-nav side-nav-category scrollbar">
                      <ul className="menu-vertical sf-arrows">
                        {!loading ? (
                          category &&
                          Object.keys(category).map((c, i) => [
                            <li key={i}>
                              <Link to={"/products/product?search=" + c}>
                                {c}
                              </Link>
                            </li>,
                          ])
                        ) : (
                          <li>
                            <a href="#!">Loading...</a>
                          </li>
                        )}
                        {/* <li className="item-lead">
                          <a href="#">Daily offers</a>
                        </li>

                        <li>
                          <a href="#">Outdoor Furniture </a>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="header-center">
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="megamenu-container active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="megamenu-container ">
                      <Link to="/account?state=profile-information">
                        Account
                      </Link>
                    </li>
                    <li className="megamenu-container ">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="megamenu-container ">
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
                      >
                        Sell with Us
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
                      <a href="category.html" className="sf-with-ul">
                        Shop
                      </a>

                      <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                          <div className="col-md-8">
                            <div className="menu-col">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="menu-title">
                                    Shop with sidebar
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="category-list.html">Shop List</a>
                                    </li>
                                    <li>
                                      <a href="category-2cols.html">
                                        Shop Grid 2 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category.html">
                                        Shop Grid 3 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-4cols.html">
                                        Shop Grid 4 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-market.html">
                                        <span>
                                          Shop Market
                                          <span className="tip tip-new">
                                            New
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>

                                  <div className="menu-title">
                                    Shop no sidebar
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="category-boxed.html">
                                        <span>
                                          Shop Boxed No Sidebar
                                          <span className="tip tip-hot">
                                            Hot
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-fullwidth.html">
                                        Shop Fullwidth No Sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-md-6">
                                  <div className="menu-title">
                                    Product Category
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="product-category-boxed.html">
                                        Product Category Boxed
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-category-fullwidth.html">
                                        <span>
                                          Product Category Fullwidth
                                          <span className="tip tip-new">
                                            New
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <div className="menu-title">Shop Pages</div>
                                  <ul>
                                    <li>
                                      <Link to="/cart">Cart</Link>
                                    </li>

                                    <li>
                                      <Link to="account?state=profile-wishlist">
                                        Wishlist
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="account?state=profile-information">
                                        My Account
                                      </Link>
                                    </li>
                                 
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="banner banner-overlay">
                              <a
                                href="category.html"
                                className="banner banner-menu"
                              >
                                <img src="/images/nav-1.jpg" alt="Banner" />

                                <div className="banner-content banner-content-top">
                                  <div className="banner-title text-white">
                                    Last <br />
                                    Chance
                                    <br />
                                    <span>
                                      <strong>Sale</strong>
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
                                  <a href="product-extended.html">
                                    <span>
                                      Extended Info
                                      <span className="tip tip-new">New</span>
                                    </span>
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
                      <a href="#!" className="sf-with-ul">
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
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <a href="/signin">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html" className="sf-with-ul">
                        Blog
                      </a>

                      <ul>
                        <li>
                          <a href="blog.html">Classic</a>
                        </li>

                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
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
                      </ul>
                    </li> */}
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <i className="fas fa-tags"></i>
                <p>
                  Get<span className="highlight">&nbsp;Up to 50% Off</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* </div> */}

      {/* mobile */}
      <div onClick={togglemenu} className="mobile-menu-overlay"></div>
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span onClick={togglemenu} className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <form onSubmit={(e) => searchHandler(e)} className="mobile-search">
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
              placeholder="Search product ..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search"></i>
            </button>
          </form>

          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  {/* <li className="active">
                    <Link to="/">Home</Link>
                  </li> */}
                  <li className="active">
                    <Link to="/account">Account</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <a
                      href="https://trynkartseller.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sell with us
                    </a>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <a
                      href="https://trynkartseller.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sell with us
                    </a>
                  </li>

                  {/* <li>
                    <a href="product.html" className="sf-with-ul">
                      Product
                    </a>
                    <ul>
                      <li>
                        <a href="product.html">Default</a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  {!loading ? (
                    category &&
                    Object.keys(category).map((c, i) => [
                      <li key={i}>
                        <Link to={"/products/product?search=" + c}>{c}</Link>
                      </li>,
                    ])
                  ) : (
                    <li>
                      <a href="#!">Loading...</a>
                    </li>
                  )}
                  {/* <li>
                    <a className="mobile-cats-lead" href="#">
                      Daily offers
                    </a>
                  </li> */}

                  {/* <li>
                    <a href="#">Beds</a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHomepage;
