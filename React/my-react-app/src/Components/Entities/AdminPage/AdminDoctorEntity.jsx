import React from "react";
import "./AdminDoctorEntity.css";

export default function AdminDoctoEntity(prop) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    const status = prop.doctor_login_id.id_approved ? "approve" : "disapprove";
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        is_approved: status,
        doctor_login_id: prop.doctor_login_id.login_id,
      }),
    };
    console.log(reqOptions);
    fetch("http://localhost:8080/approveDoctor", reqOptions)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Cannot change status");
        }
      })
      .then((obj) => {
        console.log(obj);
        alert("Status Changed");
      })
      .catch((error) => alert("Server Error"));
  };

  const fetchDelete = () => {
    fetch("http://localhost:8080/", {})
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Cannot delete");
        }
      })
      .then((obj) => {
        console.log(obj);
        alert("Deleted Doctor");
      })
      .catch((error) => alert("Server Error"));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    /* eslint-disable no-restricted-globals */
    const result = confirm("Do you want to proceed?");
    /* eslint-enable no-restricted-globals */
    if (result) {
    }
  };

  return (
    <>
      <div className="card w-70 card-max ">
        <div className="card-header text-center">{prop.specialization} </div>

        <div className="card-body ">
          <h5 className="card-title text-center">
            {prop.first_name} {prop.last_name}{" "}
            <span className="text-muted ">
              <span>(</span>
              {prop.education}
              <span>)</span>
            </span>
          </h5>
          <p className="card-text">
            {prop.description}
            <br />
          </p>
          <hr />
          <button
            onClick={handleButtonClick}
            className={`btn ${
              prop.doctor_login_id.id_approved ? "btn-danger" : "btn-success"
            }`}
          >
            {prop.doctor_login_id.id_approved ? "Disable" : "Approve"}
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleDelete}
          >
            <i class="bi bi-trash3"></i>Delete
          </button>

          {prop.address}
        </div>
        <div className="card-footer text-muted text-center">
          <i className="bi bi-telephone-fill"></i>
          {prop.phonenumber}
          <i className="bi bi-envelope-at-fill"></i>
          {prop.email}
          <i className="bi bi-geo-alt-fill"></i>
          {prop.city} {prop.pincode}
        </div>
      </div>
    </>
  );
}
