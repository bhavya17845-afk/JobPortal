import React from "react";
import "../index.css";

function HeroSection() {
  return (
    <div className="hero-content">
      <h1>Find Your Dream Job</h1>
      <p>Search thousands of jobs from top companies</p>
      <div className="search-box">
        <input type="text" placeholder="Search jobs..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default HeroSection;
