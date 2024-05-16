import React, { useState } from "react";
import "./Contact.scss"
import emailjs from "@emailjs/browser";


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const style = { marginTop: 150 };

  const initialFormData = {
    to_name: "sylvia",
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (response) => {
          setFormData(initialFormData);
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

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
        <form
          className="fs-4 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control contact__input"
              id="name"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <div class="invalid-feedback">Please enter a username.</div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control contact__input"
              id="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control contact__textarea"
              id="message"
              rows="3"
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-light btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
