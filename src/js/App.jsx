import React from "react";
import Scroll from "react-scroll";
import { Element } from "react-scroll";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeVisible: true,
      visbilityClass: "nav-hidden",
      hidden: true,
      edge: "current"
    };
  }

  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
