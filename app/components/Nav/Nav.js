import React from 'react';
import { NavLink } from 'react-router-dom';
import Covid19icon from 'images/Covid19icon.svg';
const Nav = () => {
  return (
    <div className="navbar navbar-expand-sm green-bg navbar-dark ">
      <div className="navbar-brand">
        <div className="container">
          <img className="logo-covid" src={Covid19icon} alt="covid-19 icon" />
          <h3 className="white-color padding-l-s5">Covid-19</h3>
        </div>
      </div>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </div>
      <div
        className="collapse navbar-collapse text-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/news">
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/info">
              Info
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about_us">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
