import React, { useState } from "react";
import { auth } from "../../src/pages/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/RegisterLogin.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login:", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <h2>Login</h2>
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
        {/* <div>
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img className="add-icon" src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
        </div> */}
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Register;
