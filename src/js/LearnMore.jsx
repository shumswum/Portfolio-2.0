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
      desc: "",
      name: "",
      imageClass: ""
    };
  }

  componentWillMount() {
    let index = this.props.match.params.id;
    this.setState({
      tech: data[index].tech,
      job: data[index].job,
      demo: data[index].demo,
      desc: data[index].desc,
      name: data[index].name,
      imageClass: data[index].imageClass
    });
  }

  render() {
    return (
      <div>
        <nav className="more-nav">
          <Link className="more-nav-link" to="/">
            CS Portfolio
          </Link>
        </nav>
        <h1 className="more-title">{this.state.name}</h1>
        <div className="more-content-center">
          <div className="more-content">
            <div className="more-flex">
              <div className={`more-image more-flex ${this.state.imageClass}`} />
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
                  <strong>My Contribution:</strong>
                </p>
                <p className="more-text">{this.state.job}</p>
                <a
                  className="card-button black-text card-margin more-image-link"
                  href={this.state.demo}
                  target="_blank"
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
