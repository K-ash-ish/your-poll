import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../404page.png";
// use route error only works with createRouteBrowser
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen border-2 flex flex-col justify-center items-center ">
      <img className="w-1/2 h-1/2" src={logo} alt="" />
      <button
        onClick={() => navigate("/")}
        className="border-black border-2 p-1 my-8"
      >
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
