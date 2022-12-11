import React from "react";

const Contactaccordian = () => {
  return (
    <div>
      <h5 class=" mb-2 mt-5">Help with Other Issues </h5>
      <div class="row">
        {/* <div class="col-md-6"> */}
        <div class="accordion" id="accordion-1" style={{ width: "100%" }}>
          <div class="card">
            <div class="card-header" id="heading-1">
              <h2 class="card-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapse-1"
                  aria-expanded="true"
                  aria-controls="collapse-1"
                >
                  How to track Order ?
                </a>
              </h2>
            </div>
            <div
              id="collapse-1"
              class="collapse show"
              aria-labelledby="heading-1"
              data-parent="#accordion-1"
            >
              <div class="card-body">
                Go to My Orders in your TryNcart account to track and find your
                package. You can track the location of your package by entering
                your tracking ID. You can get order details just by clicking on
                the order in My order section.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="heading-2">
              <h2 class="card-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  href="#collapse-2"
                  aria-expanded="false"
                  aria-controls="collapse-2"
                >
                  Help with Return and Refund ?
                </a>
              </h2>
            </div>
            <div
              id="collapse-2"
              class="collapse"
              aria-labelledby="heading-2"
              data-parent="#accordion-1"
            >
              <div class="card-body">
                Place a return request in the My Orders page. You will get an
                option to choose refund/replace/exchange as per our return
                policy.In case of cash on delivery, you will have to provide a
                bank account number for the refund. For replacement/exchange,
                you will be given an alternate product for the returned product.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="heading-3">
              <h2 class="card-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  href="#collapse-3"
                  aria-expanded="false"
                  aria-controls="collapse-3"
                >
                  Help with Payment ?
                </a>
              </h2>
            </div>
            <div
              id="collapse-3"
              class="collapse"
              aria-labelledby="heading-3"
              data-parent="#accordion-1"
            >
              <div class="card-body">
                You can specify a card label at the time of saving a card on
                TryNcart through the 'My Account' section. You can also add/edit
                the label anytime through 'My Saved Cards' in the 'My Account'
                section on TryNcart.
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contactaccordian;
