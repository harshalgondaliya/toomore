import React, { useEffect } from "react";
import "./OurStory.css"; // Add the CSS file here
import useScrollAnimations from "./useScrollAnimations"; // Add the custom hook
import missionImage from "../assets/images/back.jpg"; // Replace with your actual mission image path
import storyImage from "../assets/images/front.jpg"; // Replace with your actual story image path

const OurStory = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Activate scroll animations
  useScrollAnimations();

  return (
    <div className="our-story">
      {/* Mission Section */}
      <section className="mission-section animate-on-scroll">
        <div className="mission-text">
          <h1 className="section-title">About Us</h1>
          <p>
            There's this notion that to grow a business, you have to be ruthless.
            But we know there's a better way to grow. One where what's good for
            the bottom line is also good for customers. We believe businesses can
            grow with a conscience, and succeed with a soul—and that they can do
            it with inbound.
          </p>
        </div>
        <div className="mission-image">
          <img src={missionImage} alt="Mission Founders" />
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section animate-on-scroll">
        <div className="story-image">
          <img src={storyImage} alt="Our Story" />
        </div>
        <div className="story-content">
          <h1 className="section-title">Vision & Mission</h1>
          <p>
            As fellow graduate students, we noticed a shift in the way people shop
            and buy. Consumers were no longer tolerating interruptive bids for
            their attention. In fact, they'd gotten really good at ignoring them.
            So, we set out to create a new approach.
          </p>
        </div>
      </section>

      <section className="mission-section animate-on-scroll">
        <div className="mission-text">
          <h1 className="section-title">Leadership Team</h1>
          <p>
            There's this notion that to grow a business, you have to be ruthless.
            But we know there's a better way to grow. One where what's good for
            the bottom line is also good for customers. We believe businesses can
            grow with a conscience, and succeed with a soul—and that they can do
            it with inbound.
          </p>
        </div>
        <div className="mission-image">
          <img src={missionImage} alt="Mission Founders" />
        </div>
      </section>

      <section className="story-section animate-on-scroll">
        <div className="story-image">
          <img src={storyImage} alt="Our Story" />
        </div>
        <div className="story-content">
          <h1 className="section-title">Milestone</h1>
          <p>
            As fellow graduate students, we noticed a shift in the way people shop
            and buy. Consumers were no longer tolerating interruptive bids for
            their attention. In fact, they'd gotten really good at ignoring them.
            So, we set out to create a new approach.
          </p>
        </div>
      </section>

      <section className="mission-section animate-on-scroll">
        <div className="mission-text">
          <h1 className="section-title">News and Media</h1>
          <p>
            There's this notion that to grow a business, you have to be ruthless.
            But we know there's a better way to grow. One where what's good for
            the bottom line is also good for customers. We believe businesses can
            grow with a conscience, and succeed with a soul—and that they can do
            it with inbound.
          </p>
        </div>
        <div className="mission-image">
          <img src={missionImage} alt="Mission Founders" />
        </div>
      </section>
    </div>
  );
};

export default OurStory;