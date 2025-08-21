import React from "react";
import AuthForm from "../components/AuthForm";

function LoginPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthForm isLogin={true} />
    </div>
  );
}

export default LoginPage;
