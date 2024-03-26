import React, { useState, useEffect, useContext } from "react";

import { ModeContext } from "../contex.js";

export default function StatusBar() {
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
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
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
      className={`topbar flex justify-between ${
        isDarkMode ? "bg-dark text-light" : " bg-light text-dark"
      }`}
    >
      <div className="logo flex items-center justify-center">
        <p className="p-1 font-semibold">{formatTime(time)}</p>
        <p className="date">
          || {date.getDate()} {month(date)} {date.getFullYear()}
        </p>
      </div>
      <div>
        {battery && (
          <p className=" flex items-center justify-center m-2">
            {Math.round(battery.level * 100)}%{" "}
            {battery.charging ? "(Charging)" : ""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        )}
      </div>
      <button
        className="burger absolute top-0 right-0 p-5 rounded-lg text-white bg-dark transition duration-150 ease-in-out border z-10"
        onClick={toggleMenu}
      ></button>
      {isOpen && (
        <div
          className={`menubar absolute top-0 right-0 border h-svh z-200 w-100 ${
            isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <div>d</div>
          <div>s</div>
          <div>f</div>
          <div>
            <button onClick={toggleMode}>dark</button>
          </div>
        </div>
      )}
    </div>
  );
}
