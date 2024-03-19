import React, { useState, useEffect } from "react";
import youtube from "../logos/Youtube.png";
import instagram from "../logos/Instagram.png";
import google from "../logos/Google.png";
import camera from "../logos/Camera.png";
import message from "../logos/Message.png";
import calculator from "../logos/calculator.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const openCam = () => {
    navigate("/home/cam");
  };

  return (
    <div>
      <div className="window h-svh bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="topbar  p-2 flex justify-between">
          <div className="logo p-2">
            <p className=" text-xl font-semibold">Atlas OS</p>
          </div>
          <p className="p-2 font-semibold">
            {time.getHours()}:
            {time.getMinutes() < 10
              ? `0${time.getMinutes()}`
              : time.getMinutes()}
            :
            {time.getSeconds() < 10
              ? `0${time.getSeconds()}`
              : time.getSeconds()}
          </p>
        </div>
        <div className="apps text-semibold">
          <div className="app">
            <img src={camera} onClick={openCam} alt="" srcset="" />
            <p>Camera</p>
          </div>
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
            <img src={message} alt="" srcset="" />
            <p>Message</p>
          </div>
        </div>
        <div className="taskbar flex justify-center items-center w-100">
          <div className="content flex justify-center items-center pr-2 pl-2 m-2  rounded-lg text-white ">
            <div className="app m-1">
              <img src={camera} onClick={openCam} alt="" srcset="" />
            </div>
            <div className="app m-1">
              <img src={youtube} alt="" srcset="" />
            </div>
            <div className="app m-1">
              <img src={instagram} alt="" srcset="" />
            </div>
            <div className="app m-1">
              <img src={google} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
