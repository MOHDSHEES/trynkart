import React, { useState } from "react";
import { useSelector } from "react-redux";
import Rating from "./rating";

const Itemdescription = () => {
  const itemDetails = useSelector((state) => state.itemDetails);
  const { items, loading, error } = itemDetails;
  const [comments, setComments] = useState(3);
  const userDetail = useSelector((state) => state.loginCheck);
  const { user } = userDetail;

  function loadMore() {
    setComments(comments + 5);
  }
  function ratingHandle() {
    if (user && user.user) {
      window.$("#ratingModel").modal("show");
    } else window.$("#signin-modal").modal("show");
  }

  return (
    !loading && (
      <div class="product-details-tab">
        <ul class="nav nav-pills justify-content-center" role="tablist">
          {/* <li class="nav-item">
            <a
              class="nav-link active"
              id="product-desc-link"
              data-toggle="tab"
              href="#product-desc-tab"
              role="tab"
              aria-controls="product-desc-tab"
              aria-selected="true"
            >
              Description
            </a>
          </li> */}
          {/* <li class="nav-item">
            <a
              class="nav-link active"
              id="product-info-link"
              data-toggle="tab"
              href="#product-info-tab"
              role="tab"
              aria-controls="product-info-tab"
              aria-selected="false"
            >
              Additional information
            </a>
          </li> */}
          <li class="nav-item">
            <a
              class="nav-link"
              id="product-shipping-link"
              data-toggle="tab"
              href="#product-shipping-tab"
              role="tab"
              aria-controls="product-shipping-tab"
              aria-selected="false"
            >
              Shipping & Returns
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              id="product-review-link"
              data-toggle="tab"
              href="#product-review-tab"
              role="tab"
              aria-controls="product-review-tab"
              aria-selected="false"
            >
              Reviews ( {items.rating ? items.rating.length : 0} )
            </a>
          </li>
          <Rating id={items._id} />
          <li class="nav-item">
            <a
              class="nav-link"
              id="product-review-link"
              data-toggle="modal"
              onClick={ratingHandle}
              // data-target="#ratingModel"
              href="#!"
            >
              Rate Product
            </a>
          </li>
        </ul>
        <div class="tab-content">
          {/* <div
            class="tab-pane fade show active"
            id="product-desc-tab"
            role="tabpanel"
            aria-labelledby="product-desc-link"
          >
            <div class="product-desc-content">
              <h3>Product Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.{" "}
              </p>
              <ul>
                <li>
                  Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                  elit.{" "}
                </li>
                <li>Vivamus finibus vel mauris ut vehicula.</li>
                <li>
                  Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                </li>
              </ul>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.{" "}
              </p>
            </div>
          </div> */}
          {/* <div
            class="tab-pane fade show active"
            id="product-info-tab"
            role="tabpanel"
            aria-labelledby="product-info-link"
          >
            <div class="product-desc-content">
              <h3>Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci.{" "}
              </p>

              <h3>Fabric & care</h3>
              <ul>
                <li>Faux suede fabric</li>
                <li>Gold tone metal hoop handles.</li>
                <li>RI branding</li>
                <li>Snake print trim interior </li>
                <li>Adjustable cross body strap</li>
                <li>
                  {" "}
                  Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm
                </li>
              </ul>

              <h3>Size</h3>
              <p>one size</p>
            </div>
          </div> */}
          <div
            class="tab-pane fade"
            id="product-shipping-tab"
            role="tabpanel"
            aria-labelledby="product-shipping-link"
          >
            <div class="product-desc-content">
              <h3>Delivery & returns</h3>
              <p>
                We deliver to over 100 countries around the world. For full
                details of the delivery options we offer, please view our
                Delivery information.
                {/* <a href="#">Delivery information</a> */}
                <br />
                We hope you’ll love every purchase, but if you ever need to
                return an item you can do so within a month of receipt. For full
                details of how to make a return, please view our Return Policy.
                {/* <a href="#">Returns information</a> */}
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade show active"
            id="product-review-tab"
            role="tabpanel"
            aria-labelledby="product-review-link"
          >
            <div class="reviews">
              <h3>Reviews ( {items.rating ? items.rating.length : 0} )</h3>
              {items.rating && items.rating.length > 0 ? (
                <div>
                  {items.rating.slice(0, comments).map((rating, idx) => {
                    return (
                      <div class="review" key={idx}>
                        <div class="row no-gutters">
                          <div class="col-auto">
                            <h4>
                              <a href="#">{rating.name}</a>
                            </h4>
                            <div class="ratings-container">
                              <div class="ratings">
                                <div
                                  class="ratings-val"
                                  style={{ width: rating.stars * 20 + "%" }}
                                ></div>
                              </div>
                            </div>
                            <span class="review-date">{rating.date}</span>
                          </div>
                          <div class="col">
                            <h4>{rating.title}</h4>

                            <div class="review-content">
                              <p>{rating.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {items.rating && items.rating.length > comments && (
                    <div
                      style={{ marginBottom: "1rem" }}
                      class="more-container text-center mt-2"
                    >
                      <p
                        onClick={loadMore}
                        // href="blog.html"
                        // to=""
                        class="btn btn-outline-darker btn-more p-btn"
                      >
                        <span>Load more comments</span>
                        <i class="icon-refresh"></i>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h3>No Reviews Yet. </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Itemdescription;
