import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BurgerMenu.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebase";
import { motion, AnimatePresence } from "framer-motion";

import { Seat, Donut, Contact } from "../icons/icons";
import Alexis from "../icons/Alexis.png";

function BurgerMenu({ showBM, setShowBM }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleClick = (address) => {
    setShowBM(false);
    navigate(address);
  };
  return (
    <motion.div className="">
      {showBM && (
        <div className="bm-container-div">
          <AnimatePresence>
            <div
              className="bm-overlay"
              onClick={() => {
                setShowBM(false);
              }}
            ></div>
          </AnimatePresence>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: showBM ? 0 : "-100%" }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="bm-menu"
          >
            <ul className="bm-elemnts-list">
              <li onClick={() => handleClick("/")} className="bm-elemnt">
                <span className="">{Seat}</span>
                <span className="bm-elemnt-text">Booking</span>
              </li>
              <li onClick={() => handleClick("/about")} className="bm-elemnt">
                <span>{Donut}</span>
                <span className="bm-elemnt-text">Life at BBB</span>
              </li>
              <li className="bm-elemnt">
                <span>{Contact}</span>
                <span className="bm-elemnt-text">Contact us</span>
              </li>
              <li className="bm-elemnt">
                <span>
                  <img className="bm-elemnt-icon" src={Alexis} alt="" />
                </span>
                <span className="bm-elemnt-text">Alexis Omega</span>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default BurgerMenu;
