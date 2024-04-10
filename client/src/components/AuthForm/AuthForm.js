import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ isLogin, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic for form submission here
    // ...

    // Close the form upon successful submission
    // This should be called after your form validation and submission logic
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        {/* Form fields */}
        <button type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
