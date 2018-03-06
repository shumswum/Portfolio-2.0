import React from "react";
import { Element } from "react-scroll";
import { Link } from 'react-router-dom';

export default function Portfolio(props) {
  return (
    <Element name="portfolio">
      <div className="portfolio">
        <h1 className="header-font">Portfolio</h1>
        <h2 className="portfolio-text">
          I have built many full stack applications that prove my skill set as a
          front end developer. I enjoy working on personal projects exploring
          new technologies and learning new tricks.
        </h2>
        <div className="port-top">
          <div className="teletype">
            <img className="port-image" src="teletype.png" alt="vstda" />
            <div className="shift-left">
              <p className="black-text card-margin">
                <strong>Orgin Teletype:</strong>
              </p>
              <p className="black-text card-margin">
                Allows students to collaborate using Windows Monaco text editor.
              </p>
              <div>
                <Link className="card-button black-text card-margin" to="/more/0">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="mealhouse">
            <img className="port-image" src="mealhouse.jpg" alt=" teletype" />
            <div className="shift-left">
              <p className="black-text card-margin">
                <strong>Mealhouse:</strong>
              </p>
              <p className="black-text card-margin">
                Grubhub clone used by searching for near by restaurants.
              </p>
              <div>
              <Link className="card-button black-text card-margin" to="/more/1">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="port-bottom">
          <div className="vehicle">
            <img className="port-image" src="vehicle.png" alt="vstda" />
            <div className="shift-left">
              <p className="black-text card-margin">
                <strong>Vehicle Manager:</strong>
              </p>
              <p className="black-text card-margin">
                Inventory app for a dealership.
              </p>
              <div>
              <Link className="card-button black-text card-margin" to="/more/2">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="vstda">
            <img className="port-image" src="vstda.png" alt=" teletype" />
            <div className="shift-left">
              <p className="black-text card-margin">
                <strong>Very Simple Todo List:</strong>
              </p>
              <p className="black-text card-margin">
                Todo app for keeping track of todos.
              </p>
              <div>
              <Link className="card-button black-text card-margin" to="/more/3">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
