import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import Review from "./Components/Review/Review";
import UsePage from "./Components/UsePage/UsePage";
import WorkPage from "./Components/WorkPage/WorkPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <WorkPage />
      <UsePage />
      <Review />
      <Footer/>
    </div>
  );
}

export default App;
