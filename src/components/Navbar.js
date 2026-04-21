import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <ul>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
      <span style={{ marginRight: "10px" }}>Dashboard</span>
      <span style={{ marginRight: "10px" }}>Profile</span>
      <span>Settings</span>
    </nav>
  );
}

export default Navbar;
