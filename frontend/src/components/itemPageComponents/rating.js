import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveRating } from "../../actions/itemsDataActions";

const Rating = (props) => {
  const userDetail = useSelector((state) => state.loginCheck);
  const { user } = userDetail;
  const [stars, setstars] = useState("4");
  // const [item] = useState(props.item);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // const name = props.fname || props.lname || "Anonymous";

  const dispatch = useDispatch();
  //   saving rating and review
  function ratingSubmit(e) {
    e.preventDefault();
    if (
      window.confirm(
        stars +
          " ☆" +
          "\nTitle: " +
          title +
          "\nDescription: " +
          description +
          "\n\nPress Ok to save"
      )
    ) {
      if (user && user.user) {
        const us = user.user;
        window.$("#ratingModel").modal("hide");
        dispatch(
          saveRating(
            props.id,
            stars,
            title,
            description,
            us.fname || us.lname || "Anonymous"
          )
        );
      }
      reset();
      // settitle("");
      // setdescription("");
      // document.getElementById("ratingForm").reset();
    }
  }

  function reset() {
    settitle("");
    setdescription("");
    document.getElementById("ratingForm").reset();
  }

  return (
    <div>
      <div
        className="modal fade"
        id="ratingModel"
        // tabindex="-1"
        role="dialog"

        // aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content ">
            <div
              className="modal-header"
              style={{ alignItems: "center", padding: "1rem" }}
            >
              <h5 className="modal-title" id="exampleModalLabel">
                Rating and Review
              </h5>
              <button
                type="button"
                className="close button-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ fontWeight: "900" }}>
                  &times;
                </span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{ padding: "1rem", textAlign: "center" }}
            >
              <form onSubmit={ratingSubmit} id="ratingForm">
                <div className="form-group">
                  <h5 style={{ paddingTop: "10px" }}>Star rating </h5>
                  <div className="rating1">
                    <input
                      onClick={(e) => setstars(e.target.value)}
                      type="radio"
                      name="rating1"
                      value="5"
                      id="5"
                    />
                    <label htmlFor="5">☆</label>
                    <input
                      onClick={(e) => setstars(e.target.value)}
                      type="radio"
                      name="rating1"
                      value="4"
                      id="4"
                    />
                    <label htmlFor="4">☆</label>
                    <input
                      onClick={(e) => setstars(e.target.value)}
                      type="radio"
                      name="rating1"
                      value="3"
                      id="3"
                    />
                    <label htmlFor="3">☆</label>
                    <input
                      onClick={(e) => setstars(e.target.value)}
                      type="radio"
                      name="rating1"
                      value="2"
                      id="2"
                    />
                    <label htmlFor="2">☆</label>
                    <input
                      onClick={(e) => setstars(e.target.value)}
                      type="radio"
                      name="rating1"
                      value="1"
                      id="1"
                      //   checked
                    />
                    <label htmlFor="1">☆</label>
                  </div>
                </div>
                <h5>Review </h5>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    rows="4"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-dismiss="modal"
                    onClick={reset}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => ratingSubmit()}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
