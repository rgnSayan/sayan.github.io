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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0g5rjZL3HHvRUeh8Kgv8vogUSYhDPp6h8Qw&usqp=CAU"
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
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
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
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHEPW5igV-AAg/profile-displayphoto-shrink_200_200/0/1530401753378?e=1652313600&v=beta&t=IXULfXMTODmLS8J1jDg-H6Zer30y7et4sFFK7gg6kPE"
              alt=""
            />
          </div>
          <p>
            It's very logical to share the unused credit. Would love to have and
            use this feature soon.
          </p>
          <div className="review-name">
            <span>
              <strong>Rashi Raj</strong>
            </span>
            <span>Zomato user, Bangalore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
