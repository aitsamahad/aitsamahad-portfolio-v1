import React from "react";
import "../main.css";

const Contact = () => {
  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container">
        <div className="section-heading">
          <h1>Contact</h1>
          <h6>Let's Work Together!</h6>
        </div>
        <form action="" autoComplete="off">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="services">Services</label>
          <select name="service" id="service">
            <option value="Web Development">Web Development</option>
            <option value="Android Application">Android Application</option>
            <option value="iOS Application">iOS Application</option>
            <option value="Other" selected>
              Other
            </option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="10" rows="10"></textarea>
          <input type="submit" value="Shoot the message!" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
