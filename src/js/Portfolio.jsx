import React from "react";
import { Element } from "react-scroll";
import { Link } from 'react-router-dom';

export default function Portfolio(props) {
  return (
    <Element name="portfolio">
      <div id="portfolio" className="portfolio">
        <h1 className="header-font">Portfolio</h1>
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
                Grubhub clone, to search for nearby restaurant.
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
                Inventory app for managing customers and vehicles.
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
                Todo app for keeping track of tasks.
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
