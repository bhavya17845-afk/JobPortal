import React from "react";
import "../index.css";

function Categories() {
  const categories = [
    {
      title: "Information Technology",
      icon: "💻",
      description: "Software, networking, and IT services",
    },
    {
      title: "Healthcare",
      icon: "🏥",
      description: "Medical, nursing, and healthcare jobs",
    },
    {
      title: "Finance & Accounting",
      icon: "💰",
      description: "Banking, auditing, and accounting",
    },
    {
      title: "Engineering",
      icon: "⚙️",
      description: "Mechanical, civil, and electrical fields",
    },
    {
      title: "Sales & Marketing",
      icon: "📈",
      description: "Business growth and brand promotion",
    },
    {
      title: "Customer Service",
      icon: "🎧",
      description: "Client support and relationship management",
    },
    {
      title: "Education & Training",
      icon: "📚",
      description: "Teaching and skill development",
    },
    {
      title: "Human Resources",
      icon: "🧑‍💼",
      description: "Recruitment, payroll, and HR services",
    },
    {
      title: "Design & Creative",
      icon: "🎨",
      description: "Graphic design, UI/UX, and creative arts",
    },
    {
      title: "Logistics & Supply Chain",
      icon: "🚚",
      description: "Transportation and warehouse jobs",
    },
  ];

  return (
    <div className="categories-page">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Job Categories
      </h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{category.icon}</div>
            <div className="category-title">{category.title}</div>
            <div className="category-description">{category.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
