import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Categorybanner from "./categoryComponents/categorybanner";
import Footer from "./footerComponents/footer";
import Navbar from "./navbarComponents/navbar";
import { useSelector, useDispatch } from "react-redux";
import formatter from "./functions/formatter";
import { addToCart, removeCartItem } from "../actions/itemsDataActions";
// import { cartItem } from "../actions/itemsDataActions";
// import Axios from "axios";

const Cart = (props) => {
  const [sellingprice, setsellingprice] = useState(0);
  const [mrp, setmrp] = useState(0);
  // const [mrp, setmrp] = useState(0);
  const cartItems = useSelector((state) => state.cartItems);
  const { items, loading, error, length } = cartItems;

  // console.log(items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items) {
      let total = 0;
      let sellprice = 0;
      // let id = [];
      items.map((c) => {
        total = total + c.original_price * c.cartqty;
        sellprice = sellprice + Math.ceil(c.sellingPrice * c.cartqty);
        // id.push(c._id);
        return 0;
      });
      // setids(id);
      setsellingprice(sellprice);
      setmrp(total);
    }
  }, [items]);

  const history = useHistory();
  function buyHandle(products) {
    history.push({ pathname: "/order/" + props.userId, state: products });
  }

  // async function test() {
  //   console.log("test");
  //   const { data } = await Axios.post("/api/products/catego");
  //   console.log(data);
  // }
  return (
    <div>
      <Navbar cart={true} />
      <Categorybanner name="Cart" />
      <main className="main">
        <div className="page-content">
          <div className="cart">
            <div className="container">
              {items && items.length > 0 ? (
                <div className="row">
                  <div className="col-lg-9">
                    <table className="table table-cart table-mobile">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>MRP</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {[...items].reverse().map((item, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="product-col">
                                <div className="product">
                                  <figure className="product-media">
                                    <Link
                                      to={
                                        "/product/" +
                                        item.category +
                                        "/" +
                                        item._id
                                      }
                                    >
                                      <img
                                        src={item.productImg[0]}
                                        alt="Product"
                                      />
                                    </Link>
                                  </figure>

                                  <h3 className="product-title">
                                    <Link
                                      to={
                                        "/product/" +
                                        item.category +
                                        "/" +
                                        item._id
                                      }
                                    >
                                      {item.displayinfo}
                                    </Link>
                                  </h3>
                                </div>
                              </td>
                              <td className="price-col sansarif">
                                {formatter.format(item.original_price)}
                              </td>

                              <td className="quantity-col">
                                <div className="cart-product-quantity">
                                  <select
                                    type="number"
                                    className="form-control"
                                    value={item.cartqty}
                                    onChange={(e) =>
                                      dispatch(
                                        addToCart(
                                          item._id,
                                          props.userId,
                                          item.productImg,
                                          item.name,
                                          item.original_price,
                                          item.sellingPrice || null,
                                          item.off,
                                          item.stock,
                                          item.displayinfo || "",
                                          item.sellerId,
                                          e.target.value
                                        )
                                      )
                                    }
                                    // min="1"
                                    // max={item.stock}
                                    // step="1"
                                    // data-decimals="0"
                                    required
                                  >
                                    {[...Array(item.stock).keys()].map((x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </td>
                              <td className="total-col sansarif">
                                {formatter.format(item.sellingPrice)}
                              </td>
                              <td className="remove-col">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      removeCartItem(item._id, props.userId)
                                    )
                                  }
                                  className="btn-remove"
                                >
                                  <i className="icon-close"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <aside className="col-lg-3">
                    <div className="summary summary-cart">
                      <h3 className="summary-title">Cart Total</h3>

                      <table className="table table-summary">
                        <tbody>
                          <tr className="summary-subtotal">
                            <td>Total:</td>
                            <td className="sansarif">
                              {" "}
                              {formatter.format(sellingprice)}
                            </td>
                          </tr>
                          <tr className="summary-shipping">
                            <td>Price Details:</td>
                            <td>&nbsp;</td>
                          </tr>

                          <tr className="summary-shipping-row">
                            <td>
                              <div
                                className="custom-control "
                                style={{ paddingLeft: 0 }}
                              >
                                Price ({items && items.length} items)
                              </div>
                            </td>
                            <td className="sansarif">
                              {" "}
                              {formatter.format(mrp)}
                            </td>
                          </tr>

                          <tr className="summary-shipping-row">
                            <td>
                              <div
                                className="custom-control "
                                style={{ paddingLeft: 0 }}
                              >
                                Discount:
                              </div>
                            </td>
                            <td className="sansarif">
                              {" "}
                              {formatter.format(mrp - sellingprice)}
                            </td>
                          </tr>

                          <tr className="summary-shipping-row">
                            <td>
                              <div
                                className="custom-control "
                                style={{ paddingLeft: 0 }}
                              >
                                {/* <input
                                type="radio"
                                id="express-shipping"
                                name="shipping"
                                className="custom-control-input"
                              /> */}
                                {/* <label
                                className="custom-control-label"
                                htmlFor="express-shipping"
                              > */}
                                Delivery charge:
                                {/* </label> */}
                              </div>
                            </td>
                            <td>Free</td>
                          </tr>

                          {/* <tr className="summary-shipping-estimate">
                          <td>
                            Estimate for Your Country
                            <br /> <a href="dashboard.html">Change address</a>
                          </td>
                          <td>&nbsp;</td>
                        </tr> */}

                          <tr className="summary-total">
                            <td>Total:</td>
                            <td className="sansarif">
                              {" "}
                              {formatter.format(sellingprice)}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <button
                        onClick={() => buyHandle(items)}
                        className="btn btn-success btn-order btn-block"
                      >
                        PROCEED TO CHECKOUT
                      </button>
                    </div>

                    {/* <a
                    href="category.html"
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh"></i>
                  </a> */}
                  </aside>
                </div>
              ) : (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  <h5>Your Cart is Empty.</h5>
                  <br />
                  <Link
                    to="/"
                    // style={{ marginTop: "20px" }}
                    className="btn btn-primary"
                  >
                    Shop Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
