import React from "react";

const Categorybanner = (props) => {
  return (
    <div>
      <div
        className="page-header text-center"
        style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
      >
        <div className="container">
          <h1 className="page-title">
            {props.name}
            {props.category && <span>{props.category}</span>}
          </h1>
        </div>
      </div>
      {/* <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">No Sidebar</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Boxed
            </li>
          </ol>
        </div>
      </nav> */}
    </div>
  );
};

export default Categorybanner;
