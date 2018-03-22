import React from "react";
import { Element } from "react-scroll";

export default function Skills(props) {
  return (
    <Element name="skills">
      <div className="skills cf">
        <h1 className="header-font">Skills</h1>
        <h2 className="normal-text">
          I keep up to date with the latest technologies so I can build faster,
          more reliable, and forward-thinking applications for companies like
          yours.
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
  );
}
