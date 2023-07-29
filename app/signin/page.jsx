"use client"

import { signInWithGooglePopup} from "../../utils/firebase/firebase.utils"

const signIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }



  return <div>
    <h1>Sign In page</h1>
    <button onClick={logGoogleUser} className="btn">
      Sign In With Google Popup
    </button>
  </div>



  }


  export default signIn;
