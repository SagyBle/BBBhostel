import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../src/pages/firebase";
// import { AuthContext } from "../components/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

import Booking from "../components/Booking";
import Header from "../components/Header";
import GoogleLogIn from "../components/GoogleLogIn";
import Footer from "../components/Footer";

function Home({ showBM }) {
  const [user] = useAuthState(auth);

  return (
    <div className={`container ${showBM ? "scroll-disabled" : ""}`}>
      {user ? <Booking /> : <GoogleLogIn />}

      <Footer />
    </div>
  );
}

export default Home;
