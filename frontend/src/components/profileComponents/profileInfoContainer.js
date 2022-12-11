import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfileInfo } from "../../actions/itemsDataActions";
// import { updateProfileInfo } from "../actions/itemsDataActions";

function ProfileInfo(props) {
  const [fname, setfname] = useState(props.info.fname);
  const [lname, setlname] = useState(props.info.lname);
  const [mobileno, setmobileno] = useState(props.info.mobileno);
  const [email, setemail] = useState(props.info.email);
  const [gender, setgender] = useState(props.info.gender);

  const [edit, setedit] = useState("Edit Profile");
  function tooglehandle() {
    // toggle field
    let field = document.getElementById("fieldset");
    field.disabled ? (field.disabled = false) : (field.disabled = true);
    // change text of link
    // edit === "Edit Profile" ? setedit("Cancel") : setedit("Edit Profile");
    // field.disabled ? setedit("Edit Profile") : setedit("Cancel");
    if (field.disabled) {
      setedit("Edit Profile");
      cancelbtn();
      document.getElementById("form").reset();
    } else {
      setedit("Cancel");
    }
    // reset if cancel btn
    // if (edit === "Cancel") {
    //   cancelbtn();
    //   document.getElementById("form").reset();
    // }
    // let radiobtn = document.getElementById(gender);
    // radiobtn.checked = true;
  }
  const dispatch = useDispatch();
  function profileInfoSubmitHandler(e) {
    e.preventDefault();
    dispatch(
      updateProfileInfo(fname, lname, mobileno, gender, email, props.userId)
    );
    let field = document.getElementById("fieldset");
    field.disabled ? (field.disabled = false) : (field.disabled = true);
    // change text of link
    edit === "Edit Profile" ? setedit("Cancel") : setedit("Edit Profile");
  }

  function cancelbtn() {
    setfname(props.info.fname);
    setlname(props.info.lname);
    setemail(props.info.email);
    setmobileno(props.info.mobileno);
    setgender(props.info.gender);
  }

  return (
    <div className="profile-right animation slideIn " id="profile-information">
      <p className="profile-info">
        Profile Information
        <span onClick={tooglehandle} className="profile-edit">
          {edit}
        </span>
      </p>

      <form
        className="profile-form"
        id="form"
        onSubmit={profileInfoSubmitHandler}
      >
        <fieldset id="fieldset" disabled>
          <label htmlFor="">Full Name</label>
          <div className="form-row " style={{ marginRight: "0" }}>
            <div className="col col-md-4 first-name">
              <input
                type="text"
                className="form-control"
                value={fname}
                onChange={(e) => {
                  setfname(e.target.value);
                }}
                placeholder="First name"
              />
            </div>
            <div className="col col-md-4 ">
              <input
                type="text"
                className="form-control"
                value={lname}
                placeholder="Last name"
                onChange={(e) => {
                  setlname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-row" style={{ marginRight: "0" }}>
            <div className="form-group col-md-4 form-email">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                defaultValue={email}
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
          </div>
          <label className="form-gender">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setgender(e.currentTarget.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                {" "}
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="female"
                checked={gender === "female"}
                value="female"
                onChange={(e) => setgender(e.currentTarget.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <div className="form-row" style={{ marginRight: "0" }}>
            <div className="form-group col-md-4 form-mobile">
              <label htmlFor="form1">Mobile Number</label>
              <input
                type="tel"
                id="form1"
                className="form-control"
                defaultValue={mobileno ? mobileno : ""}
                placeholder="Mobile No."
                onChange={(e) => {
                  setmobileno(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="btn btn-primary profile-save-btn " type="submit">
            Save
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default ProfileInfo;
