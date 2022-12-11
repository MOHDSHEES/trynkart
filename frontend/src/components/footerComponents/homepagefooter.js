import React from "react";
import Lastfooter from "./lastfooter";
import Middlefooter from "./middlefooter";
import Topfooter from "./topfooter";

const Homepagefooter = () => {
  return (
    <div className="footer footer-2">
      <div className="mb-5"></div>
      <Topfooter />
      <Middlefooter />
      <Lastfooter />
    </div>
  );
};

export default Homepagefooter;
