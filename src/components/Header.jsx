import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_CA.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="CA" />
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Products</NavLink>        
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;