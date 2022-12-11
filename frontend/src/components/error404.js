import React from "react";
import { Link } from "react-router-dom";
// import Categorybanner from "./categoryComponents/categorybanner";
import Footer from "./footerComponents/footer";
import Navbar from "./navbarComponents/navbar";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      {/* <Categorybanner /> */}
      <main className="main">
        <div
          className="error-content text-center"
          style={{
            backgroundImage: "url('/images/error-bg.jpg')",
          }}
        >
          <div className="container">
            <h1 className="error-title">Error 404</h1>
            <p>We are sorry, the page you've requested is not available.</p>
            <Link to="/" className="btn btn-outline-primary-2 btn-minwidth-lg">
              <span>BACK TO HOMEPAGE</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
