import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_CA.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="CA" /> Cricket Authority
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;