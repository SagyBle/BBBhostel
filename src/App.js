import React, { useState } from "react";
import "./App.css";
import RegisterLogin from "./pages/RegisterLogin";
import GoogleLogIn from "./components/GoogleLogIn";
import Home from "./pages/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/BurgerMenu.css";

import { Seat, Donut, Contact } from "./icons/icons";
import Alexis from "./icons/Alexis.png";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  const [showBM, setShowBM] = useState(false);

  return (
    <BrowserRouter>
      <Header showBM={showBM} setShowBM={setShowBM} />
      <BurgerMenu showBM={showBM} setShowBM={setShowBM} />

      <Routes>
        <Route path="/">
          <Route index element={<Home showBM={showBM} />} />
          <Route path="/about" element={<About showBM={showBM} />} />
          {/* <Route path="GoogleLogIn" element={<GoogleLogIn />} /> */}
          {/* <Route path="RegisterLogin" element={<RegisterLogin />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
