import React, { useState } from "react";
import Options from "./Options";
function CreatePoll() {
  const [options, setOptions] = useState([1, 2]);
  function addOptions(event) {
    event.preventDefault();
    setOptions((prevValue) => {
      let nextValue = prevValue.length + 1;
      return [...prevValue, nextValue];
    });
    console.log(options);
  }
  return (
    <div className="w-full border-2 ">
      <form action="" className="flex flex-col  items-center">
        <label className="  w-2/4 my-2" htmlFor="">
          <p className="text-2xl"> Your Question ? </p>
          <textarea
            className="question border-2 w-full rounded-md h-24 px-4 py-4 my-3"
            type="text"
          />
        </label>
        {options.map((value) => {
          return <Options option={value} />;
        })}
        <div className="mb-8 w-1/2 flex justify-between">
          <button
            onClick={addOptions}
            className="  btn-add border-2 rounded-md py-1 px-3 my-2 font-medium "
          >
            More Options{" "}
            <span className="text-sky-500 text-xl font-extrabold"> + </span>{" "}
          </button>
          <button
            className="  btn-create border-2 rounded-md py-2 px-3 my-2 font-medium underline "
            type="submit"
          >
            Create Poll
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreatePoll;
