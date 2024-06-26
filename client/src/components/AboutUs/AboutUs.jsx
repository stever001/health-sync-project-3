import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './AboutUs.css'; // Import the CSS file for styling
import CardComponent from '../CardComponent/CardComponent';

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-content"> 
        <h1 className="about-us-heading">Meet Our Skilled Doctors</h1>
        <p className="about-us-paragraph">We are ready to meet your healthcare needs.</p>
      </div>
      <div className="about-us-cards"> {/* New wrapper for cards */}
        <CardComponent />
      </div>
    </div>
  );
};

export default AboutUs;

