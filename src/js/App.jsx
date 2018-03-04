import React from "react";
import ReactDOM from "react-dom";
import Scroll from "react-scroll";
import { Element } from "react-scroll";
import Visibility from "react-on-screen";
import Nav from "./Nav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeVisible: true,
      visbilityClass: "nav-hidden",
      hidden: true,
      edge: "current"
    };

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
      <div>
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
                    <div className="arrow" name="about" >
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
        <Element name="about">
        <div className="about">
          <h1 className="header-font">About me</h1>
          <h2 className="normal-text">
            I'm a full stack engineer focused on the front end with experience
            in popular tools like React. I have a passion for learning and enjoy
            tackling complex problems.
          </h2>
          <img
            src="https://www.xconomy.com/wordpress/wp-content/images/2015/08/Origin-Code-Academy-2015-Logo-e1440475965874.jpg"
            alt="Origin Code Academy logo"
          />
        </div>
        </Element>
        <Element name="skills">
        <div className="skills cf">
          <h1 className="header-font">Skills</h1>
          <h2 className="normal-text">
            I keep up to date with the latest technologies so I can build
            faster, more reliable and forward-thinking applications for
            companies like yours.
          </h2>
          <div className="skill-divs skill-float">
            <div className="skill-float">
              <div className="react">
                <img
                  className="skill-style"
                  src="http://shockjs.github.io/reactjs.svg"
                  alt="react logo"
                />
                <h2 className="skill-text">
                  <strong>React</strong>
                </h2>
              </div>
              <div className="nodejs">
                <img
                  className="skill-style"
                  src="https://findicons.com/files/icons/2773/pictonic_free/256/prog_nodejs01.png"
                  alt="node.js logo"
                />
                <h2 className="skill-text">
                  <strong>Node.js</strong>
                </h2>
              </div>
            </div>
            <div className="skill-float">
              <div className="html5">
                <img
                  className="skill-style"
                  src="https://image.freepik.com/free-icon/html-5-logo_318-40745.jpg"
                  alt="html5 logo"
                />
                <h2 className="skill-text">
                  <strong>HTML5</strong>
                </h2>
              </div>
              <div className="css3">
                <img
                  className="skill-style"
                  src="https://png.icons8.com/ios/540//css3.png"
                  alt="css3 logo"
                />
                <h2 className="skill-text">
                  <strong>CSS3</strong>
                </h2>
              </div>
            </div>
            <div className="skill-float">
              <div className="javascript">
                <img
                  className="skill-style"
                  src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-256.png"
                  alt="Javascript logo"
                />
                <h2 className="skill-text">
                  <strong>Javascript</strong>
                </h2>
              </div>
              <div className="jquery">
                <img
                  className="skill-style"
                  src="http://2njuo0127lyi2l7tht396sih-wpengine.netdna-ssl.com/wp-content/uploads/2013/12/jquery-1024-black-300x300.png"
                  alt="jQuery logo"
                />
                <h2 className="skill-text">
                  <strong>JQuery</strong>
                </h2>
              </div>
            </div>
            <div className="skill-float">
              <div className="mongodb">
                <img
                  className="skill-style"
                  src="https://www.worksonarm.com/wp-content/uploads/2017/08/MongoDB-logo.png"
                  alt="mongoDB logo"
                />
                <h2 className="skill-text">
                  <strong>MongoDB</strong>
                </h2>
              </div>
              <div className="sql">
                <img
                  className="skill-style"
                  src="https://image.freepik.com/free-icon/sql-file-format-symbol_318-45406.jpg"
                  alt="SQL logo"
                />
                <h2 className="skill-text">
                  <strong>SQL</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
        </Element>
        <Element name="portfolio">
        <div className="portfolio">
          <h1 className="header-font">Portfolio</h1>
          <h2 className="portfolio-text">
            I have built many full stack applications that prove my skill set as
            a front end developer. I enjoy working on personal projects
            exploring new technologies and learning new tricks.
          </h2>
          <div className="port-top">
            <div className="teletype">
              <a
                className="image-link"
                href="https://oca-teletype.herokuapp.com/"
              >
                <img className="port-image" src="teletype.png" alt="vstda" />
              </a>
              <div className="shift-left">
                <p className="black-text"><strong>Orgin Teletype:</strong></p>
                <p className="black-text">
                  Allows students to collaborate using Windows Monaco text editor.
                </p>
                <div>
                  <a className="card-button black-text" href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="mealhouse">
              <a className="image-link" href="http://mealhouse.herokuapp.com/">
                <img
                  className="port-image"
                  src="mealhouse.jpg"
                  alt=" teletype"
                />
              </a>
            </div>
          </div>
          <div className="port-bottom">
            <div className="vehicle">
              <a
                className="image-link"
                href="https://crs-vehicle-manager.herokuapp.com/"
              >
                <img className="port-image" src="vehicle.png" alt="vstda" />
              </a>
            </div>
            <div className="vstda">
              <a
                className="image-link"
                href="https://crs-startnow-react100-vstda.herokuapp.com/"
              >
                <img className="port-image" src="vstda.png" alt=" teletype" />
              </a>
            </div>
          </div>
        </div>
        </Element>
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
      </div>
    );
  }
}

export default App;
