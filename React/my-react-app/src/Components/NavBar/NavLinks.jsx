import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavLinks.css";

function NavLinks() {
  const location = useLocation();

  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top  navbar-dark bg-dark">
        <div>
          <Link className="navbar-brand" to="/">
            <i className="bi bi-heart-pulse-fill"></i> HealthCare System
          </Link>
        </div>

        <div>
          {location.pathname === "/" && (
            <>
              <div class="right-block">
                <Link className="navbar-text" to="/doc-reg">
                  Register Doctor
                </Link>
                <Link className="navbar-text" to="/pat-reg">
                  Register Patient
                </Link>
              </div>
            </>
          )}
          {location.pathname === "/doc-reg" && (
            <>
              <Link className="navbar-text" to="/">
                Login
              </Link>
            </>
          )}
          {location.pathname === "/pat-reg" && (
            <>
              <Link className="navbar-text" to="/">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavLinks;
