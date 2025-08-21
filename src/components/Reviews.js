import React from "react";
import "../index.css";

function Reviews() {
  const reviews = [
    {
      name: "Aarav Mehta",
      role: "Software Engineer",
      comment: "This platform helped me land my dream job in just 2 weeks!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      comment:
        "Very easy to use and apply for multiple roles. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ravi Kumar",
      role: "UI/UX Designer",
      comment:
        "Great UI and excellent filtering features. Loved the experience!",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      name: "Sneha Patel",
      role: "Data Analyst",
      comment:
        "I got personalized recommendations that matched my skills perfectly.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Project Manager",
      comment:
        "The application tracking system is so smooth. Makes job hunting stress-free.",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Ananya Gupta",
      role: "HR Specialist",
      comment:
        "Loved the company reviews section, it really helped me choose the right place.",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      name: "Rahul Verma",
      role: "Frontend Developer",
      comment:
        "Simple, fast, and effective. Exactly what every job seeker needs!",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Kavya Nair",
      role: "Content Writer",
      comment:
        "The resume builder tool saved me so much time. Very professional results.",
      avatar: "https://randomuser.me/api/portraits/women/73.jpg",
    },
    {
      name: "Mohit Joshi",
      role: "DevOps Engineer",
      comment:
        "I love the real-time job alerts feature. I never miss out on opportunities.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Simran Kaur",
      role: "Graphic Designer",
      comment:
        "The platform has a beautiful design and is super easy to navigate.",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  return (
    <div className="reviews-section">
      <h2>What Our Users Say</h2>
      <div className="reviews-carousel">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.avatar}
              alt={review.name}
              className="review-avatar"
            />
            <h4>{review.name}</h4>
            <p className="review-role">{review.role}</p>
            <p className="review-comment">“{review.comment}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
