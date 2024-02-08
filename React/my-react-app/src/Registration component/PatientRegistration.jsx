import React from 'react';

function PatientRegistration() {
  return (
    <>
      <div>Patient Registration Page</div>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
          <br />
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
          <br />
          <label htmlFor="contactNo">Contact No</label>
          <input type="number" name="contactNo" id="contactNo" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="select">select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default PatientRegistration;
