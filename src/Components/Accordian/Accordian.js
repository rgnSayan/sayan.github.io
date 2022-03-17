import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";

function Accordian() {
  return (
    <div className="accordian-title">
      <h1>Frequently Asked Questions</h1>
      <div className="accordian">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Who is preparing my meal?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="answer">
              The food is prepared by local tiffin services under norms set up
              by zomato.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I change my delivery location?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="answer">
              Yes, choose your current location or customize the location, food
              will be delivered wherever you want.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What if I don't want to take a meal today?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="answer">
              You can check the status of the number of meals left for a month
              on your subscription setting page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              What if I don't want a subscription plan but experience this
              service?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="answer">
              Yes you can skip this subscription and directly order the food,
              but in that case there will be a difference in prices.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Accordian;
