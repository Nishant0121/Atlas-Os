import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StatusBar from "../components/statusbar.js";
import TaskBar from "../components/taskbar.js";

import apps from "../apps.json";

import { ModeContext } from "../contex.js";

export const Home = () => {
  const { isDarkMode } = useContext(ModeContext);

  console.log(apps);
  return (
    <div>
      <div
        className={`window h-svh ${
          isDarkMode ? "bg-img-dark text-light" : "bg-img-light text-dark"
        }`}
      >
        <StatusBar />

        <div className="apps text-semibold">
          {apps.map((item, index) => (
            <div className="app">
              <Link to={`${item.link}`}>
                <img src={item.img} alt="" srcset="" />
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
        <TaskBar />
      </div>
    </div>
  );
};
