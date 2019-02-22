import React from "react";
import { NavLink } from "react-router-dom";

const navBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/authors">List of Authors</NavLink>
      </ul>
    </nav>
  );
};

export default navBar;
