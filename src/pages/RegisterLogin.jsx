import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

function RegisterLogin() {
  const [showLogin, setShowLogin] = useState(true);
  const handleLogin = () => {
    setShowLogin(true);
  };
  const handleregister = () => {
    console.log("register");
    setShowLogin(false);
  };
  return (
    <div>
      <h1>RegisterLogin</h1>
      <button onClick={handleLogin}>הירשם</button>
      <button onClick={handleregister}>התחבר</button>
      {showLogin ? <Register /> : <Login />}
    </div>
  );
}

export default RegisterLogin;
