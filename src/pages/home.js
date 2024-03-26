import React from "react";
import youtube from "../logos/Youtube.png";
import instagram from "../logos/Instagram.png";
import google from "../logos/Google.png";
import camera from "../logos/Camera.png";
import expense from "../logos/expense.png";
import calculator from "../logos/calculator.png";
import fitness from "../logos/fitness.png";
import dev from "../logos/dev.jpg";
import { Link } from "react-router-dom";
import StatusBar from "../components/statusbar.js";
import TaskBar from "../components/taskbar.js";

export const Home = () => {
  return (
    <div>
      <div className="window h-svh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <StatusBar />
        <div className="apps text-semibold">
          <Link to={"/home/cam"} className="app">
            <img src={camera} alt="" srcset="" />
            <p>Camera</p>
          </Link>
          <div className="app">
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="" srcset="" />
            </a>
            <p>YouTube</p>
          </div>
          <div className="app">
            <a href="https://www.google.co.in/">
              <img src={google} alt="" srcset="" />
            </a>
            <p>Google</p>
          </div>
          <div className="app">
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="" srcset="" />
            </a>
            <p>Instagram</p>
          </div>
          <div className="app">
            <a href="https://nishant0121.github.io/Calculator/">
              <img src={calculator} alt="" srcset="" />
            </a>
            <p>Calculator</p>
          </div>
          <div className="app">
            <a href="https://fitness-app-91739.web.app">
              <img src={fitness} alt="" srcset="" />
            </a>
            <p>Bhago</p>
          </div>
          <div className="app">
            <a href="https://buget-manager.web.app/">
              <img src={expense} alt="" srcset="" />
            </a>
            <p>Expense</p>
          </div>
          <div className="app">
            <a href="https://portfolio-nishant.vercel.app/">
              <img src={dev} alt="" srcset="" />
            </a>
            <p>About developer</p>
          </div>
        </div>
        <TaskBar />
      </div>
    </div>
  );
};
