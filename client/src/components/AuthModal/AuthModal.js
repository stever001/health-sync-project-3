import React from 'react';
import './AuthModal.css'; // Make sure this file exists and contains the modal styles
import AuthForm from '../AuthForm/AuthForm'; // Adjust the path as necessary

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        {/* Remove the onClose prop if you're no longer using a close button */}
        <AuthForm isLogin={false} onClose={onClose} />
      </div>
    </div>
  );
};

export default AuthModal;

