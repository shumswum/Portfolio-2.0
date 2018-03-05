import React from "react";
import { Element } from "react-scroll";

export default function Contact(props) {
  return (
    <Element name="contact">
      <div className="contact">
        <h1 className="header-font">Contact Me</h1>
        <h2 className="portfolio-text">
          If you would like to contact me please fill out the fields below. I
          will contact you as soon as I can. Thank you!
        </h2>
        <form
          className="form"
          action="https://formspree.io/crsstevens1@gmail.com"
          method="post"
        >
          <div>
            <h4 className="form-labels">Your Name</h4>
            <input
              name="name"
              className="form-inputs input-height"
              type="text"
              name="name"
            />
          </div>
          <input type="hidden" name="_next" value="//crs-dev.com" />
          <div>
            <h4 className="form-labels">Your Email</h4>
            <input
              name="email"
              className="form-inputs input-height"
              type="text"
              name="name"
            />
          </div>
          <div>
            <h4 className="form-labels">Your Message</h4>
            <textarea
              name="message"
              className="form-inputs textarea"
              cols="30"
              rows="10"
            />
          </div>
          <div className="button">
            <input className="submit" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </Element>
  );
}
