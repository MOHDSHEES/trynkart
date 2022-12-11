import React from "react";
import Footer from "./footerComponents/footer";
import Itemdescription from "./itemPageComponents/itemDescription";
import Itemimage from "./itemPageComponents/itemImage";
import Similarproducts from "./itemPageComponents/similarProducts";
import Navbar from "./navbarComponents/navbar";

const Itempage = () => {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper">
        <div className="page-contnet">
          <div className="container">
            <div className="main">
              <Itemimage />
              <Itemdescription />
              <Similarproducts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Itempage;
