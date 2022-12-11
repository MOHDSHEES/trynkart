import React from "react";

const Sidebarfilter = () => {
  function togglemenu() {
    document.body.classList.toggle("sidebar-filter-active");
  }

  return (
    <div>
      <div onClick={togglemenu} className="sidebar-filter-overlay"></div>
      <aside className="sidebar-shop sidebar-filter">
        <div className="sidebar-filter-wrapper">
          <div className="widget widget-clean">
            <label>
              <i onClick={togglemenu} className="icon-close"></i>Filters
            </label>
            <a href="#" className="sidebar-filter-clear">
              Clean All
            </a>
          </div>
          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-1"
                role="button"
                aria-expanded="true"
                aria-controls="widget-1"
              >
                Category
              </a>
            </h3>

            <div className="collapse show" id="widget-1">
              <div className="widget-body">
                <div className="filter-items filter-items-count">
                  <div className="filter-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cat-1"
                      />
                      <label className="custom-control-label" htmlFor="cat-1">
                        Dresses
                      </label>
                    </div>
                    <span className="item-count">3</span>
                  </div>

                  <div className="filter-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cat-2"
                      />
                      <label className="custom-control-label" htmlFor="cat-2">
                        T-shirts
                      </label>
                    </div>
                    <span className="item-count">0</span>
                  </div>

                  <div className="filter-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cat-8"
                      />
                      <label className="custom-control-label" htmlFor="cat-8">
                        Sportwear
                      </label>
                    </div>
                    <span className="item-count">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-2"
                role="button"
                aria-expanded="true"
                aria-controls="widget-2"
              >
                Size
              </a>
            </h3>

            <div className="collapse show" id="widget-2">
              <div className="widget-body">
                <div className="filter-items">
                  <div className="filter-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="size-1"
                      />
                      <label className="custom-control-label" htmlFor="size-1">
                        XS
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-3"
                role="button"
                aria-expanded="true"
                aria-controls="widget-3"
              >
                Colour
              </a>
            </h3>

            <div className="collapse show" id="widget-3">
              <div className="widget-body">
                <div className="filter-colors">
                  <a href="#" style={{ background: "#b87145" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a href="#" style={{ background: "#f0c04a" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a href="#" style={{ background: "#333333" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a
                    href="#"
                    className="selected"
                    style={{ background: "#cc3333" }}
                  >
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a href="#" style={{ background: "#3399cc" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a href="#" style={{ background: "#669933" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a href="#" style={{ background: "#f2719c" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                  <a href="#" style={{ background: "#ebebeb" }}>
                    <span className="sr-only">Color Name</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-4"
                role="button"
                aria-expanded="true"
                aria-controls="widget-4"
              >
                Brand
              </a>
            </h3>

            <div className="collapse show" id="widget-4">
              <div className="widget-body">
                <div className="filter-items">
                  <div className="filter-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="brand-1"
                      />
                      <label className="custom-control-label" htmlFor="brand-1">
                        Next
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebarfilter;
