import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Importing Navigation-specific styles

// Added a more specific className for the navigation component
const Navigation = () => {
   return (
      <nav className="custom-app-navigation">
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/scheduleappt">Schedule an Appointment</Link>
            </li>
            <li>
               <Link to="/appt">Appointments</Link>
            </li>
            <li>
               <Link to="/about-us">About Us</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
            <li>
               <Link to="/login">Login</Link>
            </li>
            <li>
               <Link to="/signup">Sign Up</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
