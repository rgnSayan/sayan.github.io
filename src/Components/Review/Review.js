import React from "react";
import "./Review.css";

function Review() {
  return (
    <div className="review">
      <div className="review-container first">
        <div className="review-row feedback">
          <h4>FEEDBACK</h4>
          <h1>Here's what the early birds had to say 📢</h1>
          <p>
            Every opinion matters and we take our customers seriously. If you
            have anything to add, or just want to talk about slice, do contact
            us asap.
          </p>
        </div>
        <div className="review-row color-card">
          <div className="color-card-image">
            <img
              src="https://cdn.dorik.com/617f9bb6603724001149be1f/617f9bdf603724001149be21/images/42b383d8-945c-423d-a412-6ab696a027c5_1l8hs3d4.jpg"
              alt=""
            />
          </div>
          <p>
            It's a great idea, something very novel and unheard of before. Slice
            should incorporate this.
          </p>
          <div className="review-name">
            <span>
              <strong>Vishal Khedkar</strong>
            </span>
            <span>slice user, Mumbai</span>
          </div>
        </div>
      </div>
      <div className="review-container">
        <div className="review-row color-card">
          <div className="color-card-image">
            <img
              src="https://cdn.dorik.com/617f9bb6603724001149be1f/617f9bdf603724001149be21/images/67d851c0-2249-44ae-9c7b-595167c345c8_zbfxmhi6.jpg"
              alt=""
            />
          </div>
          <p>
            A lot of people lend their credit limits independently, sometimes
            since their friends don't have access to funds, or for bank/shopping
            offers. By integrating this into the app, credibility can be
            introduced into the system, and I think this is a great idea Tarang
            Girish
          </p>
          <div className="review-name">
            <span>
              <strong>Tarang Girish</strong>
            </span>
            <span>Zomato user, Bangalore</span>
          </div>
        </div>
        <div className="review-row color-card">
          <div className="color-card-image">
            <img
              src="https://cdn.dorik.com/617f9bb6603724001149be1f/617f9bdf603724001149be21/images/236e1e41-fbb4-47f9-9fb9-31f5a220bd56_zfbt49f1.jpg"
              alt=""
            />
          </div>
          <p>
            It's very logical to share the unused credit. Would love to have and
            use this feature soon.
          </p>
          <div className="review-name">
            <span>
              <strong>Rishav Raj</strong>
            </span>
            <span>Zomato user, Bangalore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
