import React from "react";
import AuthForm from "../components/AuthForm";

function SignupPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthForm isLogin={false} />
    </div>
  );
}

export default SignupPage;
