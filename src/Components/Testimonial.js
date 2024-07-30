import React from "react";
import ProfilePic from "../Assets/aarav-patel-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          "Excellent service! The meals are delicious, healthy, and arrive on
          time. I love the variety and convenience. It’s a game-changer for my
          busy lifestyle. Highly recommend to all food lovers!"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "Fantastic experience! The meals are not only tasty and fresh but also
          well-balanced. Quick delivery and easy to order. Ideal for busy
          schedules. Highly recommend for anyone seeking convenient, healthy
          meals!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Aarav Patel</h2>
      </div>
    </div>
  );
};

export default Testimonial;
