import React from "react";
import "../index.css";
import phone from "../images/phone.png";
import { useNavigate } from "react-router-dom";

export const Land = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <section className="bg-gray-900 text-white h-svh flex item-centre">
        <div className="mx-auto max-w-screen-xl px-4 py-32 flex justify-around  lg:flex lg:h-screen lg:items-center">
          <div className=" max-w-3xl flex items-center flex-col justify-between p-3 m-2  text-center ">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                onClick={goToHome}
              >
                Get Started
              </button>

              <button
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="phone w-40 flex items-center flex-col justify-center p-3 m-2">
            <img className="img" src={phone} alt="phone" srcset="" />
          </div>
        </div>
      </section>
    </div>
  );
};
