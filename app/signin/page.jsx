"use client";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../components/signup/SignUpForm";

const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div className="mb-10">
        <h1>Sign In page</h1>
        <button onClick={logGoogleUser} className="btn">
          Sign In With Google Popup
        </button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default signIn;
