import React from "react";
import { Element } from "react-scroll";

export default function Footer(props) {
  return (
    <footer className="footer">
      <a href="https://github.com/shumswum">
        <img
          className="footer-image"
          src="https://image.flaticon.com/icons/png/512/25/25231.png"
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/christopher-stevens-8a698a88/">
        <img
          className="footer-image"
          src="https://image.flaticon.com/icons/svg/61/61109.svg"
          alt="Linkedin"
        />
      </a>
    </footer>
  );
}
