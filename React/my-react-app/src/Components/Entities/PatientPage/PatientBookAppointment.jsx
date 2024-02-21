import React, { useState } from "react";
import data from "./appointment-timedata.js";

function PatientBookAppointment() {
  const doctorId = localStorage.getItem("doctorBookingId");
  const doctorFname = localStorage.getItem("doctorBookingfName");
  const doctorLname = localStorage.getItem("doctorBookinglname");
  const patientId = localStorage.getItem("loginId");

  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [reason, setReason] = useState(""); // State for the reason input
  const [isSlotSelected, setIsSlotSelected] = useState(false); // State to track if a slot is selected

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setSelectedSlot(""); // Reset selected slot when date changes
    setIsSlotSelected(false); // Reset slot selection validation
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
    setIsSlotSelected(true); // Slot is selected, so set validation to true
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isSlotSelected) {
      alert("Please select a slot");
      return; // Don't proceed further
    } else {
      console.log(
        JSON.stringify({
          doctorId: doctorId,
          date: date,
          selectedSlot: selectedSlot,
          patientId: patientId,
          reason: reason, // Include reason in the submitted data
        })
      );

      fetch("http://localhost:8080/bookDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: doctorId,
          date: date,
          selectedSlot: selectedSlot,
          reason: reason, // Include reason in the submitted data
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle response if needed
          alert("Appointment booked successfully:", data);
        })
        .catch((error) => {
          alert("Error booking appointment:", error);
        });

    }
  };

  const filteredAppointments = data.filter(
    (appointment) => appointment.day === date && appointment.flag === 1
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <legend>
        Book slots for Dr. {doctorFname} {doctorLname}
      </legend>
      <label>
        Date
        <br />
        <input type="date" value={date} onChange={handleDateChange} required />
      </label>

      <div>
        {filteredAppointments.map((appointment) => (
          <div key={appointment.appoint_id}>
            <input
              type="radio"
              id={appointment.slot_start}
              name="appointmentSlot"
              value={appointment.slot_start}
              checked={selectedSlot === appointment.slot_start}
              onChange={handleSlotChange}
            />
            <label htmlFor={appointment.slot_start}>
              {appointment.slot_start}
            </label>
          </div>
        ))}
      </div>

      {/* Add a text input for reason */}
      <label>
        Reason
        <br />
        <input type="text" value={reason} onChange={handleReasonChange} />
      </label>

      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default PatientBookAppointment;
