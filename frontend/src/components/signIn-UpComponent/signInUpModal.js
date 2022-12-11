import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/itemsDataActions";
import Signup from "./signup";

function onclick() {
  document.getElementById("error").classList.add("login-error-hide");

  window.$("#signin-modal").modal("hide");
  // console.log("in");

  // document.getElementById("id01").style.display = "none";
  // document.getElementById("login-form").reset();
}

const SignInUpmodal = () => {
  const login = useSelector((state) => state.loginCheck);
  const { user, error } = login;

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
    // setUsername("");
    // setPassword("");
    if (user && user.token) {
      onclick();
    }
  }, [user]);
  return (
    <div
      className="modal fade"
      id="signin-modal"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="icon-close"></i>
              </span>
            </button>

            <div className="form-box">
              <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signin-tab"
                      data-toggle="tab"
                      href="#signin"
                      role="tab"
                      aria-controls="signin"
                      aria-selected="true"
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="register-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  <div
                    className="tab-pane fade show active"
                    id="signin"
                    role="tabpanel"
                    aria-labelledby="signin-tab"
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
                        <label htmlFor="singin-email">Username *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="singin-email"
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
                        <label htmlFor="singin-password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="singin-password"
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
                            id="signin-remember"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="signin-remember"
                          >
                            Remember Me
                          </label>
                        </div>

                        <a
                          href="#!"
                          data-toggle="modal"
                          data-target="#ForgetPassModal"
                          onClick={onclick}
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
                    className="tab-pane fade"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                  >
                    <Signup />
                    {/* <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google"></i>
                            Login With Google
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f"></i>
                            Login With Facebook
                          </a>
                        </div>
                      </div>
                    </div> */}
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

export default SignInUpmodal;
