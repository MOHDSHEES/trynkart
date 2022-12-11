import React from "react";
// import Axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { listItems } from "../../actions/itemsDataActions";

const Popularcategories = () => {
  let counter = -1;
  // const [loading, setloading] = useState(false);

  const itemList = useSelector((state) => state.itemsListReducer);
  const {
    items: [items],
    loading,
    error,
  } = itemList;

  // async function category() {
  //   setloading(true);
  //   const { data } = await Axios.post("/api/products/category");
  //   setcategories(data);
  //   setloading(false);
  //   // console.log(Object.keys(data));
  // }
  // console.log(categories);

  return (
    <div>
      <div className="mb-4"></div>
      <div className="container">
        <h2 className="title text-center mb-4">Explore Popular Categories</h2>

        <div className="cat-blocks-container">
          <div className="row">
            {items &&
              Object.keys(items.categories).map((category) => {
                counter += items.categories[category];
                return (
                  <div className="col-6 col-sm-4 col-lg-2" key={category}>
                    <Link to={"/products/" + category} className="cat-block">
                      <figure>
                        <span>
                          <img
                            style={{ maxHeight: "120px", maxwidth: "120px" }}
                            src={items.products[counter].productImg[0]}
                            alt={category}
                          />
                        </span>
                      </figure>
                      <h3
                        style={{ marginTop: "20px" }}
                        className="cat-block-title"
                      >
                        {category}
                      </h3>
                    </Link>
                  </div>
                );
              })}
            {/* <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="assets/images/demos/demo-13/cats/1.jpg"
                      alt="Category image"
                    />
                  </span>
                </figure>

                <h3 className="cat-block-title">Computer & Laptop</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="assets/images/demos/demo-13/cats/2.jpg"
                      alt="Category image"
                    />
                  </span>
                </figure>

                <h3 className="cat-block-title">Lighting</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="assets/images/demos/demo-13/cats/3.jpg"
                      alt="Category image"
                    />
                  </span>
                </figure>

                <h3 className="cat-block-title">Smart Phones</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="assets/images/demos/demo-13/cats/4.jpg"
                      alt="Category image"
                    />
                  </span>
                </figure>

                <h3 className="cat-block-title">Televisions</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="assets/images/demos/demo-13/cats/5.jpg"
                      alt="Category image"
                    />
                  </span>
                </figure>

                <h3 className="cat-block-title">Cooking</h3>
              </a>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="assets/images/demos/demo-13/cats/6.jpg"
                      alt="Category image"
                    />
                  </span>
                </figure>

                <h3 className="cat-block-title">Furniture</h3>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularcategories;
