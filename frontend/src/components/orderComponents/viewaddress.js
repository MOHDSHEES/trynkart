import React from "react";
import Axios from "axios";

function ViewAddressess(props) {
  const address = props.info && props.info;

  async function makeDefault(addId) {
    const id = address && address.filter((item) => item.default === true);
    const defaultId = (id.length && id[0]._id) || null;
    await Axios.post("/api/user/defaultaddress", {
      addId,
      defaultId,
      userId: props.userId,
    });
    window.location.reload();
  }
  return (
    <div>
      <div
        class="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        id="viewAddress"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Addressess
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {address && address.length != 0 ? (
                address.map((add) => (
                  <div
                    className="card address-card-container cart-items borders shadow hover-effect "
                    onClick={() => makeDefault(add._id)}
                    style={{
                      alignItems: "flex-start",
                      margin: "0 0 5px",
                      cursor: "pointer",
                    }}
                    key={add._id}
                  >
                    <div
                      className="card-body address-card-body "
                      style={{ padding: "20px 10px 5px 8px", width: "100%" }}
                    >
                      <div>
                        {add.name}{" "}
                        <span style={{ paddingLeft: "15px" }}>
                          {add.mobileno}
                        </span>
                        {add.alternatemobile && (
                          <span style={{ paddingLeft: "15px" }}>
                            {add.alternatemobile}
                          </span>
                        )}
                        {/* <span>
                          <div className="btn-group dropleft address-btn-div">
                            <button
                              type="button"
                              className="address-btn "
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              &#8942;
                            </button>
                            <div className="dropdown-menu ">
                              <p
                                className="dropdown-item address-edit"
                                data-toggle="modal"
                                data-target="#editAddress"
                                // href="#new-add-btn"
                                onClick={() => editAddress(add._id)}
                              >
                                Edit
                              </p>
                          
                            </div>
                          </div>
                        </span> */}
                      </div>
                    </div>

                    <div
                      className="card-body"
                      style={{ padding: "5px 10px 20px" }}
                    >
                      {add.address} , {add.locality}{" "}
                      {add.landmark ? "," + add.landmark : ""}, {add.city} ,{" "}
                      {add.district && add.district + ", "}
                      {add.state} - <b>{add.pincode}</b>.
                    </div>
                  </div>
                ))
              ) : (
                <div>No address added...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAddressess;
