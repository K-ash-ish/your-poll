import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import CreatePoll from "./components/CreatePoll";

function App() {
  return (
    <div className="box-border border-2 border-red-300 flex flex-col flex-wrap items-center ">
      <div className="header text-4xl my-8">
        <FontAwesomeIcon className="text-sky-500" icon={faSquarePollVertical} />
        <h1 className="inline font-bold tracking-wide">
          {" "}
          Your <span className="text-sky-500"> Poll </span>
        </h1>
      </div>
      <CreatePoll />
    </div>
  );
}

export default App;
