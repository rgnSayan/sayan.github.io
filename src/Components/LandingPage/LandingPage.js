import React from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import Button from "@mui/material/Button";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="landingPage-body">
        <div className="landingPage-body-title">
          <h1>Home made food now on Zomato</h1>
        </div>
        <div className="landingPage-body-text">
          <h4>
            Say goodbye to unhealthy eating habits and lets build a healthier
            generation together.
          </h4>
        </div>
        <div className="landingPage-button">
          <Button variant="contained">Order Now</Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
