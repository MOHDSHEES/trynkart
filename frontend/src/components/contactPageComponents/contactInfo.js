import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../actions/itemsDataActions";
import popup from "../functions/popup";

const Contactinfo = () => {
  const sendBtn = useRef();
  const usersInfo = useSelector((state) => state.loginCheck);
  const {
    user: { user },
  } = usersInfo;
  // state for button disable
  const [isdisable, setisdisable] = useState(false);
  const [State, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const Inputchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...State,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  function submithandler(e) {
    e.preventDefault();
    setisdisable(true);
    sendBtn.current.innerHTML = "Sending...";
    dispatch(sendEmail(State, user._id));
  }
  // sent email response
  const userDetail = useSelector((state) => state.emailSend);
  const { response, error } = userDetail;

  // error/sucess message and form resetting
  useEffect(() => {
    if (response) {
      setState({ name: "", email: "", subject: "", message: "" });
      setisdisable(false);
      sendBtn.current.innerHTML = "Send Message";
      popup({ title: response ? response.message : "" });
    } else if (error) {
      setisdisable(false);
      sendBtn.current.innerHTML = "Send Message";
      popup({ title: response ? response.message : "" });
    }
  }, [response, error]);

  return (
    <div className="row mt-5">
      <div class="col-lg-6 mb-2 mb-lg-0">
        <h2 class="title mb-1" style={{ textAlign: "center" }}>
          Contact Information
        </h2>
        <p class="mb-3">
          24x7 Customer Care Support- Once you log onto your TryNcart account,
          this page shows you your recent orders and let you report any issue.
          By clicking on the specific order, you can raise your query. It also
          has a chat option to ensure that your queries and issues are taken
          care of.
        </p>
        <div class="row">
          <div class="col-sm-7">
            <div class="contact-info">
              <h3>The Office</h3>

              <ul class="contact-list">
                <li>
                  <i class="fas fa-home "></i>
                  New Delhi, 24012, IND
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <a href="tel:#">+01 234 567 88</a>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:trynkart@gmail.com">trynkart@gmail.com.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-5">
            <div class="contact-info">
              <h3>The Office</h3>

              <ul class="contact-list">
                <li>
                  <i class="far fa-clock"></i>
                  <span class="text-dark">Monday-Saturday</span> <br />
                  11am-7pm IST
                </li>
                <li>
                  <i class="far fa-calendar"></i>
                  <span class="text-dark">Sunday</span> <br />
                  11am-6pm IST
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6" style={{ textAlign: "center" }}>
        <h2 class="title mb-1">Got Any Questions?</h2>
        <p class="mb-2">
          Use the form below to get in touch with the sales team
        </p>

        <form onSubmit={submithandler} class=" mb-3">
          <div class="row">
            <div class="col-sm-6">
              <label for="cname" class="sr-only">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="cname"
                placeholder="Name *"
                name="name"
                value={State.name}
                onChange={Inputchange}
                required
              />
            </div>

            <div class="col-sm-6">
              <label for="cemail" class="sr-only">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="cemail"
                placeholder="Email *"
                name="email"
                value={State.email}
                onChange={Inputchange}
                required
              />
            </div>
          </div>

          {/* <div class="row"> */}
          {/* <div class="col-sm-6">
              <label for="cphone" class="sr-only">
                Phone
              </label>
              <input
                type="tel"
                class="form-control"
                id="cphone"
                placeholder="Phone"
              />
            </div> */}

          {/* <div class="col-sm-6"> */}
          <label for="csubject" class="sr-only">
            Subject
          </label>
          <input
            type="text"
            class="form-control"
            id="csubject"
            placeholder="Subject"
            name="subject"
            value={State.subject}
            onChange={Inputchange}
          />
          {/* </div> */}
          {/* </div> */}

          <label for="cmessage" class="sr-only">
            Message
          </label>
          <textarea
            class="form-control"
            cols="30"
            rows="4"
            id="cmessage"
            required
            placeholder="Message *"
            name="message"
            value={State.message}
            onChange={Inputchange}
          ></textarea>

          <button
            type="submit"
            ref={sendBtn}
            disabled={isdisable}
            class="btn btn-primary btn-minwidth-sm"
          >
            <span>Send Message</span>
            <i class="icon-long-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactinfo;
