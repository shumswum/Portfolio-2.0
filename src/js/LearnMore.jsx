import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import data from "./data.json";

export default class LearnMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tech: "",
      job: "",
      demo: "",
      desc: ""
    };
  }

  componentWillMount() {
    console.log(this.props);
    let index = this.props.match.params.id;
    this.setState({
      tech: data[index].tech,
      job: data[index].job,
      demo: data[index].demo,
      desc: data[index].desc
    });
  }

  render() {
    return (
      <div>
        <nav className="more-nav">
          <Link className="more-nav-link" to="/">
            Home
          </Link>
        </nav>
        <h1 className="more-title">Origin Teletype</h1>
        <div className="more-content-center">
          <div className="more-content">
            <div className="more-flex">
              <div className="more-image more-flex" />
              <div className="more-para">
                <p className="more-text">
                  <strong>Description:</strong>
                </p>
                <p className="more-text">{this.state.desc}</p>
                <p className="more-text">
                  <strong>Technology:</strong>
                </p>
                <p className="more-text">{this.state.tech}</p>
                <p className="more-text">
                  <strong>My Job:</strong>
                </p>
                <p className="more-text">{this.state.job}</p>
                <a
                  className="card-button black-text card-margin more-image-link"
                  href={this.state.demo}
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
