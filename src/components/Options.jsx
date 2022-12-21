import React from "react";

function Options(props) {
  const {option} = props;
  return (
      <label className="options  md:w-1/2 w-3/4 my-2" htmlFor="">
        <p className="md:text-xl text-base "> Option : {option}</p>
        <input
          className="border-2 w-full rounded-md md-h-10 h-8 px-4 py-6 my-3"
          type="text"
        />
      </label>
  );
}

export default Options;
