import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";

//username
//password
// first_name
// last_name
// address
// phone_number
// gender
// email_id

function PatientRegistration() {
  const location = useLocation();
  console.log(location);
  const init = {
    username: { value: "", valid: false, touched: false, error: "" },
    password: { value: "", valid: false, touched: false, error: "" },
    firstName: { value: "", valid: false, touched: false, error: "" },
    lastName: { value: "", valid: false, touched: false, error: "" },
    address: { value: "", valid: false, touched: false, error: "" },
    contactNo: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },
    gender: {
      value: "",
      valid: false,
      touched: false,
      error: "Please Select a Gender",
    },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
      case "reset":
        return init;
      default:
    }
  };
  const [user, dispatch] = useReducer(reducer, init);

  const validateData=(key,val)=>{
    let valid = true;
    let error="";
    switch(key){
        case "username":
        let patternusername = /^[A-Z]{1}[a-z]{1,}$/;
        if (!patternusername.test(val)) {
          valid = false;
          error = "Enter Your First Name and Only Letters Allow";
        }
        break;case "password":
        let patternpassword = /^[A-Z]{1}[a-z]{1,}$/;
        if (!patternpassword.test(val)) {
          valid = false;
          error = "Enter Your First Name and Only Letters Allow";
        }
        break;
        case "firstName":
        let patterfirstName = /^[A-Z]{1}[a-z]{1,}$/;
        if (!patterfirstName.test(val)) {
          valid = false;
          error = "Enter Your First Name and Only Letters Allow";
        }
        break;
        case "lastName":
        let patternlastName = /^[A-Z]{1}[a-z]{1,}$/;
        if (!patternlastName.test(val)) {
          valid = false;
          error = "Enter Your Last Name and Only Letters Allow";
        }
        break;
        default:
      }
      return {valid:valid,error:error};
  };
  const handleChange=(key,value)=>{
    const {valid,error}=validateData(key,value);
    let formValid=true;
    for(let k in user)
    {
      if(user[k].valid===false){
        formValid=false;
        break;
      }
    }
    console.log(formValid);

    dispatch({
      type:"update",
      data:{key,value,touched:true,valid,error,formValid},
    });
  };
  return (
    <>
      <legend>Patient Registration</legend>
      <div className="registration-container">
        <form
          className="form-horizontal needs-validation"
          action=""
          method="POST"
        >
          <table className="table">
            <tbody>
              <tr></tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="firstName">
                    User Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={user.userName.value}
                    onChange={(e) => {
                      handleChange("userName", e.target.value);
                    }}
                    onBlur={(e) => {
                      handleChange("userName", e.target.value);
                    }}
                    placeholder="Raj"
                    required
                  />
              
                  <div
                    style={{
                      display:
                        user.userName.touched && !user.userName.valid
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {user.userName.error}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="firstName">
                    First Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    // pattern="[A-Z][a-zA-Z]*"
                    value={user.firstName.value}
                    onChange={(e) => {
                      handleChange("firstName", e.target.value);
                    }}
                    onBlur={(e) => {
                      handleChange("firstName", e.target.value);
                    }}
                    placeholder="Raj"
                    required
                  />
                  {/* <small className="text-help">
                    Must start with an uppercase letter
                  </small> */}
                  <div
                    style={{
                      display:
                        user.firstName.touched && !user.firstName.valid
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {user.firstName.error}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="lastName">
                    Last Name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    // pattern="[A-Z][a-zA-Z]*"
                    value={user.lastName.value}
                    onChange={(e) => {
                      handleChange("lastName", e.target.value);
                    }}
                    onBlur={(e) => {
                      handleChange("lastName", e.target.value);
                    }}
                    placeholder="Patel"
                    required
                  />
                  {/* <small className="text-help">
                    Must start with an uppercase letter
                  </small> */}
                  <div
                    style={{
                      display:
                        user.lastName.touched && !user.lastName.valid
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {user.lastName.error}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="address">
                    Address
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={user.address.value}
                    onChange={(e) => {
                      handleChange("address", e.target.value);
                    }}
                    onBlur={(e) => {
                      handleChange("address", e.target.value);
                    }}
                    placeholder="123 Main St"
                    required
                  />
                  {/* <small className="text-help">Required</small> */}
                  <div
                    style={{
                      display:
                        user.address.touched && !user.address.valid
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {user.address.error}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="contactNo">
                    Contact No
                  </label>
                </td>
                <td>
                  <input
                    type="tel"
                    className="form-control"
                    id="contactNo"
                    name="contactNo"
                    // pattern="[0-9]{10}"
                    value={user.contactNo.value}
                    onChange={(e) => {
                      handleChange("contactNo", e.target.value);
                    }}
                    onBlur={(e) => {
                      handleChange("contactNo", e.target.value);
                    }}
                    placeholder="9876543210"
                    required
                  />
                  {/* <small className="text-help">
                    Please enter a valid 10-digit number
                  </small> */}
                  <div
                    style={{
                      display:
                        user.contactNo.touched && !user.contactNo.valid
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {user.contactNo.error}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="email">
                    Email
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email.value}
                    onChange={(e) => {
                      handleChange("email", e.target.value);
                    }}
                    onBlur={(e) => {
                      handleChange("email", e.target.value);
                    }}
                    placeholder="RajPatel@gmail.com"
                    required
                  />
                  {/* <small className="text-help">
                    Please enter a valid email address
                  </small> */}
                  <div
                    style={{
                      display:
                        user.email.touched && !user.email.valid
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {user.email.error}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="control-label" htmlFor="gender">
                    Gender
                  </label>
                </td>
                <td>
                  <select
                    className="form-control"
                    id="gender"
                    name="gender"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <small className="text-help">Required</small>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default PatientRegistration;
