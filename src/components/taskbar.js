import React, { useContext } from "react";
import youtube from "../logos/Youtube.png";
import instagram from "../logos/Instagram.png";
import google from "../logos/Google.png";
import camera from "../logos/Camera.png";
import { Link } from "react-router-dom";
import { ModeContext } from "../contex.js";

export default function TaskBar() {
  const { isDarkMode } = useContext(ModeContext);
  return (
    <div className="taskbar flex justify-center items-center w-100">
      <div
        className={`content flex justify-center backdrop-blur-md items-center pr-2 pl-2 m-2  rounded-lg ${
          isDarkMode ? "bg-dark/5 text-light" : "bg-light/55 text-dark"
        }`}
      >
        <Link to={"/home/cam"} className="app m-1">
          <img src={camera} alt="" srcset="" />
        </Link>
        <div className="app m-1">
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="" srcset="" />
          </a>
        </div>
        <div className="app m-1">
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="" srcset="" />
          </a>
        </div>
        <div className="app m-1">
          <a href="https://www.google.co.in/">
            <img src={google} alt="" srcset="" />
          </a>
        </div>
      </div>
    </div>
  );
}
