import React, { useRef, useState } from "react";
import Axios from "axios";
// import OtpInput from "react-otp-input";

function ProfileLoginCredential(props) {
  const form = useRef();
  const usernameform = useRef();
  const passError = useRef();
  const [username, setusername] = useState(
    props.data ? props.data.username : ""
  );
  const [ispassbtn, setispassbtn] = useState(false);
  // const [password, setpassword] = useState(
  //   props.data ? props.data.password : ""
  // );
  const [password, setpassword] = useState("");
  const [Newpassword, setNewpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [passVisible, setpassVisible] = useState(false);
  // const [edit, setedit] = useState("Edit");
  const [error, seterror] = useState("");

  // function tooglehandle() {
  //   // toggle field
  //   let field = document.getElementById("logincredential");
  //   field.disabled ? (field.disabled = false) : (field.disabled = true);
  //   // change text of link
  //   edit === "Edit" ? setedit("Cancel") : setedit("Edit");
  //   // reset if cancel btn
  //   if (edit === "Cancel") {
  //     cancelbtn();
  //     // document.getElementById("form").reset();
  //   }
  // }

  function tooglehandle(id) {
    // toggle field
    if (id.current.disabled) {
      id.current.disabled = false;
      document.getElementById(id.current.name).innerHTML = "Cancel";
      id.current.name === "passwordcredential" && setispassbtn(true);
    } else {
      id.current.disabled = true;
      document.getElementById(id.current.name).innerHTML = "Edit";
      if (id.current.name === "passwordcredential") {
        passError.current.classList.add("login-error-hide");
        setispassbtn(false);
        setNewpassword("");
        setConfirmpassword("");
        setpassword("");
      } else {
        setusername(props.data.username);
      }
    }
  }

  // function onclick() {
  //   document.getElementById("error").classList.add("login-error-hide");
  //   window.$("#loginModal").modal("hide");

  //   // document.getElementById("id01").style.display = "none";
  //   document.getElementById("login-form").reset();
  // }
  // async function usernameSubmit(e) {
  //   e.preventDefault();
  //   if (username !== props.data.username) {
  //     await Axios.post("/api/user/updatelogincredentials", {
  //       id: props.userId,
  //       details: { username: username },
  //     });
  //   }
  //   usernameform.current.disabled = true;
  //   // change text of link
  //   document.getElementById("usernamecredential").innerHTML = "Edit";
  // }

  async function passwordSubmit(e) {
    passError.current.classList.add("login-error-hide");
    e.preventDefault();
    if (Newpassword === Confirmpassword) {
      if (password === props.data.password) {
        await Axios.post("/api/user/updatelogincredentials", {
          id: props.userId,
          details: { password: Newpassword },
        });
        form.current.disabled = true;
        setispassbtn(false);
        setpassword("");
        setConfirmpassword("");
        setNewpassword("");
        // change text of link
        document.getElementById("passwordcredential").innerHTML = "Edit";
      } else {
        passError.current.classList.remove("login-error-hide");
        seterror("Incorrect Previous Password");
      }
    } else {
      passError.current.classList.remove("login-error-hide");
      seterror("Password Mismatch");
    }
  }
  // async function usenamesubmitHandler(e) {
  //   e.preventDefault();
  //   if (username !== props.data.username || password !== props.data.password) {
  //     await Axios.post("/api/user/updatelogincredentials", {
  //       id: props.userId,
  //       details: { username: username, password: password },
  //     });
  //   }
  //   document.getElementById("logincredential").disabled = true;
  //   // change text of link
  //   edit === "Edit" ? setedit("Cancel") : setedit("Edit");
  // }
  // function cancelbtn() {
  //   setusername(props.data.username);
  //   // setpassword(props.data.password);
  //   setpassword("");
  //   setConfirmpassword("");
  //   setNewpassword("");
  // }

  return (
    <div
      className="profile-right profile-right-close animation slideIn"
      id="login-credentials"
    >
      <p className="profile-info">Login Credentials</p>

      <div className="login-credential " style={{ marginRight: "0" }}>
        <div className="col col-md-4 ">
          {/* <form id="formlogincredentials" onSubmit={usernameSubmit}> */}
          <form className="profile-form">
            <label>Username </label>
            <fieldset
              ref={usernameform}
              name="usernamecredential"
              // id="logincredential"
              disabled
            >
              {/* <small>Username</small> */}
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                placeholder="Username"
                required
              />
              {/* <button
                className="btn btn-primary profile-save-btn "
                type="submit"
              >
                Save
              </button> */}
            </fieldset>
          </form>
        </div>
        <div className="col col-md-4 password-credential">
          <div
            ref={passError}
            id="password-error"
            style={{
              paddingBottom: "0",
              position: "absolute",
              top: "-40px",
              left: "0",
              right: "0",
            }}
            className="login-container login-error login-error-hide "
          >
            <p>{error}</p>
          </div>

          <form onSubmit={passwordSubmit} className="profile-form">
            <fieldset ref={form} name="passwordcredential" disabled>
              <label>
                Previous Password
                <span
                  id="passwordcredential"
                  onClick={() => tooglehandle(form)}
                  className="profile-edit"
                >
                  Edit
                </span>
                {/* {form.current && !form.current.disabled && ( */}
                {ispassbtn && (
                  <small
                    className="profile-edit eye-btn"
                    style={{ paddingTop: "3px" }}
                    onClick={() => setpassVisible(!passVisible)}
                  >
                    {passVisible ? (
                      <i className="fa fa-eye-slash" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-eye"></i>
                    )}
                  </small>
                )}
              </label>

              <div className="form-row " style={{ marginRight: "0" }}>
                <div className="col col-md-12 ">
                  {/* <small className="grey">Previous Password</small> */}
                  <input
                    type={passVisible ? "text" : "password"}
                    className="form-control"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    placeholder="Enter Previous Password"
                    required
                  />
                </div>
              </div>
              <label style={{ marginTop: "10px" }}>New Password</label>
              <div className="form-row " style={{ marginRight: "0" }}>
                <div className="col col-md-12 ">
                  {/* <small className="grey">New Password</small> */}
                  <input
                    type={passVisible ? "text" : "password"}
                    className="form-control"
                    value={Newpassword}
                    onChange={(e) => {
                      setNewpassword(e.target.value);
                    }}
                    placeholder="Enter New Password"
                    required
                  />
                </div>
              </div>
              <label style={{ marginTop: "10px" }}>Confirm New Password</label>
              <div className="form-row " style={{ marginRight: "0" }}>
                <div className="col col-md-12 ">
                  {/* <small className="grey">Confirm Password</small> */}
                  <input
                    type={passVisible ? "text" : "password"}
                    className="form-control"
                    value={Confirmpassword}
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                    placeholder="Confirm New Password"
                    required
                  />
                </div>
              </div>
              <button
                className="btn btn-primary profile-save-btn "
                type="submit"
              >
                Save
              </button>
              <label
                className="psw"
                style={{ paddingTop: "3px", float: "right" }}
              >
                Forgot{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  data-toggle="modal"
                  data-target="#ForgetPassModal"
                  // onClick={onclick}
                >
                  password?
                </span>
              </label>
            </fieldset>
          </form>
        </div>
      </div>

      {/* <label style={{ marginTop: "10px" }} htmlFor="inputEmail4">
            Password
          </label>
          <div className="form-row" style={{ marginRight: "0" }}>
            <div className="form-group col-md-4  input-group">
              <input
                type={passVisible ? "text" : "password"}
                className="form-control"
                // id="inputEmail4"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <div class="input-group-append" style={{ cursor: "pointer" }}>
                <span
                  class="input-group-text"
                  onClick={() => setpassVisible(!passVisible)}
                >
                  {passVisible ? (
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                  ) : (
                    <i class="fa fa-eye"></i>
                  )}
                </span>
              </div>
            </div>
          </div> */}

      {/* <OtpInput
        // value={OTP}
        className="otp-input"
        // onChange={setOTP}
        numInputs={6}
        // hasErrored={OTPMismatch ? true : false}
        errorStyle={{
          border: "1px solid red",
          borderRadius: "5px",
        }}
        isInputNum={true}
        inputStyle={{ width: "30px" }}
        containerStyle={{ justifyContent: "center" }}
        // separator={<span>-</span>}
      /> */}
    </div>
  );
}

export default ProfileLoginCredential;
