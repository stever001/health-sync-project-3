import "./AppointmentList.css";

import React, { useState, useEffect } from "react";

function ListAppointment() {
   const [data, setData] = useState([]);
   const [editingAppointment, setEditingAppointment] = useState(null);
   const [updatedAppointment, setUpdatedAppointment] = useState({
      username: "",
      apptDate: "",
      apptTime: "",
   });

   useEffect(() => {
      const fetchDataFromLocalStorage = () => {
         const localStorageData = localStorage.getItem("appointments");
         if (localStorageData) {
            setData(JSON.parse(localStorageData));
         }
      };

      fetchDataFromLocalStorage();
   }, []);

   const deleteAppointment = (username) => {
      const updatedData = data.filter((item) => item.username !== username);
      localStorage.setItem("appointments", JSON.stringify(updatedData));
      setData(updatedData);
   };

   const editAppointment = (appointment) => {
      setEditingAppointment(appointment);
      setUpdatedAppointment(appointment);
   };

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUpdatedAppointment((prevState) => ({ ...prevState, [name]: value }));
   };

   const updateAppointment = (e) => {
      e.preventDefault(); // Prevents the default form submit action
      const updatedData = data.map((item) => (item.username === editingAppointment.username ? updatedAppointment : item));
      localStorage.setItem("appointments", JSON.stringify(updatedData));
      setData(updatedData);
      setEditingAppointment(null);
   };

   return (
      <div className="apptList-container">
         <h2></h2> {/* Empty header? Consider adding text or removing the header if not needed */}
         <table className="apptList-table">
            <thead className="apptList-table-header">
               <tr>
                  <th>Username</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item) => (
                  <tr className="apptList-table-row" key={item.username}>
                     <td>{item.username}</td>
                     <td>{item.apptDate}</td>
                     <td>{item.apptTime}</td>
                     <td>   
                     <button className="apptList-button apptList-button-update" onClick={() => editAppointment(item)}>Update</button>
                     <button className="apptList-button apptList-button-delete" onClick={() => deleteAppointment(item.username)}>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         {editingAppointment && (
            <div className="apptList-edit-form">
               <h3>Edit Appointment</h3>
               <form onSubmit={updateAppointment}>
                  <div className="apptList-form-group">
                     <label>
                        Username:
                        <input type="text" name="username" value={updatedAppointment.username} onChange={handleInputChange} className="apptList-input" />
                     </label>
                     <label>
                        Date:
                        <input type="date" name="apptDate" value={updatedAppointment.apptDate} onChange={handleInputChange} className="apptList-input" />
                     </label>
                     <label>
                        Time:
                        <input type="time" name="apptTime" value={updatedAppointment.apptTime} onChange={handleInputChange} className="apptList-input" />
                     </label>
                     <button type="submit" className="apptList-button">Update</button>
                  </div>
               </form>
            </div>
         )}
      </div>
   );
}

function ListAppointmentWrapper() {
   return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
         <ListAppointment />
      </div>
   );
}

export default ListAppointmentWrapper;
