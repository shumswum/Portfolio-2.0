import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default class LearnMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: "",
      me: "",
      image: "",
      description: ""
    };
  }

  render() {
    return (
      <div>
        <nav className="more-nav">
          <Link className="more-nav-link" to="/">
            Go Back
          </Link>
        </nav>
        <h1 className="more-title">Origin Teletype</h1>
        <div className="more-content-center">
        <div className="more-content">
          <div className="more-flex">
          <div className="more-image more-flex">
          </div>
          <div className="more-para">
            <p>
              <strong>Description:</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, nonumy oportere democritum per at.
              Consul postea persecuti no est. No eros definitionem est. Vix at
              dictas periculis incorrupte, eu admodum accusamus vim, nec movet
              oratio inimicus ad. Eum ut epicuri phaedrum, ne elitr saepe
              nostrud quo. Vide nobis rationibus mel te, ubique definitiones ne
              quo.
            </p>
            <p>
              <strong>My Job:</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, nonumy oportere democritum per at.
              Consul postea persecuti no est. No eros definitionem est. Vix at
              dictas periculis incorrupte, eu admodum accusamus vim, nec movet
              oratio inimicus ad. Eum ut epicuri phaedrum, ne elitr saepe
              nostrud quo. Vide nobis rationibus mel te, ubique definitiones ne
              quo.
            </p>
            <a className="card-button black-text card-margin more-image-link" href="#">Demo</a>
            </div>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
