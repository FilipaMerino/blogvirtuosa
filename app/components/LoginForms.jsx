'use client'

import { useState } from "react";

import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const LoginForms = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleForm = () => {
    setShowSignUp((prevShowSignUp) => !prevShowSignUp);
  };

  return (
    <div className="flex flex-col justify-center p-10">
      {showSignUp ? <SignUpForm /> : <SignInForm />}
      <button
        onClick={handleToggleForm}
        className="text-xs text-[#068FFF] hover:underline">
        {showSignUp ? "I already have an account" : "I don't have an account"}
      </button>
    </div>
  );
};

export default LoginForms;
