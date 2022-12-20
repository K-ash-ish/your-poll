import React from "react";

function Options(props) {
  const {option} = props;
  return (
      <label className="options  w-2/4 my-2" htmlFor="">
        <p className="text-xl"> Option : {option}</p>
        <input
          className="border-2 w-full rounded-md h-10 px-4 py-6 my-3"
          type="text"
        />
      </label>
  );
}

export default Options;
