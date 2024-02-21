import React, { useState } from "react";

function DoctorHomePage() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const loginID = localStorage.getItem("loginId");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleButtonClick = (e) => {
    console.log(
      `http://localhost:8080/appointments/getAscAppointments/${loginID}/${date}`
    );

    fetch(
      `http://localhost:8080/appointments/getAscAppointments/${loginID}/${date}`,
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

  const handleStatusChange = (appointmentId, newStatus) => {
    fetch(`http://localhost:8080/appointments/${appointmentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to update appointment status");
        }
      })
      .catch((error) => {
        alert("Error updating appointment status:", error);
      });
  };

  return (
    <div className="DoctorHomePage container">
      <legend>View Appointments</legend>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleButtonClick}>
        Check Appointments
      </button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Patient ID</th>
              <th>Phone Number</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th colSpan="2">Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>
                  {appointment.patientId.first_name}{" "}
                  {appointment.patientId.last_name}
                </td>
                <td>{appointment.patientId.phone_number}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.appointmentTime}</td>
                <td colSpan="2">{appointment.notes}</td>
                <td>
                  <select
                    value={appointment.status}
                    onChange={(event) =>
                      handleStatusChange(appointment.id, event.target.value)
                    }
                  >
                    <option value="Not Visited">Not Visited</option>
                    <option value="Visited">Visited</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorHomePage;
