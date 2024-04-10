import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomHeader from "./components/CustomHeader/CustomHeader";
import CustomFooter from "./components/CustomFooter/CustomFooter"; // Make sure to create this component
import BackgroundSlider from "./components/BackgroundSlider/BackgroundSlider";
import AboutUs from "./components/AboutUs/AboutUs";
// import LoginForm from "./components/auth/LoginForm"; // Corrected import path
import Contact from "./components/Contact/Contact";
// import SignupForm from './components/auth/SignupForm';
// import AppointmentForm from "./components/AppointmentForm";
import Appointment from "./components/Appointment/Appointment";
import ListAppointment from "./components/ListAppointment/ListAppointment";

import HomeComponent from "./components/HomeComponent/HomeComponent";
import "./App.css";

function App() {
   return (
      <div className="App">
         <CustomHeader /> {/* Header should be at the top */}
         <BackgroundSlider />
         {/* The main content of your app should be rendered within Routes */}
         <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/scheduleappt" element={<Appointment />} />
            <Route path="/appt" element={<ListAppointment />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/signup" element={<SignupForm />} /> */} {/* Uncomment or remove this line as needed */}
            {/* Add other routes as needed */}
         </Routes>
         <CustomFooter /> {/* Footer should be at the bottom */}
         =======
         {/* Other components */}
         <CustomHeader />
      </div>
   );
}

export default App;
