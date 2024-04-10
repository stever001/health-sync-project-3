import React, { useState } from 'react';
import './CustomHeader.css'; // Importing Header-specific styles
import Navigation from '../Navigation/Navigation';
import AuthModal from '../AuthModal/AuthModal'; // Import the AuthModal component

function CustomHeader() {
  const [isModalOpen, setModalOpen] = useState(false);
  const logoUrl = process.env.PUBLIC_URL + '/assets/trans-logo.png'; // Get the absolute URL for the logo

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="CustomHeader-wrapper">
      <div className="header-top"> {/* Container for the logo and the title */}
        <div className="header-logo">
          <a href="/">
            <img src={logoUrl} alt="HealthSync Logo" />
          </a>
        </div>
        <h1 className="header-title">HealthSync</h1>
        {/* Button to toggle the AuthModal */}
        <button onClick={toggleModal} className="header-auth-button">
          Login/Signup
        </button>
      </div>
      <Navigation />
      {/* Include the AuthModal here */}
      <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default CustomHeader;
