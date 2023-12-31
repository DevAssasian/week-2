import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/link1">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/link2">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/link3">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-success" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
