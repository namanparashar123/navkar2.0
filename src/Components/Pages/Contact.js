import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7z1je43",
        "template_8537wwk",
        form.current,
        "9PXsVjAsRO9sllR__"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <p className="contact_content">
        Weather you are a customer, driver or a potential client, reach
        out if you have any questions or feedback for us!
      </p>
      <form className="mainForm" ref={form} onSubmit={sendEmail}>
        <div className="formWord">
          <input
            className="input100"
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />
          <br />
          <input
            className="input100"
            type="text"
            name="user_phone"
            placeholder="Phone  (optional)"
          />
          <br />
          <input
            className="input100"
            type="text"
            name="user_email"
            placeholder="Email"
            required
          />
          <br />
        </div>
        <div className="formMessage">
          <textarea
            className="input100"
            name="message"
            placeholder="Your Message..."
            required
          ></textarea>
          <br />
          <button type="submit" className="submitBtn">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
