// DoctorRegistration.js
import React from 'react';
import './DoctorRegistration.css';

function DoctorRegistration() {
  return (
    <>
          <legend>Doctor Registration</legend>
      <div className="registration-container">
        
        <form className="form-horizontal needs-validation" action="" method="POST">

          <table className="table">
            <tbody>
              <tr>
             
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="firstName">First Name</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="firstName" name="firstName" pattern="[A-Z][a-zA-Z]*" placeholder="Raj" required />
                  <small className="text-help">Must start with an uppercase letter</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="lastName">Last Name</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="lastName" name="lastName" pattern="[A-Z][a-zA-Z]*" placeholder="Patel" required />
                  <small className="text-help">Must start with an uppercase letter</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="address">Address</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="address" name="address" placeholder="123 Main St" required />
                  <small className="text-help">Required</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="contactNo">Contact No</label>
                </td>
                <td>
                  <input type="tel" className="form-control" id="contactNo" name="contactNo" pattern="[0-9]{10}" placeholder="9876543210" required />
                  <small className="text-help">Please enter a valid 10-digit number</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="email">Email</label>
                </td>
                <td>
                  <input type="email" className="form-control" id="email" name="email" placeholder="RajPatel@gmail.com" required />
                  <small className="text-help">Please enter a valid email address</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="gender">Gender</label>
                </td>
                <td>
                  <select className="form-control" id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <small className="text-help">Required</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="description">Description</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="description" name="description" placeholder="Cardiologist" required />
                  <small className="text-help">Required</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="Specialization">Specialization</label>
                </td>
                <td>
                  <input type="text" className="form-control" id="Specialization" name="Specialization" placeholder="Heart Surgeon" required />
                  <small className="text-help">Required</small>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="experience">Experience</label>
                </td>
                <td>
                  <input type="number" className="form-control" id="experience" name="experience" placeholder="" required max="70" />
                  <small className="text-help">Required</small>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <button type="submit" className="btn btn-primary">Register</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default DoctorRegistration;
