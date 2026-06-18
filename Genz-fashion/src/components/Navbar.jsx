import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ cartCount, setShowLogin }) {
  return (
    <nav className="nav">

      <h2 className="logo">
        Urban Stich 🔥
      </h2>

      <div className="nav-links">

        {/* Home */}
        <Link to="/" className="icon">
          <FaHome />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="icon">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </Link>

        {/* Login Popup Button */}
        <button
          className="login-nav-btn"
          onClick={() => setShowLogin(true)}
        >
          Signup
        </button>

      </div>

    </nav>
  );
}

export default Navbar;