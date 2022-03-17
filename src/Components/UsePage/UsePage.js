import React from "react";
import "./UsePage.css";
import image1 from "./../../assets/image1.jpeg";
import image2 from "./../../assets/image2.jpeg";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.jpeg";
import StarRating from "../Star/StarRating";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function UsePage() {
  return (
    <div className="usePage">
      <div className="usePage-container">
        <div className="usePage-row">
          <div className="usePage-row-image">
            <img src={image1} alt="#" />
          </div>
          <div className="usePage-row-text">
            <h3>Step 1</h3>
            <p>
              First navigate to the tiffin section on the bottom navigator and
              choose your weekdays.
            </p>
          </div>
        </div>
        <div className="usePage-row">
          <div className="usePage-row-image">
            <img src={image2} alt="#" />
          </div>
          <div className="usePage-row-text">
            <h3>Step 2</h3>
            <p>
              Choose how many times in a day you want the meal, and click on pay
              to move ahead.
            </p>
          </div>
        </div>
      </div>
      <div className="usePage-container">
        <div className="usePage-row">
          <div className="usePage-row-image">
            <img src={image3} alt="#" />
          </div>
          <div className="usePage-row-text">
            <h3>Step 3</h3>
            <p>
              This is a confirmation of your subscription plan. Now let's find
              something to eat.
            </p>
          </div>
        </div>
        <div className="usePage-row">
          <div className="usePage-row-image">
            <img src={image4} alt="#" />
          </div>
          <div className="usePage-row-text">
            <h3>Step 4</h3>
            <p>
              Choose from a wide range of tiffin services available here,
              delivering happiness to your doorsteps.
            </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner-container">
          <h1>What are you waiting for?</h1>
          <Button
            type="button"
            className="banner-button"
            endIcon={<ChevronRightIcon />}
            variant="outlined"
          >
            Experience it now
          </Button>
        </div>
      </div>

      <div className="question">
        <h1>What do you think of this idea?</h1>
        <StarRating />
        <div className="question-field">
          <TextField
            id="outlined-basic"
            label="Email If You Want To Talk"
            variant="outlined"
          />
          <div className="space"></div>
          <TextField
            id="outlined-multiline-static"
            label="What did you love about this idea?"
            multiline
            rows={4}
          />
        </div>
      </div>
      <div class="question-button">
        <a href="https://tally.so/forms/mJvoJm/edit" target="_blank">
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            Rate this idea
          </Button>
        </a>
      </div>
    </div>
  );
}

export default UsePage;
