import React from "react";
import Visibility from "react-on-screen";
import { Element } from "react-scroll";
import Scroll from 'react-scroll';
import Nav from "./Nav";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    if(e.target.id === "arrow" || e.target.id === "about") {
      Scroll.scroller.scrollTo("about", {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: "",
        offset: -70
      });
    } else {
      Scroll.scroller.scrollTo(e.target.id, {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: "",
        offset: -80
      });
    }
  }

  render() {
    var visible = "nav-hidden";
    return (
      <Visibility partialVisibility>
        {({ isVisible }) => {
          isVisible ? (visible = "nav-hidden") : (visible = "");
          return (
            <div>
              <Nav isVisible={visible} scrolling={this.handleScroll} />
              <Element name="home">
                <div className="landing">
                  <div className="name-container">
                    <h1 className="my-name">I'm Christopher Stevens</h1>
                    <h3 className="name-moto">
                      Passionately building challenging applications
                    </h3>
                  </div>
                  <div className="arrow" name="about">
                    <i
                      id="arrow"
                      onClick={this.handleScroll}
                      className="fa fa-arrow-circle-down"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Element>
            </div>
          );
        }}
      </Visibility>
    );
  }
}
