"use client";

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../components/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already exists");
      } else {
        console.log("Error creating the user:", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center text-4xl ">
        <h1>Sign Up</h1>
      </div>

      <div className="flex justify-center p-10">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <div className="flex gap-3">
            <div>
              <FormInput
                label="Name"
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
                placeholder="Name"
                className="input input-bordered mb-5"
              />

              <FormInput
                label="Email"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                placeholder="Email"
                className="input input-bordered mb-5"
              />
            </div>
            <div>
              <FormInput
                label="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                placeholder="Password"
                className="input input-bordered mb-5"
              />

              <FormInput
                label="Confirm Password"
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                className="input input-bordered mb-5"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;