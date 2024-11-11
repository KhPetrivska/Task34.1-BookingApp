import React from "react";
import { NavLink } from "react-router-dom";

const Header =  () => {
   return (
    <nav className="nav-container">
      <div className="nav-items">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item" to="/hotels">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
export default Header