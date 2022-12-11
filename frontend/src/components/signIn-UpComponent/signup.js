import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
// import OTPInput from "otp-input-react";
import OtpInput from "react-otp-input";
import { signup } from "../../actions/itemsDataActions";

const Signup = () => {
  const emailRef = useRef();
  // boolean hook (true if signUp btn is disabled)
  const [disable, setdisable] = useState(true);
  // hook for storing username
  const [username, setusername] = useState("");
  // hook for storing email
  const [email, setemail] = useState("");
  // hook for storing password
  const [password, setpassword] = useState("");
  // hook for storing confirm password
  const [confirmpassword, setconfirmpassword] = useState("");
  // hook for storing mobileno
  const [mobileno, setmobileno] = useState("");
  // hook for storing Entered OTP
  const [OTP, setOTP] = useState("");
  // boolean hook (true if OTP entered is not matched with OTP generated)
  const [OTPMismatch, setOTPMismatch] = useState(false);
  // boolean hook (true if email is verified)
  const [isVerified, setisVerified] = useState(false);
  // hook for storing boolean value if verify btn is pressed (to run counter)
  const [isActive, setisActive] = useState(false);
  // hook for sendgrid response
  const [Response, setResponse] = useState();
  // hook for storing error from sendgrid api
  const [Error, setError] = useState();
  // hook for showing loading while sending OTP
  const [loading, setloading] = useState(false);
  // hook for storing generated OTP
  const [OTPgenerated, setOTPgenerated] = useState("");
  // otp timer and resend
  const [RemainingTime, setRemainingTime] = useState(30);

  // closing signup form
  function onclick() {
    clearfields();
    document
      .getElementById("username")
      .classList.remove("is-valid", "is-invalid");
    emailRef.current.classList.remove("is-valid", "is-invalid");
    document.getElementById("signup-error").classList.add("login-error-hide");
    window.$("#signupModal").modal("hide");
  }
  // back to sign in form
  //   function clickhandleSignin() {
  //     onclick();
  //   }

  // reseting signup form
  function clearfields() {
    setusername("");
    setpassword("");
    setconfirmpassword("");
    setemail("");
    setmobileno("");
    setisActive(false);
    setResponse("");
    setError("");
    setOTP("");
    setOTPgenerated("");
    setOTPMismatch(false);
    setisVerified(false);
  }

  // validating username
  function Validate(e) {
    setusername(e.target.value.replace(/ /g, ""));
    setdisable(true);
    let value = e.target.value.replace(/ /g, "");
    const doc = document.getElementById("username").classList;
    if (value === "") doc.remove("form-control");
    else doc.add("form-control");
    const validate = async () => {
      const data = await Axios.post("/api/user/signup/validate", {
        data: { username: value },
      });

      if (data.data === 200) {
        setdisable(false);

        doc.remove("is-invalid");
        doc.add("is-valid");
      } else if (data.data === 500) {
        setdisable(true);
        doc.add("is-invalid");
      }
    };
    if (value !== "") {
      validate();
    }
  }

  const dispatch = useDispatch();
  // submitting signup form
  function signupsubmit(e) {
    e.preventDefault();
    if (password === confirmpassword) {
      dispatch(signup(username, email, password, mobileno));
      onclick();
    } else {
      var er = document.getElementById("signup-error");
      er.classList.remove("login-error-hide");
      er.innerHTML = "Password Mismatch";
    }
  }

  // validating email entered and dispatching otp
  async function verify() {
    setError("");
    setResponse("");
    // email validating
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      // generating OTP
      const OTP = Math.floor(Math.random() * 900000 + 100000);
      setOTPgenerated(OTP);
      setloading(true);
      // sending OTP
      try {
        const response = await Axios.post("/api/emailotp", {
          email: email,
          otp: OTP,
        });
        setloading(false);
        setResponse(response);
        // Activating counter if success
        if (response && response.data.success) {
          setisActive(true);
        }
      } catch (error) {
        setResponse("");
        setloading(false);
        setError(error.response.data.message);
      }
    } else {
      setResponse("");
      emailRef.current.classList.add("is-invalid");
    }
  }

  // initializing email input and removing all error messages
  function emailInput(e) {
    setisActive(false);
    setError("");
    setOTPMismatch(false);
    setdisable(true);
    setResponse("");
    setisVerified(false);
    setemail(e.target.value);
    // emailRef.current.classList.remove("form-control");
    emailRef.current.classList.remove("is-invalid");
  }

  // verifying OTP entered
  useEffect(() => {
    if (OTP) {
      if (Number(OTP) === OTPgenerated) {
        setOTPMismatch(false);
        emailRef.current.classList.add("form-control");
        emailRef.current.classList.add("is-valid");
        setisVerified(true);
        setdisable(false);
        setOTPgenerated("");
        setOTP("");
        setisActive(false);
      } else if (OTP.length === 6 && Number(OTP) !== OTPgenerated) {
        setisVerified(false);
        setOTPMismatch(true);
      }
    }
  }, [OTP, OTPgenerated]);

  useEffect(() => {
    if (RemainingTime !== 0 && isActive) {
      var timer = setTimeout(() => {
        setRemainingTime(RemainingTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [RemainingTime, isActive]);

  function resend() {
    setRemainingTime(30);
    setOTP("");
    setOTPMismatch(false);
    verify();
  }
  return (
    <div>
      <div
        style={{ paddingBottom: "0" }}
        id="signup-error"
        className="login-container login-error login-error-hide "
      >
        <p>Password Mismatch</p>
      </div>
      <form
        id="signup-form"
        className=" needs-validation"
        onSubmit={signupsubmit}
      >
        <div className="user-validation">
          <div className="form-group">
            <label htmlFor="uname">
              Username<span className="estrix"> *</span>
            </label>
            <input
              className="form-control form-control1 "
              type="text"
              id="username"
              placeholder="Enter Username"
              name="uname"
              autoComplete="off"
              value={username}
              // onChange={(e) => setusername(e.target.value)}
              onChange={(e) => Validate(e)}
              required
            />
            <div className=" invalid-feedback">User name already taken</div>
          </div>
        </div>
        <div className="user-validation">
          {/* <form
                  // className=" needs-validation"
                  // className="modalcontent animate"
                  onClick={(e) => verify(e)}
                > */}
          <div className="form-group">
            <label htmlFor="email">
              Email<span className="estrix"> *</span>{" "}
              {/* {isVerified && (
                        <small style={{ color: "green", marginLeft: "3px" }}>
                          <i class="fas fa-check-circle"></i>{" "}
                        </small>
                      )} */}
            </label>
            {/* <div className="input-group mb-2 mr-sm-2"> */}
            {/* <form
                  // className=" needs-validation"
                  // className="modalcontent animate"
                  onClick={(e) => verify(e)}
                > */}
            {/* <div className="user-validation"> */}
            <input
              className="form-control"
              type="Email"
              placeholder="Enter Email"
              name="email"
              autoComplete="off"
              value={email}
              ref={emailRef}
              id="email"
              // onChange={(e) => setemail(e.target.value)}

              onChange={(e) => emailInput(e)}
              required
            />
            <div className=" invalid-feedback">Please enter valid Email Id</div>

            {Response && Response.data.success ? (
              <small style={{ color: "green" }}>
                {!isVerified && Response.data.message}
              </small>
            ) : (
              Response && (
                <small style={{ color: "red" }}>{Response.data.message}</small>
              )
            )}

            {Error && <small style={{ color: "red" }}>{Error}</small>}
            {/* </div> */}
            <div>
              {!isVerified && !isActive && (
                <button
                  disabled={isActive && loading}
                  id="verify-btn"
                  type="button"
                  style={{ fontSize: "1.4rem", marginTop: "10px" }}
                  onClick={verify}
                  className="input-group-text"
                >
                  {loading ? "Sending..." : "Verify"}
                </button>
              )}
              {isActive && (
                <div>
                  {/* <Otp isActive={isActive} /> */}

                  {OTPMismatch && (
                    <div style={{ textAlign: "center" }}>
                      <small style={{ color: "red" }}>"Incorrect OTP"</small>
                    </div>
                  )}

                  <OtpInput
                    value={OTP}
                    className="otp-input"
                    onChange={setOTP}
                    numInputs={6}
                    hasErrored={OTPMismatch ? true : false}
                    errorStyle={{
                      border: "1px solid red",
                      borderRadius: "5px",
                    }}
                    isInputNum={true}
                    inputStyle={{ width: "30px" }}
                    containerStyle={{ justifyContent: "center" }}
                    // separator={<span>-</span>}
                  />

                  {RemainingTime !== 0 ? (
                    <small>Resend OTP in {RemainingTime} Sec </small>
                  ) : (
                    // <div className="form-row">
                    //   <div className="form-group col-md-2">
                    <button
                      style={{ marginTop: "10px", fontSize: "1.4rem" }}
                      id="verify-btn"
                      onClick={resend}
                      className="input-group-text"
                    >
                      Resend
                    </button>
                    //   </div>
                    // </div>
                  )}
                </div>
              )}
            </div>
            {/* </form> */}
            {/* </div> */}
          </div>
          {/* </form> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Mobile No.<span className="estrix"> *</span>
          </label>
          <input
            className="form-control"
            type="tel"
            pattern="^\d{10}"
            title="Format 9988776655"
            placeholder="Enter 10 digit No."
            name="umobile"
            autoComplete="off"
            value={mobileno}
            id="mobileno"
            onChange={(e) => setmobileno(e.target.value)}
            // onChange={(e)=>Validate(e,"email")}
            required
          />
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div className="form-group">
              <label htmlFor="psw">
                Password<span className="estrix"> *</span>
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter Password"
                name="psw"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div className="form-group">
              <label htmlFor="conpsw">
                Confirm Password<span className="estrix"> *</span>
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                name="conpsw"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-footer">
          <button
            disabled={disable}
            type="submit"
            className="btn btn-outline-primary-2"
          >
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="register-policy"
              required
            />
            <label className="custom-control-label" htmlFor="register-policy">
              I agree to the <a href="#">privacy policy</a> *
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
