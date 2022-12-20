import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="w-full header text-4xl h-24 text-center flex justify-center items-center">
      <FontAwesomeIcon className="text-sky-500 mr-2" icon={faSquarePollVertical} />
      <h1 className="inline font-bold tracking-wide">
        {" "}
        Your <span className="text-sky-500"> Poll </span>
      </h1>
    </div>
  );
}
export default Header;
