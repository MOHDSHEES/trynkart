import React from "react";
import { Link } from "react-router-dom";
import Categorybanner from "./categoryComponents/categorybanner";
const Faq = () => {
  return (
    <main class="main">
      <Categorybanner name="F.A.Q" />
      <div class="page-content mt-2">
        <div class="container">
          <h2 class="title text-center mb-3">Shipping Information</h2>
          <div class="accordion accordion-rounded" id="accordion-1">
            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading-1">
                <h2 class="card-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    href="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    How will my parcel be delivered?
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
                  Once your order has been placed sucessfully. It will be
                  delivered typically in 7 working days on the address you
                  provided at the time of payment.
                  <br />
                  Once the order has been placed, you can not change the
                  delivery address.
                </div>
              </div>
            </div>

            <div class="card card-box card-sm bg-light">
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
                    Do I pay for delivery?
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
                  Usually for the products below Rs 50 you will be charged for
                  delivery. For the products above Rs 50, you may or may not be
                  charged for delivery. It totally depends on the seller. <br />
                  Delivery charges (if applicable) will be shown at the time of
                  payment.
                </div>
              </div>
            </div>

            {/* <div class="card card-box card-sm bg-light">
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
                    Will I be charged customs fees?
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
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                  viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis facilisis fermentum.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </div>
              </div>
            </div> */}

            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading-4">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    My item has become faulty
                  </a>
                </h2>
              </div>
              <div
                id="collapse-4"
                class="collapse"
                aria-labelledby="heading-4"
                data-parent="#accordion-1"
              >
                <div class="card-body">
                  If the Item you recieve is faulty, damaged or different, you
                  can replace it within 7 days from the time of purchase.
                </div>
              </div>
            </div>
          </div>

          <h2 class="title text-center mb-3">Orders and Returns</h2>
          <div class="accordion accordion-rounded" id="accordion-2">
            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading2-1">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse2-1"
                    aria-expanded="false"
                    aria-controls="collapse2-1"
                  >
                    Tracking my order
                  </a>
                </h2>
              </div>
              <div
                id="collapse2-1"
                class="collapse"
                aria-labelledby="heading2-1"
                data-parent="#accordion-2"
              >
                <div class="card-body">
                  Go to My Orders in your TryNcart account to track and find
                  your package. You can track the location of your package by
                  entering your tracking ID. You can get order details just by
                  clicking on the order in My order section.
                </div>
              </div>
            </div>

            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading2-2">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse2-2"
                    aria-expanded="false"
                    aria-controls="collapse2-2"
                  >
                    I haven’t received my order
                  </a>
                </h2>
              </div>
              <div
                id="collapse2-2"
                class="collapse"
                aria-labelledby="heading2-2"
                data-parent="#accordion-2"
              >
                <div class="card-body">
                  Usually your Item will be delivered in 7 working days. Go to
                  My Orders in your TryNcart account to track and find your
                  package. You can track the location of your package by
                  entering your tracking ID. You can get order details just by
                  clicking on the order in My order section. <br />
                  For more detials related to order or to raise queries go to "{" "}
                  <Link to="/contact">Contact Us </Link> " page.
                </div>
              </div>
            </div>

            {/* <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading2-3">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse2-3"
                    aria-expanded="false"
                    aria-controls="collapse2-3"
                  >
                    How can I return an item?
                  </a>
                </h2>
              </div>
              <div
                id="collapse2-3"
                class="collapse"
                aria-labelledby="heading2-3"
                data-parent="#accordion-2"
              >
                <div class="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                  viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis facilisis fermentum.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </div>
              </div>
            </div> */}
          </div>

          <h2 class="title text-center mb-3">Payments</h2>
          <div class="accordion accordion-rounded" id="accordion-3">
            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading3-1">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-1"
                    aria-expanded="false"
                    aria-controls="collapse3-1"
                  >
                    What payment types can I use?
                  </a>
                </h2>
              </div>
              <div
                id="collapse3-1"
                class="collapse"
                aria-labelledby="heading3-1"
                data-parent="#accordion-3"
              >
                <div class="card-body">
                  We support various online Payments methods from Debit and
                  Credit cards to UPI and Wallets.
                  <br />
                  Cash on delivery is not supported for now.
                </div>
              </div>
            </div>

            {/* <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading3-2">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-2"
                    aria-expanded="false"
                    aria-controls="collapse3-2"
                  >
                    Can I pay by Gift Card?
                  </a>
                </h2>
              </div>
              <div
                id="collapse3-2"
                class="collapse"
                aria-labelledby="heading3-2"
                data-parent="#accordion-3"
              >
                <div class="card-body">
                  Ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                  odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                  turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Donec odio. Quisque volutpat mattis eros.
                </div>
              </div>
            </div>

            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading3-3">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-3"
                    aria-expanded="false"
                    aria-controls="collapse3-3"
                  >
                    I can't make a payment
                  </a>
                </h2>
              </div>
              <div
                id="collapse3-3"
                class="collapse"
                aria-labelledby="heading3-3"
                data-parent="#accordion-3"
              >
                <div class="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                  viverra non, semper suscipit, posuere a, pede. Donec nec justo
                  eget felis facilisis fermentum.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </div>
              </div>
            </div> */}

            <div class="card card-box card-sm bg-light">
              <div class="card-header" id="heading3-4">
                <h2 class="card-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse3-4"
                    aria-expanded="false"
                    aria-controls="collapse3-4"
                  >
                    Has my payment gone through?
                  </a>
                </h2>
              </div>
              <div
                id="collapse3-4"
                class="collapse"
                aria-labelledby="heading3-4"
                data-parent="#accordion-3"
              >
                <div class="card-body">
                  To check for the successful payment-
                  <br /> Go to Accounts - My Orders section <br />
                  Click for the respective order to see the order and payment
                  details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="cta cta-display bg-image pt-4 pb-4"
        style={{ backgroundImage: "url(/images/bg-7.jpg)" }}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9 col-xl-7">
              <div class="row no-gutters flex-column flex-sm-row align-items-sm-center">
                <div class="col">
                  <h3 class="cta-title text-white">
                    If You Have More Questions
                  </h3>
                  <p class="cta-desc text-white">Write To Us</p>
                </div>

                <div class="col-auto">
                  <Link to="/contact" class="btn btn-outline-white">
                    <span>CONTACT US</span>
                    <i class="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
