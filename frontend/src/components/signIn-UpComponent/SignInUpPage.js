import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "../footerComponents/footer";
import Navbar from "../navbarComponents/navbar";
import { useDispatch, useSelector } from "react-redux";
import Signuppage from "./signuppage";
import { signin } from "../../actions/itemsDataActions";

const Signinuppage = () => {
  const login = useSelector((state) => state.loginCheck);
  const { user, error } = login;
  const history = useHistory();
  const location = useLocation();
  function onclick() {
    document.getElementById("error").classList.add("login-error-hide");
    history.replace(
      location.state && location.state.to ? location.state.to : "/"
    );
  }
  // console.log(login);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  function loginHandle(e) {
    e.preventDefault();
    dispatch(signin(Username, Password));
    // if (user) {
    //   onclick();
    // }
  }
  useEffect(() => {
    if (user && user.token) {
      onclick();
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Login
              </li>
            </ol>
          </div>
        </nav>

        <div
          className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
          style={{
            backgroundImage: "url('/images/login-bg.jpg')",
          }}
        >
          <div className="container">
            <div className="form-box">
              <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link  active"
                      id="signin-tab-2"
                      data-toggle="tab"
                      href="#signin-2"
                      role="tab"
                      aria-controls="signin-2"
                      aria-selected="false"
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="register-tab-2"
                      data-toggle="tab"
                      href="#register-2"
                      role="tab"
                      aria-controls="register-2"
                      aria-selected="true"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="signin-2"
                    role="tabpanel"
                    aria-labelledby="signin-tab-2"
                  >
                    {error ? (
                      <div
                        style={{ paddingBottom: "0" }}
                        id="error"
                        className="login-container login-error "
                      >
                        <p>{error.msg}</p>
                      </div>
                    ) : (
                      <div
                        id="error"
                        className="login-container login-error login-error-hide "
                      ></div>
                    )}
                    <form onSubmit={loginHandle}>
                      <div className="form-group">
                        <label htmlFor="singin-email-2">Username *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="singin-email-2"
                          name="singin-email"
                          value={Username}
                          onChange={(e) =>
                            setUsername(e.target.value.replace(/ /g, ""))
                          }
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="singin-password-2">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="singin-password-2"
                          name="singin-password"
                          value={Password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>LOG IN</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="signin-remember-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="signin-remember-2"
                          >
                            Remember Me
                          </label>
                        </div>

                        <a
                          href="#Q"
                          data-toggle="modal"
                          data-target="#ForgetPassModal"
                          className="forgot-link"
                        >
                          Forgot Your Password?
                        </a>
                      </div>
                    </form>
                    <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google"></i>
                            Login With Google
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-f">
                            <i className="icon-facebook-f"></i>
                            Login With Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="register-2"
                    role="tabpanel"
                    aria-labelledby="register-tab-2"
                  >
                    <Signuppage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signinuppage;
