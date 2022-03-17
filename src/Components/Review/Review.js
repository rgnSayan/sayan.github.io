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
            have anything to add, or just want to talk about zomato, do contact
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
            I am someone who is looking for better service everyday and I came
            across this idea of tiffin service on zomato. I love the idea
            because it’s great to finally fix our food routine with this
          </p>
          <div className="review-name">
            <span>
              <strong>Vishal Khedkar</strong>
            </span>
            <span>Zomato user, Mumbai</span>
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
            I moved to Bangalore 2 months back after working from home from last
            year. When I came out to stay on my own the most important thing
            that I couldn’t manage was FOOD. With this model in place I can take
            a monthly subscription and just get home made food. I don’t even
            have to buy groceries and hire a maid. This can make my life easy
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
            I am a student and I never lived without my Mom’s cooked food and
            when I came to college I was excited that I am going to get a
            variety of food on a daily basis. Well, after a month I realized
            that the mess food is so boring. It’s bad oil, unhealthy and I can’t
            choose what I want to eat, there is a schedule they follow and I
            have to eat that. But with this Zomato service I can choose what I
            want to eat. I don’t need to eat the same thing every Monday
            morning. Love the idea!
          </p>
          <div className="review-name">
            <span>
              <strong>Rashi Raj</strong>
            </span>
            <span>Zomato user, Delhi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
