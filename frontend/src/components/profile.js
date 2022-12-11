import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileAddress from "./profileComponents/profileAddress";
import ProfileInfo from "./profileComponents/profileInfoContainer";
import MyOrders from "./profileComponents/profileMyOrders";
import { CardDetails, UpiDetails } from "./profileComponents/profilePayment";
import ProfileWishList from "./profileComponents/profileWishList";
import { useHistory, useLocation } from "react-router-dom";
import ProfileLoginCredential from "./profileComponents/profileLoginCredential";
import Axios from "axios";
import { logout, userDetails } from "../actions/itemsDataActions";
// import ProfileSkeleton from "./skeleton/profileSkeleton";

function useQuery() {
  // const { search } = useLocation();

  // return React.useMemo(() => new URLSearchParams(search), [search]);
  return new URLSearchParams(useLocation().search);
}

function Profile(props) {
  const query = useQuery();

  // fetching user details
  const userDetail = useSelector((state) => state.userDetailsReducer);
  const { items, loading, error } = userDetail;

  // const wishlistItem = useSelector((state) => state.wishlistItems);
  // const { items: wishlist } = wishlistItem;
  // const login = useSelector((state) => state.loginCheck);
  // const {
  //   user: { user },
  //   loading,
  //   error,
  // } = login;
  // console.log(userDetail);
  let history = useHistory();
  function logoutHandler() {
    // Cookie.remove("UserDetails");
    // Cookie.remove("cartItems");
    history.push("/");
    dispatch(logout());
  }

  const [data, setdata] = useState("");
  useEffect(() => {
    async function logincredentials() {
      const { data } = await Axios.post("/api/user/logincredentials", {
        id: props.userId,
      });
      setdata(data);
    }

    logincredentials();
  }, [props.userId]);
  // console.log(props.userId);

  const dispatch = useDispatch();
  useEffect(() => {
    if (items && items.length === 0) {
      dispatch(userDetails(props.userId));
    }
  }, [dispatch, props.userId, items]);

  // useEffect(() => {
  //   setstateparams(query.get("state"));
  //   if (document.getElementById(stateparams)) {
  //     // console.log(query.get("state"));
  //     toogle(stateparams);
  //   }
  // }, [stateparams, document.getElementById(stateparams), stateparams]);

  const ref1 = useCallback((node) => {
    const ids = [
      "profile-myorders",
      "profile-information",
      "profile-address",
      "login-credentials",
      "profile-wishlist",
      "profile-payment-cards",
      "profile-payment-upi",
    ];
    if (node !== null) {
      if (ids.includes(query.get("state"))) {
        toogle(query.get("state"));
        document.getElementById(query.get("state")).scrollIntoView({
          behavior: "smooth",
        });
      } else {
        toogle("profile-information");
      }
    }
  }, []);

  // toggle information,address etc
  const [state, setstate] = useState("profile-information");
  function toogle(param) {
    document.getElementById(state).classList.toggle("profile-right-close");
    document.getElementById(param).classList.toggle("profile-right-close");
    setstate(param);
    history.replace("/account?state=" + param);
  }

  // profile edit toogle

  return loading || !data ? (
    <div className="container">Loading...</div>
  ) : // <ProfileSkeleton />
  error ? (
    <div
      style={{ padding: "25px 30px", fontWeight: "600" }}
      className="alert alert-danger "
      role="alert"
    >
      <h4>{error}</h4>
    </div>
  ) : (
    <div className="container">
      <div ref={ref1} className="profile-container">
        {/* Left container */}
        <div className="profile-left">
          <div className="profile-filter ">
            <ul className="profile-left-ul profile-pa-left ">
              <li
                className="profile-name"
                id="profile"
                style={{ paddingBottom: "0" }}
              >
                HELLO{"  "}
                {/* {items.fname ? items.fname : items.lname} */}
                {props.user.fname ? props.user.fname : props.user.lname}
              </li>

              <hr className="hr" />
              <li
                onClick={() => toogle("profile-myorders")}
                className="order-li"
              >
                <p
                  style={{
                    color:
                      query.get("state") === "profile-myorders" && "#a6c76c",
                  }}
                >
                  <i className="fa fa-shopping-bag symbols "></i>MY ORDERS
                </p>
              </li>
            </ul>
            <div className="vertical-line">
              <ul className="profile-left-ul profile-middle-ul ">
                <li id="user">ACCOUNT SETTINGS</li>
                <ul
                  className="contact-li grey-li profile-pa-left"
                  style={{ paddingLeft: "40px" }}
                >
                  <li
                    className="profile-account"
                    onClick={() => toogle("profile-information")}
                  >
                    <p
                      style={{
                        color:
                          query.get("state") === "profile-information" &&
                          "#a6c76c",
                      }}
                    >
                      Profile Information
                    </p>
                  </li>
                  <li
                    className="profile-account"
                    onClick={() => toogle("profile-address")}
                  >
                    <p
                      style={{
                        color:
                          query.get("state") === "profile-address" && "#a6c76c",
                      }}
                    >
                      Manage Addressess
                    </p>
                  </li>
                  <li
                    className="profile-account"
                    onClick={() => toogle("login-credentials")}
                  >
                    <p
                      style={{
                        color:
                          query.get("state") === "login-credentials" &&
                          "#a6c76c",
                      }}
                    >
                      Login Credentials
                    </p>
                  </li>
                </ul>
                <li id="payment">PAYMENTS</li>
                <ul className="contact-li grey-li profile-pa-left">
                  <li
                    className="profile-account"
                    onClick={() => toogle("profile-payment-cards")}
                  >
                    <p
                      style={{
                        color:
                          query.get("state") === "profile-payment-cards" &&
                          "#a6c76c",
                      }}
                    >
                      Saved Cards
                    </p>
                  </li>
                  <li
                    className="profile-account"
                    onClick={() => toogle("profile-payment-upi")}
                  >
                    <p
                      style={{
                        color:
                          query.get("state") === "profile-payment-upi" &&
                          "#a6c76c",
                      }}
                    >
                      Saved UPI
                    </p>
                  </li>
                </ul>
              </ul>
            </div>
            <ul className="profile-left-ul profile-middle-ul profile-pa-left">
              <li
                onClick={() => toogle("profile-wishlist")}
                className="order-li"
              >
                <p
                  style={{
                    color:
                      query.get("state") === "profile-wishlist" && "#a6c76c",
                  }}
                >
                  <i className="fa fa-heart symbols"></i> MY WISHLIST
                </p>
              </li>

              <li
                onClick={logoutHandler}
                className="order-li "
                style={{ marginBottom: "30px" }}
              >
                <p>
                  <i className="fa fa-power-off logout-symbol symbols"></i>
                  LOGOUT
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* profile information container */}
        {/*  first div for mobile (hidden for pc) */}
        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("profile-information")}
        >
          <h4>Profile Information</h4>
        </div>

        <ProfileInfo info={items} userId={props.userId} />

        {/*  profile address */}
        {/*  first div for mobile (hidden for pc) */}
        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("login-credentials")}
        >
          <h4>Login Credentials</h4>
        </div>

        <ProfileLoginCredential
          userId={props.userId}
          data={data}
          email={items.email}
        />

        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("profile-address")}
        >
          <h4>Manage Adressess</h4>
        </div>

        <ProfileAddress info={items.address} userId={props.userId} />

        {/*payment container*/}
        {/*  first div for mobile (hidden for pc) */}
        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("profile-payment-cards")}
        >
          <h4> Saved Cards</h4>
        </div>

        <CardDetails />

        {/*payment UPI container*/}
        {/*  first div for mobile (hidden for pc) */}
        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("profile-payment-upi")}
        >
          <h4> Saved UPI</h4>
        </div>

        <UpiDetails />

        {/*wishlist container*/}
        {/*  first div for mobile (hidden for pc) */}
        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("profile-wishlist")}
        >
          <h4> My Wishlist</h4>
        </div>

        <ProfileWishList userId={props.userId} />

        {/*order container*/}
        {/*  first div for mobile (hidden for pc) */}
        <div
          className="profile-info-container heading-color"
          onClick={() => toogle("profile-myorders")}
        >
          <h4>My Orders</h4>
        </div>

        <MyOrders userId={props.userId} />
      </div>
    </div>
  );
}
export { useQuery };
export default Profile;
