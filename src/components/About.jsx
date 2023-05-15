import React from "react";
// import {} from "../icons/";
import BartalSita from "../images/BartalSita.jpg";
import BlechSmoking from "../images/BlechSmoking.jpg";
import KorenEats from "../images/KorenEats.jpg";
import PingPongMatzriBitton from "../images/PingPongMatzriBitton.jpeg";
import SonyYuval from "../images/SonyYuval.jpeg";
import WorkingYahalom from "../images/WorkingYahalom.jpeg";
import Carla from "../images/Carla.png";
import CarlaImage from "../images/CarlaImage.jpeg";
import {
  DogsFriendly,
  Coding,
  PingPong,
  Smoking,
  Food,
  PlayStation,
  Home,
} from "../icons/icons";

import "../styles/About.css";
import { useNavigate } from "react-router-dom";

function About({ showBM }) {
  const navigate = useNavigate();
  return (
    <div
      className={`container about-container ${showBM ? "scroll-disabled" : ""}`}
    >
      <h1 className="white">Life at BBB</h1>

      <div className="about-div">
        <img className="carla-icon" src={Carla} alt="" />
        <span className="white">Carla Lovers</span>

        <img className="about-image" src={CarlaImage} alt="bartal-sita" />
        <div className="white"></div>
      </div>
      <div className="about-div">
        <span>{DogsFriendly}</span>
        <span className="white">Dogs Friendly</span>

        <img className="about-image" src={BartalSita} alt="bartal-sita" />
        <div className="white"></div>
      </div>
      <div className="about-div">
        <span>{Food}</span>
        <span className="white">Food Allowed</span>

        <img className="about-image" src={KorenEats} alt="bartal-sita" />
      </div>
      <div className="about-div">
        <span>{Smoking}</span>
        <span className="white">Smoking Freely</span>

        <img className="about-image" src={BlechSmoking} alt="bartal-sita" />
      </div>
      <div className="about-div">
        <span>{PingPong}</span>
        <span className="white">Official Bichiunable</span>

        <img
          className="about-image"
          src={PingPongMatzriBitton}
          alt="bartal-sita"
        />
      </div>
      <div className="about-div">
        <span>{Coding}</span>
        <span className="white">Open Space</span>

        <img className="about-image" src={WorkingYahalom} alt="bartal-sita" />
      </div>
      <div className="about-div">
        <span>{PlayStation}</span>
        <span className="white">Game Zone</span>

        <img className="about-image" src={SonyYuval} alt="bartal-sita" />
      </div>
    </div>
  );
}

export default About;
