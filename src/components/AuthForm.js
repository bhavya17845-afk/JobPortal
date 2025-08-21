import React, { useState } from "react";
import "../index.css";

function AuthForm({ isLogin: initialIsLogin = true }) {
  const [isLogin, setIsLogin] = useState(initialIsLogin);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>{isLogin ? "Welcome Back" : "Join Us Today"}</h2>
        <p>{isLogin ? "Login to your account" : "Create a new account"}</p>

        <form className="auth-form-modern">
          {!isLogin && <input type="text" placeholder="Full Name" />}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
