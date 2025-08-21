import React from "react";
import "../index.css";

function Features() {
  const features = [
    { text: "Verified Job Listings", icon: "✅" },
    { text: "One-Click Apply", icon: "⚡" },
    { text: "Resume Builder", icon: "📄" },
    { text: "Real-Time Job Alerts", icon: "🔔" },
    { text: "Company Reviews & Ratings", icon: "⭐" },
    { text: "Personalized Job Recommendations", icon: "🎯" },
    { text: "Advanced Search Filters", icon: "🔍" },
    { text: "24/7 Support Chatbot", icon: "💬" },
    { text: "Interview Preparation Tips", icon: "📝" },
    { text: "Secure Data & Privacy Protection", icon: "🔒" },
    { text: "Career Growth Resources", icon: "📈" }, // NEW
    { text: "Global Job Opportunities", icon: "🌍" }, // NEW
  ];

  return (
    <div className="features-section">
      <h2 className="features-title">🌟 Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
