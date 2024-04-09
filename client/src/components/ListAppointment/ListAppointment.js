import React from "react";
import ListAppointmentWrapper from "../AppointmentList/AppointmentList"; // Importing ContactFormWrapper
import "./ListAppointment.css"; // Importing CSS

function ListAppointment() {
   return (
      <div className="list-appointment-wrapper">
         <div className="list-appointment-container">
            <h2 className="list-appointment-heading">Current Appointments</h2> {/* Added class here */}
            <ListAppointmentWrapper /> {/* Using ContactFormWrapper here */}
         </div>
      </div>
   );
}

export default ListAppointment;
