import React from "react";
import "./Contact.scss"

const Contact = () => {
  const style = { marginTop: 150 };

  

  return (
    <div className="main-container contact__box">
      <h2 className="heading heading-sec heading-sec__mb-sm contact__heading">
        <span className="heading-sec__main heading-sec__main--lt" style={style}>
          Contact
        </span>
        <span className="heading-sec__sub heading-sec__sub--lt">
          Feel free to fill in the form with your messages!
        </span>
      </h2>

      <div className="contact__container">
        <form className="fs-4">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              NAME
            </label>
            <input
              type="text"
              className="form-control contact__input"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="form-control contact__input"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              MESSAGE
            </label>
            <textarea
              className="form-control contact__textarea"
              id="message"
              rows="3"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-dark btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
