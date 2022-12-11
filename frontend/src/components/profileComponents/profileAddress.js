import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAddress, deleteAddress } from "../../actions/itemsDataActions";
import states from "../functions/states";

function ProfileAddress(props) {
  const [address, setaddress] = useState(props.info);
  const [addId, setaddId] = useState(null);

  //  const {address}= props.info;
  const [data, setdata] = useState({
    name: "",
    mobileno: "",
    addres: "",
    locality: "",
    landmark: "",
    alternateno: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const Inputchange = (event) => {
    const { name, value } = event.target;

    setdata({
      ...data,
      [name]: value,
    });
  };

  // cancel btn handle
  function CancelHandle() {
    setdata({
      name: "",
      mobileno: "",
      addres: "",
      locality: "",
      landmark: "",
      alternateno: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    });
    window.scrollTo(0, 20);
    toogleAddAddress();
  }
  // toggle editaddress on/off
  function toogleAddAddress() {
    document
      .getElementById("toogle-address")
      .classList.toggle("profile-right-close");
    document.getElementById("add-btn").innerHTML = "Add";
    document.getElementById("new-add-btn").disabled = false;
  }
  // edit address btn handler
  function editAddress(addId) {
    setaddId(addId);
    document
      .getElementById("toogle-address")
      .classList.remove("profile-right-close");
    const addr = address.find(({ _id }) => _id === addId);
    setdata({
      name: addr.name || "",
      mobileno: addr.mobileno || "",
      addres: addr.address || "",
      locality: addr.locality || "",
      landmark: addr.landmark || "",
      alternateno: addr.alternatemobile || "",
      city: addr.city || "",
      district: addr.district || "",
      state: addr.state || "",
      pincode: addr.pincode || "",
    });
    // window.scrollTo(0, 80);
    document.getElementById("add-btn").innerHTML = "Update";
    document.getElementById("new-add-btn").disabled = true;
  }

  // const wishlistItem = useSelector(state => state.addressSave);
  // const { items, loading, error } = wishlistItem;

  // form submit handler
  const dispatch = useDispatch();
  const submitHandler = (e, addId) => {
    e.preventDefault();
    const id = address && address.filter((item) => item.default === true);
    const defaultId = (id.length && id[0]._id) || null;
    dispatch(saveAddress(props.userId, data, addId, defaultId));
    window.location.reload();
  };
  // address remove btn handler
  function deleteAddres(prop) {
    setaddress(address.filter((item) => item._id !== prop));
    dispatch(deleteAddress(prop, props.userId));
  }

  return (
    <div
      className="profile-right profile-right-close animation slideIn"
      id="profile-address"
    >
      <p className="profile-info">Manage Adressess</p>
      <div>
        {/*  address form */}
        <div className="profile-add-address ">
          <button
            id="new-add-btn"
            className="btn btn-outline-primary"
            onClick={() => toogleAddAddress()}
          >
            + Add New Address
          </button>
        </div>

        <div
          className="address-form profile-right-close animation slideIn"
          id="toogle-address"
        >
          <form
            className="profile-form"
            id="add-form"
            onSubmit={(e) => submitHandler(e, addId)}
          >
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">
                  Name <span className="estrix"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  // value={name}
                  // onChange={(e) => setname(e.target.value)}
                  value={data.name}
                  onChange={Inputchange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="phoneNo">
                  Mobile No. <span className="estrix"> *</span>
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  className="form-control"
                  // value={mobileno}
                  // onChange={(e) => setmobileno(e.target.value)}
                  name="mobileno"
                  value={data.mobileno}
                  onChange={Inputchange}
                  placeholder="Mobile No."
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">
                {" "}
                Address <span className="estrix"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                // value={addres}
                // onChange={(e) => setaddres(e.target.value)}
                name="addres"
                value={data.addres}
                onChange={Inputchange}
                placeholder="address "
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputAddress2">
                  {" "}
                  Locality <span className="estrix"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  // value={locality}
                  // onChange={(e) => setlocality(e.target.value)}
                  name="locality"
                  value={data.locality}
                  onChange={Inputchange}
                  placeholder="Locality"
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputAddress2">Landmark</label>
                <input
                  type="text"
                  className="form-control"
                  id="landmark"
                  // value={landmark}
                  // onChange={(e) => setlandmark(e.target.value)}
                  name="landmark"
                  value={data.landmark}
                  onChange={Inputchange}
                  placeholder="Landmark"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="phoneNo">Alternate No.</label>
                <input
                  type="tel"
                  id="alternateNo"
                  className="form-control"
                  // value={alternateno}
                  // onChange={(e) => setalternateno(e.target.value)}
                  name="alternateno"
                  value={data.alternateno}
                  onChange={Inputchange}
                  placeholder="Alternate Mobile No."
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="inputCity">
                  City <span className="estrix"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  // value={city}
                  // onChange={(e) => setcity(e.target.value)}
                  name="city"
                  value={data.city}
                  onChange={Inputchange}
                  required
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputCity">
                  District <span className="estrix"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDistrict"
                  placeholder="District"
                  // value={city}
                  // onChange={(e) => setcity(e.target.value)}
                  name="district"
                  value={data.district}
                  onChange={Inputchange}
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">
                  {" "}
                  State <span className="estrix"> *</span>
                </label>
                <select
                  id="inputState"
                  className="form-control"
                  // value={state}
                  // onChange={(e) => setstate(e.target.value)}
                  name="state"
                  value={data.state}
                  onChange={Inputchange}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state, idx) => (
                    <option key={idx} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">
                  Pin code <span className="estrix"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPincode"
                  // value={pincode}
                  // onChange={(e) => setpincode(e.target.value)}
                  name="pincode"
                  value={data.pincode}
                  onChange={Inputchange}
                  required
                />
              </div>
            </div>

            <button
              id="add-btn"
              type="submit"
              className="btn btn-primary profile-save-btn"
            >
              Add
            </button>
            <button
              onClick={CancelHandle}
              className="btn btn-outline-primary address-cancel-btn"
            >
              Cancel
            </button>
          </form>
        </div>

        {/* address saved */}
        {address &&
          address.map((add) => (
            <div className="card address-card-container " key={add._id}>
              <div
                className="card-body address-card-body "
                style={{ padding: "20px 5px 0" }}
              >
                <div>
                  {add.name}{" "}
                  <span style={{ paddingLeft: "15px" }}>{add.mobileno}</span>
                  {add.alternatemobile && (
                    <span style={{ paddingLeft: "15px" }}>
                      {add.alternatemobile}
                    </span>
                  )}
                  <span>
                    <div className="btn-group dropleft address-btn-div">
                      <button
                        type="button"
                        className="address-btn "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        &#8942;
                      </button>
                      <div className="dropdown-menu ">
                        <p
                          className="dropdown-item address-edit"
                          onClick={() => editAddress(add._id)}
                          // href="#new-add-btn"
                        >
                          Edit
                        </p>
                        <p
                          onClick={() => deleteAddres(add._id)}
                          className="dropdown-item address-edit"
                        >
                          Delete
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
              </div>

              <div
                className="card-body address-card-details"
                style={{ padding: "5px 5px 20px" }}
              >
                {add.address} , {add.locality}{" "}
                {add.landmark ? "," + add.landmark : ""}, {add.city},{" "}
                {add.district && add.district + ", "} {add.state} -{" "}
                <b>{add.pincode}</b>.
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ProfileAddress;
