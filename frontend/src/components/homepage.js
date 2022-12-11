import React, { useEffect } from "react";
// import DCarousel from "./homepageComponents/dcarousel";
import Homepagefooter from "./footerComponents/homepagefooter";
import Banner from "./homepageComponents/banner";
import Banner2 from "./homepageComponents/banner2";
import Hotdeals from "./homepageComponents/hotdeals";
import Popularcategories from "./homepageComponents/popularcategories";
import { useSelector, useDispatch } from "react-redux";
import { listItems } from "../actions/itemsDataActions";
import Card from "./homepageComponents/card";
import Carousel from "./homepageComponents/carousel";

const Homepage = () => {
  let counter = -1;
  const itemList = useSelector((state) => state.itemsListReducer);
  const {
    items: [items],
    loading,
    error,
  } = itemList;
  const dispatch = useDispatch();
  useEffect(() => {
    // if (!(items && Object.keys(items.categories).length)) {
    dispatch(listItems());
    // }
  }, [dispatch]);
  return (
    // <div className="page-wrapper">
    <div>
      <Carousel />
      {/* <DCarousel /> */}
      <Popularcategories />
      <Hotdeals />
      <Banner />
      {items &&
        Object.keys(items.categories).map((category, idx) => {
          counter += items.categories[category];
          return (
            <div key={category}>
              {idx === 2 && <Banner2 />}
              <Card
                category={category}
                amount={items.categories[category]}
                counter={counter}
              />
            </div>
          );
        })}
      {/* <Card /> */}
      {/* <Banner2 /> */}
      {/* <Cards /> */}
      <Homepagefooter />
    </div>
  );
};

export default Homepage;
