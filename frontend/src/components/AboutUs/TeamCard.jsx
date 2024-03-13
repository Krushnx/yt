import React from 'react';
import gaytri from './Memebers/PXL_20240201_072845773.jpg';
import aditi from './Memebers/IMG-20240203-WA0198.jpg';
import gauri from './Memebers/IMG_20240222_193559.jpg';
import Ketki from './Memebers/IMG_20240310_122717.jpg';

// Define a functional component for the team member card
const TeamMemberCard = ({ imageUrl, name, position }) => {
  return (
    <div className="card">
      <div className="team-image-wrapper">
        <img className="team-member-image" src={imageUrl} alt={name} />
      </div>
      <p className="text-blk name">{name}</p>
      <p className="text-blk position">{position}</p>
      {/* <p className="text-blk feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      <div className="social-icons">
        <a href="https://www.twitter.com" target="_blank">
          <img className="twitter-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png " alt="" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <img className="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
        </a>
      </div>
    </div>
  );
};

// Define the main team component
const Team = () => {
  return (
    <div className="responsive-container-block container">
      <p className="text-blk team-head-text">Our Team</p>
      <div className="responsive-container-block">
        {/* Repeat the TeamMemberCard component for each team member */}
        
          <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <TeamMemberCard
              imageUrl={gauri}
              name="Gauri Thorat"
              position="Front end Developer"
            />
          </div>
          <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <TeamMemberCard
              imageUrl={gaytri}
              name="Gayatri Thombare"
              position="Machine Learning"
            />
          </div>
          <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <TeamMemberCard
              imageUrl={aditi}
              name="Aditi Bangal"
              position="Backend Developer"
            />
          </div>
          <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <TeamMemberCard
              imageUrl={Ketki}
              name="Ketki Kore"
              position="Documentation"
            />
          </div>
       
      </div>
    </div>
  );
};

export default Team;
