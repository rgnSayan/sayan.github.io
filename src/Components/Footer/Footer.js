import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
          alt=""
        />
        <div className="footer-dropdown">
          <select>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="france">France</option>
          </select>
          <select>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-row">
          <h3>COMPANY</h3>
          <span>Who We Are</span>
          <span>Blogs</span>
          <span>Careers</span>
          <span>Report Fraud</span>
          <span>Contact</span>
          <span>Invester Relations</span>
        </div>
        <div className="footer-bottom-row">
          <h3>FOR FOODIES</h3>
          <span>Code Of Conduct</span>
          <span>Community</span>
          <span>Blogger Help</span>
          <span>Mobile Apps</span>
        </div>
        <div className="footer-bottom-row">
          <h3>FOR RESTAURANTS</h3>
          <span>Add restaurants</span>
          <div className="footer-bottom-row-sub">
            <h3>FOR ENTERPRISES</h3>
            <span>Zomato For Work</span>
          </div>
        </div>
        <div className="footer-bottom-row">
          <h3>FOR YOU</h3>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Security</span>
          <span>Site Maps</span>
        </div>
        <div className="footer-bottom-row">
          <h3>SOCIAL LINKS</h3>
          <div className="social-links">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
          <div className="social-button">
            <Button variant="contained" startIcon={<AppleIcon />}>
              App Store
            </Button>
            <Button variant="contained" startIcon={<PlayArrowIcon />}>
              Play Store
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-note">
        <p>
          The landing page is a part of my graduation project - APM Fellowship
          by NextLeap.
        </p>
      </div>
    </div>
  );
}

export default Footer;
