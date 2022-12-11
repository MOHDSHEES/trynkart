import react from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CategorySkeleton() {
  return (
    <div class="product-details-top mb-2">
      <div class="row">
        <div class="col-md-6">
          <div class="product-gallery product-gallery-vertical">
            <div class="row align-items-start">
              <div className="category-skeleton-img">
                <Skeleton
                  baseColor="#cdcbcb"
                  highlightColor="#e6e5e5"
                  // width={window.screen.width < 775 ? 280 : 490}
                  height={400}
                  duration={2}
                />
              </div>
              <div
                style={{ paddingLeft: "15px" }}
                id="product-zoom-gallery "
                class="product-image-gallery scrollbar"
              >
                <p style={{ background: "white" }} class="product-gallery-item">
                  <Skeleton
                    baseColor="#cdcbcb"
                    highlightColor="#e6e5e5"
                    width={90}
                    height={100}
                    duration={2}
                  />
                </p>

                <p style={{ background: "white" }} class="product-gallery-item">
                  <Skeleton
                    baseColor="#cdcbcb"
                    highlightColor="#e6e5e5"
                    width={90}
                    height={100}
                    duration={2}
                  />
                </p>
                {/* <img src={img} alt="product side" /> */}
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="product-details product-details-centered">
            <h1 class="product-title">
              <div style={{ marginTop: "8px", paddingLeft: "10px" }}>
                <Skeleton
                  baseColor="#cdcbcb"
                  highlightColor="#e6e5e5"
                  //   width={100}
                  height={100}
                  duration={2}
                />
              </div>
              {/* {items.displayinfo} */}
            </h1>

            <div class="ratings-container">
              <div class="ratings">
                <div class="ratings-val" style={{ width: "0" }}></div>
              </div>
            </div>

            <div class="product-price sansarif">
              <Skeleton
                baseColor="#cdcbcb"
                highlightColor="#e6e5e5"
                width={200}
                height={25}
                duration={2}
              />
            </div>

            <div class="details-filter-row details-row-size">
              <label>
                {" "}
                <Skeleton
                  baseColor="#cdcbcb"
                  highlightColor="#e6e5e5"
                  width={50}
                  duration={2}
                />
              </label>

              <div class="product-nav product-nav-dots">
                {/* <a
                  href="#!"
                  style={{
                    background: "#cccccc",
                  }}
                ></a> */}
              </div>
            </div>

            <div class="product-details-action">
              <div class="details-action-col">
                <label>
                  {" "}
                  <Skeleton
                    baseColor="#cdcbcb"
                    highlightColor="#e6e5e5"
                    width={50}
                    duration={2}
                  />
                </label>
                <div class="product-details-quantity">
                  <Skeleton
                    baseColor="#cdcbcb"
                    highlightColor="#e6e5e5"
                    width={100}
                    height={40}
                    duration={2}
                  />
                </div>

                <Skeleton
                  baseColor="#cdcbcb"
                  highlightColor="#e6e5e5"
                  width={160}
                  height={40}
                  duration={2}
                />
              </div>

              <div class="details-action-wrapper">
                <a
                  style={{
                    color: "#cccccc",
                  }}
                  href="#!"
                  class="btn-product btn-wishlist"
                  title="Wishlist"
                >
                  <span>
                    <Skeleton
                      baseColor="#cdcbcb"
                      highlightColor="#e6e5e5"
                      width={100}
                      duration={2}
                    />
                  </span>
                </a>
                <a href="#!" class="btn-product" title="Compare">
                  <i
                    style={{
                      marginRight: "10px",
                      fontSize: "15px",
                      color: "#cccccc",
                    }}
                    class="fas fa-shopping-cart"
                  ></i>
                  <span>
                    <Skeleton
                      baseColor="#cdcbcb"
                      highlightColor="#e6e5e5"
                      width={100}
                      duration={2}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySkeleton;
