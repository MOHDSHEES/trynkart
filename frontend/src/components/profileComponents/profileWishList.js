import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../actions/itemsDataActions";
import formatter from "../functions/formatter";
// import { addToWishlist } from "../actions/itemsDataActions";
// import { formatter } from "./scroll";

function ProfileWishList(props) {
  // const wishlistItem = useSelector((state) => state.wishlistItems);
  // const { items: wishlist } = wishlistItem;
  // const [items, setitems] = useState(wishlist);
  const dispatch = useDispatch();
  function WishlistHandle(itemId) {
    // setitems(items.filter((item) => item._id !== itemId));
    dispatch(addToWishlist(itemId, props.userId));
  }
  const wishlistDetails = useSelector((state) => state.addToWishlist);
  const { wishlist: items } = wishlistDetails;

  // const wishlistIte = useSelector((state) => state.addToWishlist);
  // const { wishlist: item, loading, error } = wishlistIte;

  // useEffect(() => {
  //   dispatch(wishlistItems(props.userId));
  // }, [dispatch, props.userId]);

  return (
    <div
      className="profile-right profile-right-close animation slideIn "
      id="profile-wishlist"
    >
      <p className="profile-info">My Wishlist</p>
      {items && items.length ? (
        items.map((item) => (
          <div key={item.id}>
            <div className="cart-items wishlist-border borders">
              <Link
                id="items-section-anchor"
                to={"/product/" + item.category + "/" + item.id}
              >
                <div className="cart-item-image wishlist-img">
                  <img src={item.productImg[0]} alt="Laptop" />
                </div>
              </Link>
              <div className="cart-item-details">
                <div className="btn-group wishlist-btn-div">
                  <button
                    type="button"
                    className="address-btn wishlist-trash-btn"
                    // style={{
                    //   color: "#bfbfbf",
                    //   fontSize: "1.4rem",
                    //   marginTop: "-10px",
                    // }}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => WishlistHandle(item.id)}
                  >
                    {/* <i className="fas fa-trash"></i> */}
                    <span id="trash" />
                  </button>
                </div>
                <Link
                  id="items-section-anchor"
                  to={"/product/" + item.category + "/" + item.id}
                >
                  <div className="cart-item-name">
                    {/* <p>{item.name}</p> */}
                    <p>
                      {item.displayinfo
                        ? item.displayinfo
                        : item.name +
                          " " +
                          item.brand +
                          " " +
                          item.category +
                          " " +
                          items.subCategory +
                          " " +
                          (item.colors && item.colors[0])}
                    </p>
                  </div>
                </Link>
                <div className="cart-item-price">
                  <p className="sansarif">
                    {" "}
                    {item.sellingPrice
                      ? formatter.format(item.sellingPrice)
                      : formatter.format(
                          Math.ceil(
                            item.original_price -
                              (item.original_price * item.off) / 100
                          )
                        )}
                    <span
                      style={{ marginLeft: "10px" }}
                      className="items-price-org price-org"
                    >
                      {formatter.format(item.original_price)}
                    </span>
                    <span className="items-price-off price-org">
                      {item.off ||
                        (
                          ((item.original_price - item.sellingPrice) * 100) /
                          item.original_price
                        ).toFixed(1)}
                      % off
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ marginBottom: "20px", fontWeight: "400" }}>
          No Item in Wishlist...
        </div>
      )}
    </div>
  );
}
export default ProfileWishList;
