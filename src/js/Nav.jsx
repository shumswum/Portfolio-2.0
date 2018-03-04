import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
          <nav className={`navbar ${this.props.isVisible}`}>
          <a id="home" onClick={this.props.scrolling} className="nav-link home-link">
            Home
          </a>
          <a onClick={this.props.scrolling} id="about" className="nav-link about-link">About</a>
          <a onClick={this.props.scrolling} id="skills" className="nav-link skills-link">Skills</a>
          <a onClick={this.props.scrolling} id="portfolio" className="nav-link portfolio-link">Portfolio</a>
          <a onClick={this.props.scrolling} id="contact" className="nav-link contact-link">Contact</a>
        </nav>
        );
    }
}