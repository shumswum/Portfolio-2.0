import React from "react";
import { Element } from "react-scroll";

export default function About(props) {
  return (
    <Element name="about">
      <div className="about">
        <h1 className="header-font">About me</h1>
        <h2 className="normal-text">
          I'm a full stack engineer focused on the front end with experience in
          popular tools like React. I have a passion for learning and enjoy
          tackling complex problems.
        </h2>
        <img
          className="origin-logo"
          src="https://www.xconomy.com/wordpress/wp-content/images/2015/08/Origin-Code-Academy-2015-Logo-e1440475965874.jpg"
          alt="Origin Code Academy logo"
        />
      </div>
    </Element>
  );
}
