import React, { useState } from "react";

function DoctorHomePage() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const loginID = localStorage.getItem("loginId");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleButtonClick = (e) => {
    fetch(
      `http://localhost:8080/appointments/getAppointments/${loginID}/${date}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Failed to get appointment");
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        alert("Error Getting appointment:", error);
      });
  };

  return (
    <div className="DoctorHomePage">
      <legend>View Appointments</legend>
      <div>
        <label>
          Date
          <br />
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </label>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Check Appointments
        </button>
      </div>
    </div>
  );
}

export default DoctorHomePage;
