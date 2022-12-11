import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Categorybanner from "./categoryComponents/categorybanner";
import Categoryproducts from "./categoryComponents/categoryProducts";
import Footer from "./footerComponents/footer";
import Navbar from "./navbarComponents/navbar";
import { useParams, useLocation } from "react-router-dom";
import { itemsPage } from "../actions/itemsDataActions";

const Category = () => {
  let { category } = useParams();

  // const itemList = useSelector((state) => state.itemsPage);
  // const { items, loading, error } = itemList;

  // getting search querry from url
  const location = useLocation().search;
  const search = new URLSearchParams(location).get("search");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itemsPage(category, search));
    // const response = await Axios.post("/api/product/search", {
    //   search: search,
    // });
  }, [dispatch, category, search]);

  return (
    <div>
      <Navbar />
      <div className="page-wrapper">
        <div className="main">
          <Categorybanner name="Products" category={search || category} />
          <Categoryproducts />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;
