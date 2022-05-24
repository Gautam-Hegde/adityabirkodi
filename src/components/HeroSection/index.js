import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>Maybe you need new
          portraits?</div>
          <a href="https://www.instagram.com/aditya_birkodi/"className="td">
        <div className="claim-anchor " id='gli'>
          book now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow "
          />
        </div>
        </a>
      </div>
      <div className="flex flex-col absolute-center hero-section max-width ">
        <div className="hero-heading ">
        Capturing life's moments through a lens.
        </div>
        <div className="hero-subheading ">
        “Which of my photographs is my favorite? The one I'm going to take
          tomorrow.”
        </div>
        <a href="https://www.instagram.com/aditya_birkodi/" className="td">
        <Button buttonText="Contact Me"  />
        </a>
        
      </div>
    </div>
  );
};

export default HeroSection;