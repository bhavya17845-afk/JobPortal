import React, { useState } from "react";
import "../index.css";

function Categories() {
  const [searchTerm, setSearchTerm] = useState("");

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
    {
      title: "Hospitality & Tourism",
      icon: "🏖️",
      description: "Hotels, travel, and tourism industry roles",
    },
    {
      title: "Legal & Law",
      icon: "⚖️",
      description: "Lawyers, paralegals, and legal consulting",
    },
  ];

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="categories-page">
      <h2>Job Categories</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        className="category-search"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="categories-container">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{category.icon}</div>
              <div className="category-title">{category.title}</div>
              <div className="category-description">{category.description}</div>
            </div>
          ))
        ) : (
          <p className="no-results">No categories found.</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
