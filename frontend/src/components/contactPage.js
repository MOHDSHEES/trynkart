import React from "react";
import { useSelector } from "react-redux";
import Contactaccordian from "./contactPageComponents/contactAccordian";
import Contactbanner from "./contactPageComponents/contactBanner";
import Contactinfo from "./contactPageComponents/contactInfo";
import Contactorder from "./contactPageComponents/contactOrder";
import Footer from "./footerComponents/footer";
import Navbar from "./navbarComponents/navbar";

const Contactpage = () => {
  const usersInfo = useSelector((state) => state.loginCheck);
  const { user } = usersInfo;
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <div className="main"> */}

        {/* <Categorybanner name="Contact Us" /> */}
        <Contactbanner />
        {user && user.token ? (
          <Contactorder />
        ) : (
          <div
            style={{ padding: "25px 30px", fontWeight: "600" }}
            className="alert alert-danger "
            role="alert"
          >
            Login to get Help with your Orders.
          </div>
        )}
        <Contactaccordian />
        {user && user.token && <Contactinfo />}

        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Contactpage;
