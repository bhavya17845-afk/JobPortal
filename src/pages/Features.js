import React from "react";
import "../index.css";
import { FaCheckCircle } from "react-icons/fa";

function Features() {
  const features = [
    "Verified Job Listings",
    "One-Click Apply",
    "Resume Builder",
    "Real-Time Job Alerts",
    "Company Reviews & Ratings",
    "Personalized Job Recommendations",
    "Advanced Search Filters",
    "24/7 Support Chatbot",
    "Interview Preparation Tips",
    "Secure Data & Privacy Protection",
  ];

  return (
    <div className="why-choose-us">
      <h2 className="features-title">🚀 Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FaCheckCircle className="feature-icon" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
