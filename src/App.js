import React from "react";
import "./App.css";
import RegisterLogin from "./pages/RegisterLogin";
import GoogleLogIn from "./components/GoogleLogIn";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="GoogleLogIn" element={<GoogleLogIn />} />
          <Route path="RegisterLogin" element={<RegisterLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
