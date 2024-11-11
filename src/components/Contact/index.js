import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form">
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              className="form-control"
              placeholder="Phone No."
              required
            />
          </div>
          <div className="form-row">
            <textarea
              className="form-control"
              placeholder="Message"
              rows={4}
              required
              defaultValue={""}
            />
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
