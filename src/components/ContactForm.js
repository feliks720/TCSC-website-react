// src/components/ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "./emailJSDefinations";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setResponseMessage("Message Sent, We will get back to you shortly!");
        setIsError(false);
      },
      (error) => {
        setResponseMessage("An error occurred, Please try again");
        setIsError(true);
      }
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 1234 Main St, Anytown, USA
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> contact@provider.com
        </p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label className="contact-form-label">Name</label>
            <input
              className="contact-form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label">Email</label>
            <input
              className="contact-form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label">Message</label>
            <textarea
              className="contact-form-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="contact-form-button" type="submit">
            Send
          </button>
        </form>
        {responseMessage && (
          <p
            className={`contact-form-response ${
              isError ? "contact-form-error" : ""
            }`}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
