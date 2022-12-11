import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { saveAddress } from "../../actions/itemsDataActions";
import formatter from "../functions/formatter";
import states from "../functions/states";
import { displayRazorpay } from "../razorpay";
import ViewAddressess from "./viewaddress";

const Checkout = () => {
  const [sellingPrice, setsellingPrice] = useState(0);
  const [mrp, setmrp] = useState(0);
  const userDetail = useSelector((state) => state.userDetailsReducer);
  const { items, loading, error } = userDetail;
  const [disable, setdisable] = useState(true);
  const form = useRef();
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

  const location = useLocation();

  const [qty, setqty] = useState([]);
  // input qty change handle
  function handleChange(i, event) {
    const values = [...qty];
    values[i] = event.target.value;
    setqty(values);
    calculate(values);
  }
  const Inputchange = (event) => {
    const { name, value } = event.target;

    setdata({
      ...data,
      [name]: value,
    });
  };
  // function to calculate total MRP and total selling price
  function calculate(values) {
    let total = 0;
    let sellprice = 0;
    let quantity = [];
    itms.map((c, idx) => {
      total =
        total +
        c.original_price * (values && values[idx] ? values[idx] : c.cartqty);
      sellprice =
        sellprice +
        Math.ceil(
          c.sellingPrice || c.original_price - (c.original_price * c.off) / 100
        ) *
          (values && values[idx] ? values[idx] : c.cartqty);
      quantity.push(c.cartqty);
      return 0;
    });

    setsellingPrice(sellprice);
    setmrp(total);
    return [quantity];
  }
  const [itms, setitms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (items && items.address && items.address.length) {
      setdisable(false);
    }
    if (location.state) {
      const itms = location.state;
      setitms(itms);
      // if (itms) {
      const [quantity] = calculate();
      setqty(quantity);
      // }
    } else {
      history.push("/");
    }
  }, [itms, items]);
  const [defaultaddr, setdefaultaddr] = useState([]);
  function setaddr(ad) {
    setdata({
      name: ad.name || "",
      mobileno: ad.mobileno || "",
      addres: ad.address || "",
      locality: ad.locality || "",
      landmark: ad.landmark || "",
      alternateno: ad.alternatemobile || "",
      city: ad.city || "",
      district: ad.district || "",
      state: ad.state || "",
      pincode: ad.pincode || "",
    });
  }
  useEffect(() => {
    if (items && items.address) {
      form.current.disabled = false;
      const address = items.address;
      const addr = address && address.filter((item) => item.default === true);
      if (addr && addr.length) {
        setdefaultaddr(addr);
        setaddr(addr[0]);
        form.current.disabled = true;
      } else if (address.length) {
        setdefaultaddr([address[0]]);
        setaddr(address[0]);
        form.current.disabled = true;
      }
    }
  }, [items]);

  function toggle(id) {
    setaddId(defaultaddr.length ? defaultaddr[0]._id : null);
    if (id.current.disabled) {
      id.current.disabled = false;
    } else {
      id.current.disabled = true;
      setaddr(defaultaddr.length ? defaultaddr[0] : defaultvalue);
    }
  }
  //   console.log(itms);
  //   console.log(defaultaddr);
  //   console.log(data);
  const [addId, setaddId] = useState(null);
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();
    const id = items && items.address.filter((item) => item.default === true);
    const defaultId = (id.length && id[0]._id) || null;
    dispatch(saveAddress(items._id, data, addId, defaultId));
    window.location.reload();
  }
  const defaultvalue = {
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
  };
  function addAddress() {
    form.current.disabled = false;
    setdata(defaultvalue);
    setaddId(null);
  }

  function buyHandle() {
    let defaultaddr;
    const addr = items.address.filter((item) => item.default === true);
    if (addr.length) {
      [defaultaddr] = addr;
    } else {
      defaultaddr = items.address[0];
    }
    displayRazorpay(sellingPrice, items._id, itms, qty, defaultaddr, history);
  }
  return (
    <div>
      <ViewAddressess
        userId={items && items._id}
        info={items && items.address}
      />
      <div class="page-content">
        <div class="checkout">
          <div class="container">
            {/* <div class="checkout-discount">
              <form action="#">
                <input
                  type="text"
                  class="form-control"
                  required
                  id="checkout-discount-input"
                />
                <label for="checkout-discount-input" class="text-truncate">
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div> */}
            {/* <form>
              <fieldset
                ref={form}
                //   name="usernamecredential"
                // id="logincredential"
                disabled
              >
                onClick={() => toggle(form)} */}
            <div class="row">
              <div class="col-lg-9">
                {!defaultaddr.length && (
                  <div
                    className="alert alert-danger sticky"
                    // style={{ position: "sticky", top: "2px" }}
                    role="alert"
                  >
                    Add Delivery Address.
                  </div>
                )}
                <h2 class="checkout-title">
                  Billing Details{" "}
                  <span style={{ float: "right", marginRight: "20px" }}>
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
                          onClick={() => toggle(form)}
                        >
                          Edit
                        </p>
                        <p
                          className="dropdown-item address-edit"
                          onClick={addAddress}
                        >
                          Add New Address
                        </p>
                        <p
                          className="dropdown-item address-edit"
                          data-toggle="modal"
                          data-target="#viewAddress"
                        >
                          View All
                        </p>
                      </div>
                    </div>
                  </span>
                  {/* <span style={{ marginLeft: "10px" }}>
                        <a href="">Edit</a>
                      </span>
                      <span style={{ float: "right", marginRight: "20px" }}>
                        <a href="">View All</a>
                      </span>
                      <span style={{ float: "right", marginRight: "15px" }}>
                        <a href="">Add Address</a>
                      </span> */}
                </h2>
                <form onSubmit={(e) => submitHandler(e)}>
                  <fieldset
                    ref={form}
                    //   name="usernamecredential"
                    // id="logincredential"
                    // disabled
                  >
                    <div>
                      <div class="row">
                        <div class="col-sm-6">
                          <label>Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            name="name"
                            value={data.name}
                            onChange={Inputchange}
                          />
                        </div>

                        <div class="col-sm-6">
                          <label>Mobile No. *</label>
                          <input
                            type="tel"
                            class="form-control"
                            required
                            name="mobileno"
                            value={data.mobileno}
                            onChange={Inputchange}
                          />
                        </div>
                      </div>

                      <label>Address *</label>
                      <input
                        type="text"
                        class="form-control"
                        required
                        value={data.addres}
                        name="addres"
                        onChange={Inputchange}
                      />

                      <div class="row">
                        <div class="col-sm-6">
                          <label>Alternate No.</label>
                          <input
                            type="tel"
                            class="form-control"
                            value={data.alternateno}
                            name="alternateno"
                            onChange={Inputchange}
                          />
                        </div>
                        <div class="col-sm-6">
                          <label>Locality *</label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            value={data.locality}
                            name="locality"
                            onChange={Inputchange}
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <label>City *</label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            value={data.city}
                            name="city"
                            onChange={Inputchange}
                          />
                        </div>
                        <div class="col-sm-6">
                          <label>Landmark </label>
                          <input
                            type="text"
                            class="form-control"
                            value={data.landmark}
                            name="landmark"
                            onChange={Inputchange}
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-4">
                          <label>District *</label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            value={data.district}
                            name="district"
                            onChange={Inputchange}
                          />
                        </div>
                        <div class="col-sm-4">
                          <label>State * </label>
                          <select
                            id="inputState"
                            className="form-control"
                            // value={state}
                            // onChange={(e) => setstate(e.target.value)}
                            name="state"
                            value={data.state}
                            // name="state"
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
                        <div class="col-sm-4">
                          <label>Pincode * </label>
                          <input
                            type="text"
                            class="form-control"
                            required
                            value={data.pincode}
                            name="pincode"
                            onChange={Inputchange}
                          />
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <button
                          onClick={() => toggle(form)}
                          className="btn btn-outline-primary  profile-save-btn"
                          //   data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          id="add-btn"
                          type="submit"
                          className="btn btn-primary  address-cancel-btn"
                        >
                          Save
                        </button>
                      </div>
                      {/* <div className="row">
                        <div
                          style={{ paddingLeft: "0" }}
                          class="custom-control custom-checkbox"
                        >
                          <button className="btn btn-primary">Cancel</button>
                        </div>
                        <div
                          style={{ paddingLeft: "0" }}
                          class="custom-control custom-checkbox"
                        >
                          <button className="btn btn-primary">Save</button>
                        </div>
                      </div> */}
                    </div>
                  </fieldset>
                </form>
              </div>
              <aside class="col-lg-3">
                <div class="summary">
                  <h3 class="summary-title">Your Order</h3>

                  <table class="table table-summary">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {itms.map((item, idx) => (
                        <tr key={idx}>
                          {/* <img
                            src={item.productImg[0]}
                            alt="item"
                            height="50"
                            width="50"
                          /> */}
                          <td style={{ padding: "10px 0" }}>
                            <Link
                              to={"/product/" + item.category + "/" + item._id}
                            >
                              <img
                                style={{
                                  margin: "5px auto",
                                  maxHeight: "60px",
                                  maxWidth: "60px",
                                }}
                                src={item.productImg[0]}
                                alt="item"
                                //   height="60"
                                //   width="60"
                              />
                              {item.displayinfo}
                            </Link>
                          </td>
                          <td
                            style={{ padding: "10px 0" }}
                            className="sansarif"
                          >
                            {" "}
                            {item.sellingPrice &&
                              formatter.format(item.sellingPrice)}
                            <br />
                            <div>
                              <label
                                style={{
                                  marginTop: "7px",
                                  marginRight: "10px",
                                }}
                              >
                                Qty:
                              </label>
                              <br />
                              <select
                                onChange={(e) => handleChange(idx, e)}
                                className="cart-select"
                                // value={item.cartqty}
                                value={qty[idx]}
                              >
                                {[...Array(item.stock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/* <tr>
                        <td>
                          <a href="#">Beige knitted elastic runner shoes</a>
                        </td>
                        <td>$84.00</td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#">Blue utility pinafore denimdress</a>
                        </td>
                        <td>$76,00</td>
                      </tr> */}
                      <tr class="summary-subtotal">
                        <td>Subtotal:</td>
                        <td className="sansarif">
                          {formatter.format(sellingPrice)}
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping:</td>
                        <td>Free shipping</td>
                      </tr>
                      <tr class="summary-total">
                        <td>Total:</td>
                        <td className="sansarif">
                          {formatter.format(sellingPrice)}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="accordion-summary" id="accordion-payment">
                    <div class="card">
                      <div class="card-header" id="heading-3">
                        <h2 class="card-title">
                          <p
                            class="collapsed checkout-cod"
                            // role="button"
                            // href="#!"
                            data-toggle="collapse"
                            href="#colla-3"
                            // aria-expanded="false"
                            // aria-controls="collapse-3"
                          >
                            Cash on delivery
                          </p>
                        </h2>
                      </div>
                      <div
                        id="colla-3"
                        class="collapse"
                        // aria-labelledby="heading-3"
                        data-parent="#accordion-payment"
                      >
                        <div class="card-body">
                          Currently we do not support Cash on Delivery. Please
                          choose other methods of Payment.
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header" id="heading-5">
                        <h2 class="card-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-5"
                            aria-expanded="true"
                            aria-controls="collapse-5"
                          >
                            Online
                            <img
                              src="/images/payments.png"
                              alt="payments cards"
                            />
                          </a>
                        </h2>
                      </div>
                      <div
                        id="collapse-5"
                        class="collapse show"
                        aria-labelledby="heading-5"
                        data-parent="#accordion-payment"
                      >
                        <div class="card-body">
                          {" "}
                          Clicking on Place Order button will open Razorpy.
                          Choose apropriate methed of payment on Razorpay for
                          sucessful transaction.
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={disable}
                    onClick={buyHandle}
                    class="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    <span class="btn-text">Place Order</span>
                    <span class="btn-hover-text">Proceed to Checkout</span>
                  </button>
                </div>
              </aside>
            </div>
            {/* </fieldset>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
