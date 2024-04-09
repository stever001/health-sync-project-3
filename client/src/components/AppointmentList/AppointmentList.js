import "./AppointmentList.css";

import React, { useState, useEffect } from "react";

function ListAppointment() {
   //*State to store the data from local storage
   const [data, setData] = useState([]);
   //*State to track the appointment being edited
   const [editingAppointment, setEditingAppointment] = useState(null);
   //*State to store the updated appointment details
   const [updatedAppointment, setUpdatedAppointment] = useState({
      username: "",
      apptDate: "",
      apptTime: "",
   });

   useEffect(() => {
      //*Function to retrieve data from local storage
      const fetchDataFromLocalStorage = () => {
         const localStorageData = localStorage.getItem("appointments");
         if (localStorageData) {
            setData(JSON.parse(localStorageData));
         }
         console.log("localStorageData", localStorageData);
      };

      fetchDataFromLocalStorage();
   }, []); //* Runs only once after the component mounts

   console.log("data:", data);

   //*Function to delete an appt
   const deleteAppointment = (username) => {
      const updatedData = data.filter((item) => item.username !== username);
      localStorage.setItem("appointments", JSON.stringify(updatedData));
      setData(updatedData);
   };

   //*Function to handle editing an appointment
   const editAppointment = (appointment) => {
      setEditingAppointment(appointment);
      setUpdatedAppointment(appointment);
   };

   //*Function to handle changes in the form inputs
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUpdatedAppointment((prevState) => ({ ...prevState, [name]: value }));
   };

   //*Function to update an appointment
   const updateAppointment = () => {
      const updatedData = data.map((item) => (item.username === editingAppointment.username ? updatedAppointment : item));
      localStorage.setItem("appointments", JSON.stringify(updatedData));
      setData(updatedData);
      setEditingAppointment(null);
   };

   return (
      <div>
         <h2 className="header"></h2>
         <table className="table">
            <thead className="table-header">
               <tr>
                  <th>Username</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item) => (
                  <tr className="table-row" key={item.username}>
                     <td>{item.username}</td>
                     <td>{item.apptDate}</td>
                     <td>{item.apptTime}</td>
                     <td>
                        <button onClick={() => editAppointment(item)}>Update</button>
                        <button onClick={() => deleteAppointment(item.username)}>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         {editingAppointment && (
            <div>
               <h3>Edit Appointment</h3>
               <form onSubmit={updateAppointment}>
                  <label>
                     Username:
                     <input type="text" name="username" value={updatedAppointment.username} onChange={handleInputChange} />
                  </label>
                  <label>
                     Date:
                     <input type="date" name="apptDate" value={updatedAppointment.apptDate} onChange={handleInputChange} />
                  </label>
                  <label>
                     Time:
                     <input type="time" name="apptTime" value={updatedAppointment.apptTime} onChange={handleInputChange} />
                  </label>
                  <button type="submit">Update</button>
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
