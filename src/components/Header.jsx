import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { xLogOut } from "../styles/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/BurgerMenu.css";
import { FcMenu } from "react-icons/fc";

function Header({ showBM, setShowBM }) {
  const [user] = useAuthState(auth);
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

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
      <FcMenu
        onClick={() => {
          if (user) {
            setShowBM(!showBM);
          }
        }}
        style={{ cursor: "pointer" }}
        size="1.3rem"
      />
      <h3>BBB</h3>

      <div className="icons-div">
        {user && <img className="profile-pic" src={photoURL} alt="" />}
        {user && <button onClick={() => handleLogOut()}>{xLogOut}</button>}
      </div>
    </header>
  );
}

export default Header;
