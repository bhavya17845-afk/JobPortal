import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">
            <Link to="/Home" onClick={closeMenu}>
              JobPortal
            </Link>
          </div>

          <button
            className={`nav-toggle ${open ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            <Link to="/Home" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/features" onClick={closeMenu}>
              Features
            </Link>
            <Link to="/categories" onClick={closeMenu}>
              Categories
            </Link>
            <Link to="/reviews" onClick={closeMenu}>
              Reviews
            </Link>
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/signup" onClick={closeMenu}>
              Signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Keep your routed pages below the fixed navbar */}
      <Outlet />
    </>
  );
}

export default Navbar;
