import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-line">
        <Link to="/my-app" className="path">
          <li>Home</li>
        </Link>
        <Link to="/plan" className="path">
          <li>Meal Plan</li>
        </Link>
        <Link to="/macros" className="path">
          <li>Ingredients macros</li>
        </Link>
      </ul>
      <h1 className="foody">Foody</h1>
    </nav>
  );
}

export default Nav;
