import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export const Cam = () => {
  const webRef = useRef(null);
  const navigate = useNavigate();
  const captureImage = () => {
    // Get the base64-encoded image data from the webcam
    const imageSrc = webRef.current.getScreenshot();

    // Create a link element to download the image
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "webcam_image.png"; // Set the desired filename
    link.click();
  };
  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className=" flex flex-col h-screen w-screen  bg-slate-800 text-white justify-center items-center">
      <div className="camera min-h-[550px]  flex flex-col justify-center items-center border p-2 rounded-xl border-gray-200">
        <div className="top-bar flex justify-between  p-2 m-2 items-center w-100 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
          <h1>Camera</h1>
          <IoMdClose style={{ fontSize: "2rem" }} onClick={goToHome} />
        </div>
        <Webcam ref={webRef} className=" border rounded-xl shadow-lg" />
        <button
          onClick={captureImage}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 mb-2"
        >
          Download Image
        </button>
      </div>
    </div>
  );
};
