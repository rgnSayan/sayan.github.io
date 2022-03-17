import React from "react";
import "./WorkPage.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function WorkPage() {
  return (
    <div className="workPage-container">
      <div className="workPage-heading">
        <h2>Looking for something healthier,tasty and fresh?</h2>
        <p>
          You are in the right place now, introducing the all new tiffin service
          at zomato. Eat what is good not what looks good.
        </p>
        <div className="email-container">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "80ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="otlined-basicu" label="E-MAIL" variant="outlined" />
          </Box>
          <Button variant="contained">I'm Interested</Button>
        </div>
      </div>

      <div className="workPage-row">
        <div className="workPage-row-container">
          <img
            src="https://shareplm.com/wp-content/uploads/2020/02/Classroom-Training-1024x672.png"
            alt=""
          />
          <h3>Student/working professional</h3>
          <p>
            Too busy to cook or find it boring no worries we will take care of
            you, same homely taste + highly nutritious
          </p>
        </div>
        <div className="workPage-row-container">
          <img
            src="https://alltimemoving.ca/wp-content/uploads/2019/06/moving-services@2x.png"
            alt=""
            className="image-second"
          />
          <h3>Relocated/planning to relocate</h3>
          <p>New place, looking for home like food check this out.</p>
        </div>
        <div className="workPage-row-container">
          <img
            src="https://boldculturehub.com/wp-content/uploads/2020/03/CH-lol.png"
            alt=""
          />
          <h3> Looking for change?</h3>
          <p>
            Bored from self cooked food,canteen food this is the right place for
            you.
          </p>
        </div>
      </div>

      <div className="workPage">
        <h2>How it works</h2>
        <p>
          Get access to your fellow smallcase investors and build a strong
          community along with your smallcase manager
        </p>
      </div>
    </div>
  );
}

export default WorkPage;
