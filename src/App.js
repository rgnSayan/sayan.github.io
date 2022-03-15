import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import Review from "./Components/Review/Review";
import UsePage from "./Components/UsePage/UsePage";
import WorkPage from "./Components/WorkPage/WorkPage";
import ReactGA from "react-ga";

class App extends Component {
  setGA = () => {
    ReactGA.initialize("UA-xxxxxx-xx");
    ReactGA.pageview("Init page view");
  };
  componentDidMount() {
    this.setGA();
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
        <WorkPage />
        <UsePage />
        <Review />
        <Footer />
      </div>
    );
  }
}
export default App;
