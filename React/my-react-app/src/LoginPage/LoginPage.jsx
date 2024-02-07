import React from "react";
import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  return (
    <>
      <div className="form-Container">
        <span id="login-label">Login</span>

        <form>
          <div className="form-group">
            <label htmlFor="">User id</label>
            <input type="text" name="" id="" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" className="form-control" />
          </div>

          <button type="" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
