import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <>
      <div className="contact-main">
        <h3>Contact Us</h3>
        <form>
          <input name="email" type="email" placeholder="Your email address" />
          <input
            name="PhoneNumber"
            type="text"
            placeholder="Your Phone Number"
          />
          <input name="message" type="text" placeholder="Your message here" />
          <div>
            <button type="submit" value="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
