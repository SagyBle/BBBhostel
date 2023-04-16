import React, { useState } from "react";
import { auth, db } from "../../src/pages/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Add from "../icons/addicon.png";
import "../styles/RegisterLogin.css";
import { useNavigate } from "react-router-dom";
import { displayName } from "react-tinder-card";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setDisplayName(`${firstName} ${lastName}`);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setDisplayName(`${firstName} ${lastName}`);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          // Update the user's display name
          const user = res.user;
          updateProfile(user, {
            displayName: displayName,
          });
          navigate("/");
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            email,
            displayName,
          });
        })
        .then(() => {
          console.log("User registered with display name:", displayName);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="first-name">first name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="last-name">last name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
