import React from 'react';
import './AboutUs.css';
import BTN from '../Genral/Button2'
import Team from './TeamCard';

function AboutUs() {
  return (
    <div>

    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img className="mainImg" src="https://media.theresanaiforthat.com/icons/comments-analyzer.png?height=900" alt="Main" />
          </div>
        <div className="allText bottomText">
          <p className="text-blk headingText">
            About Us
          </p>
          <p className="text-blk subHeadingText">
            We are here to Simplifying YouTube Comment Analysis
          </p>
          <p className="text-blk description">
          Our analyzer effectively categorizes comments as positive, negative, or neutral, enhancing content comprehension effortlessly for better engagement and insights.
          </p>
         <BTN name="Get Started" link="/" />
        </div>
      </div>
    </div>
      <Team />
    </div>
  );
}

export default AboutUs;
