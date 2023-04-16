import React from "react";
import { auth, provider } from "../pages/firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/GoogleLogIn.css";

function GoogleLogIn() {
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user);
    });
  };

  return (
    <div className="google-login-div">
      {/* {value ? <h3>value: {value}</h3> : <h3> !value: {value}</h3>} */}
      {/* {value && <button onClick={handleSignIn}>sign in with google</button>}
      {!value && <button onClick={handleSignOut}>logout</button>} */}
      <button onClick={handleSignIn} className="log-in-button">
        התחברות באמצעות גוגל
      </button>
      <span className="log-in-button-text">
        אין אחריות על המוצרים אותם תשאיר בעמדה, על זה שיהיה מישהו בבית ובכללי
        אין אחריות.
      </span>
    </div>
  );
}

export default GoogleLogIn;
