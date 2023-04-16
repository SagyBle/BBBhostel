import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { xLogOut } from "../styles/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [user] = useAuthState(auth);
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  // const [value, setValue] = useState("");
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <header className="header-div">
      <h3>BBB</h3>
      {/* {user && <h3>BBB</h3>} */}
      {/* {!user && <h3>BBB Hostel & Resturant</h3>} */}
      <div className="icons-div">
        {user && <img className="profile-pic" src={photoURL} alt="" />}
        {user && <button onClick={() => handleLogOut()}>{xLogOut}</button>}
      </div>
    </header>
  );
}

export default Header;
