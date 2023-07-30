"use client";

import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUSerWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../components/FormInput";

import { FcGoogle } from "react-icons/fc";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUSerWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;

        case "auth/user-not-found":
          alert("User doesn't exist");
          break;

        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-center text-4xl ">
        <h1>Sign In</h1>
      </div>

      <div className="flex justify-center p-10">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
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

          <div className="flex gap-4">
            <button type="submit" className="btn bg-[#333333] text-white">
              Sign In
            </button>
            <button
              onClick={signInWithGoogle}
              className="btn bg-[#4285F4] text-white">
              Sign In With
              <div className="bg-white rounded-lg p-1">
                <FcGoogle />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
