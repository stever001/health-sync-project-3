import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_APPT } from "../../utils/mutations";
// import { useHistory } from "react-router-dom";
import "./AppointmentForm.css";

const AppointmentForm = () => {
   // const history = useHistory(); //* Initialize useHistory hook
   const [formData, setFormData] = useState({
      username: "",
      apptDate: "",
      apptTime: "",
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      let formDataArray = JSON.parse(localStorage.getItem("appointments")) || [];
      formDataArray.push(formData);
      //************ Temporary use of localStorage until backend/frontend connection from Aaron is solved */
      localStorage.setItem("appointments", JSON.stringify(formDataArray));

      //* Navigate to '/list-appt' after form submission
      // history.push("/list-appt");

      // const [username, setUsername] = useState("");
      // const [apptDate, setApptDate] = useState("");
      // const [apptTime, setApptTime] = useState("");

      // const [createAppointment] = useMutation(CREATE_APPT);

      // const handleSubmit = async (e) => {
      //    e.preventDefault();
      //    try {
      //       await createAppointment({
      //          variables: {
      //             username,
      //             apptDate,
      //             apptTime,
      //          },
      //       });
      //       // Clear form fields after successful submission
      //       setUsername("");
      //       setApptDate("");
      //       setApptTime("");
      //    } catch (error) {
      //       console.error("Error creating appointment:", error);
      //    }
   };

   return (
      <div className="af-container">
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label>
                  Username:
                  <input type="text" name="username" value={formData.username} onChange={handleChange}></input>
               </label>
               <label>
                  Date:
                  <input type="date" name="apptDate" value={formData.apptDate} onChange={handleChange}></input>
               </label>
               <label>
                  Time:
                  <input type="time" name="apptTime" value={formData.apptTime} onChange={handleChange}></input>
               </label>
               <input type="submit" value="Create Appointment" />
            </div>
         </form>
      </div>
   );
};

function AppointmentFormWrapper() {
   return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
         <AppointmentForm />
      </div>
   );
}

export default AppointmentFormWrapper;
