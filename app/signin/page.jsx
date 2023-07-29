"use client";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser} className="btn">
        Sign In With Google Popup
      </button>
    </div>
  );
};

export default signIn;
