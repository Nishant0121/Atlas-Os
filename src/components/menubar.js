import React, { useState, useEffect, useContext } from "react";

import { ModeContext } from "../contex.js";

export default function MenuBar() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [battery, setBattery] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((batteryData) => {
        setBattery(batteryData);
      });
    } else {
      console.warn("Battery Status API is not supported on this browser.");
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setTime, setDate]);

  // Function to format time in 12-hour format
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const month = (date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`menubar backdrop-blur-md absolute top-0 right-0 border h-svh z-200 w-100 ${
        isDarkMode ? "bg-dark/[0.65] text-light" : "bg-light/5 text-dark"
      }`}
    >
      <div className=" relative top-10 px-4">
        <div>
          <p>
            <p className="p-1 font-semibold text-left text-3xl">
              {formatTime(time)}
            </p>
            <p className="date text-left">
              {date.getDate()} {month(date)} {date.getFullYear()}
            </p>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="border rounded-xl py-4">wifi</div>
          <div className="border rounded-xl py-4">Hotspot</div>
        </div>
        <div>f</div>
        <div className="flex justify-center items-center">
          <label class="flex w-fit items-center mx-2 cursor-pointer border rounded-full">
            <input type="checkbox" onClick={toggleMode} class="sr-only peer" />
            <div class="relative w-9 h-5 bg-gray-200  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <div className=" text-xs font-medium text-gray-700 dark:text-gray-300">
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
