import React from "react";
import "./UsePage.css";
import image1 from "./../../assets/image1.jpg";
import image2 from "./../../assets/image2.jpg";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.jpeg";
import StarRating from "../Star/StarRating";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

function UsePage() {
  return (
    <div className="usePage">
      <h3>how to use zomato</h3>
      <div className="usePage-container">
        <div className="usePage-row">
          <div className="usePage-row-image">
            <img src={image1} alt="#" />
          </div>
          <div className="usePage-row-text">
            <h3>Step 1</h3>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
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
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
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
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
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
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
          </div>
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
        <Button variant="contained" endIcon={<ArrowForwardIcon />}>
          Rate this idea
        </Button>
        <div class="tally">
          <img src="https://tally.so/images/logo.png" />
          <span>Made With Tally</span>
        </div>
      </div>
    </div>
  );
}

export default UsePage;
