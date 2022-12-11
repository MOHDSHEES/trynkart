import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/itemsDataActions";

const Lastfooter = () => {
  const usersInfo = useSelector((state) => state.loginCheck);
  const { user: usercheck } = usersInfo;
  const history = useHistory();
  const dispatch = useDispatch();
  function logoutHandler() {
    history.push("/");
    dispatch(logout());
  }
  return (
    <div>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="widget widget-about">
                {/* <img
                  src="assets/images/demos/demo-2/logo.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                /> */}
                <h3
                  style={{ color: "#a6c76c", fontWeight: "bold" }}
                  className="footer-logo"
                >
                  TryNkart
                </h3>
                <p>
                  E-commerce is revolutionizing the way we all shop in India.
                  Why do you want to hop from one store to another in search of
                  the Products when you can find it on the Internet in a single
                  click.{" "}
                </p>
                <div className="widget-about-info">
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <span className="widget-about-title">
                        Got Question? Mail us 24/7
                      </span>
                      {/* <a href="tel:123456789">+0123 456 789</a> */}{" "}
                      <a
                        style={{ fontSize: "1.5rem" }}
                        href="mailto:trynkart@gmail.com"
                      >
                        <i className="fa fa-envelope"></i> trynkart@gmail.com
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <span className="widget-about-title">Payment Method</span>
                      <figure className="footer-payments">
                        <img
                          src="/images/payments.png"
                          alt="Payment methods"
                          width="272"
                          height="20"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Information</h4>

                <ul className="widget-list">
                  <li>
                    {usercheck && usercheck.token ? (
                      <Link to="" onClick={logoutHandler} href="#">
                        Logout
                      </Link>
                    ) : (
                      <a href="#signin-modal" data-toggle="modal">
                        Sign In
                      </a>
                    )}
                  </li>
                  {/* <li>
                    <a href="about.html">About TryNkart</a>
                  </li>
                  <li>
                    <a href="#">How to shop on TryNkart</a>
                  </li> */}

                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                  </li>
                  {/* <li>
                    <a href="login.html">Log in</a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>

                <ul className="widget-list">
                  <li>
                    <Link to="/cart">View Cart</Link>
                  </li>
                  <li>
                    <Link to="/account?state=profile-wishlist">
                      My Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/account?state=profile-myorders">My Order</Link>
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
                    <a href="#">Help</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Contact</h4>

                <ul className="widget-list">
                  <li>
                    <p>
                      {" "}
                      <i class="fas fa-home mr-3"></i>New Delhi, 24012, IND
                    </p>
                  </li>
                  <li>
                    <a href="mailto:trynkart@gmail.com">
                      <i className="fa fa-envelope mr-3"></i>trynkart@gmail.com
                    </a>
                  </li>

                  <li>
                    <p>
                      <i class="fas fa-phone mr-3"></i>+ 01 234 567 89
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-print mr-3"></i>+ 01 234 567 88
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer last */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2022 TryNkart. All Rights Reserved.
          </p>
          <ul className="footer-menu">
            {/* <li>
              <a href="#">Terms Of Use</a>
            </li> */}
            <li>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>

          <div className="social-icons social-icons-color">
            <span className="social-label">Social Media</span>
            <a
              href="#!"
              className="social-icon social-facebook"
              title="Facebook"
              target="_blank"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a
              href="#!"
              className="social-icon social-twitter"
              title="Twitter"
              target="_blank"
            >
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#!"
              className="social-icon social-instagram"
              title="Instagram"
              target="_blank"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="#!"
              className="social-icon social-youtube"
              title="Youtube"
              target="_blank"
            >
              <i className="icon-youtube"></i>
            </a>
            <a
              href="#!"
              className="social-icon social-pinterest"
              title="Pinterest"
              target="_blank"
            >
              <i className="icon-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastfooter;
