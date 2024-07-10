import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StatusBar from "../components/statusbar.js";
import TaskBar from "../components/taskbar.js";
import { motion } from "framer-motion";
import apps from "../apps.json";

import { ModeContext } from "../contex.js";

export const Home = () => {
  const { isDarkMode } = useContext(ModeContext);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <div
        className={`window h-svh ${
          isDarkMode ? "bg-img-dark text-light" : "bg-img-light text-dark"
        }`}
      >
        <StatusBar />

        <motion.div
          className="apps text-semibold"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {apps.map((item, index) => (
            <motion.div className="app" variants={items}>
              <Link
                className=" flex items-center justify-center flex-col"
                to={`${item.link}`}
              >
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <TaskBar />
      </div>
    </div>
  );
};
