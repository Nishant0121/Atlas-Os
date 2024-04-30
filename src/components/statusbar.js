import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { ModeContext } from "../contex.js";
import MenuBar from "./menubar.js";

export default function StatusBar() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [battery, setBattery] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useContext(ModeContext);

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

  return (
    <div
      className={`relative topbar flex justify-between ${
        isDarkMode ? " text-light" : "text-dark"
      }`}
    >
      <div className="logo flex items-center justify-center">
        <p className="p-1 font-semibold">{formatTime(time)}</p>
        <p className="date md: hidden">
          || {date.getDate()} {month(date)} {date.getFullYear()}
        </p>
      </div>
      <motion.button
        className="burger border absolute left-50 px-4 rounded-lg bg-transparent transition duration-150 ease-in-out z-10 "
        onClick={toggleMenu}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ ease: "easeOut" }}
      >
        <div className={`arrow ${isDarkMode ? "text-light" : "text-dark"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
          </svg>
        </div>
      </motion.button>
      <div>
        {battery && (
          <p className=" flex items-center justify-center m-2">
            {Math.round(battery.level * 100)}%{" "}
            {battery.charging ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              ""
            )}
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

      {isOpen && <MenuBar />}
    </div>
  );
}
