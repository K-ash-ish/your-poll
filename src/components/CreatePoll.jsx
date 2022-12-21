import React, { useState } from "react";
import Options from "./Options";
function CreatePoll() {
  const [options, setOptions] = useState([1, 2]);
  const [poll, setPoll] = useState({
    question: "",
    options: {},
  });
  function addOptions(event) {
    event.preventDefault();
    setOptions((prevValue) => {
      let nextValue = prevValue.length + 1;
      return [...prevValue, nextValue];
    });
  }
  return (
    <div className="w-full min-h-screen border-2  ">
      <form action="" className="my-10 flex flex-col  items-center">
        <label className="  md:w-1/2 w-3/4 my-2" htmlFor="">
          <p className="text-xl md:text-2xl"> Your Question ? </p>
          <textarea
            className="question border-2 w-full rounded-md md:h-24 h-20 px-4 py-4 my-3"
            type="text"
          />
        </label>
        {options.map((value) => {
          return <Options option={value} />;
        })}
        <div className=" w-3/4 mb-8 md:w-1/2 flex justify-between">
          <button
            onClick={addOptions}
            className="  btn-add border-2 rounded-md py-1 px-3 text-sm md:font-medium "
          >
            More Options{" "}
            <span className="text-sky-500 text-xl font-extrabold"> + </span>{" "}
          </button>
          <button
            className="  btn-create text-red-500 border-2 rounded-md py-2 px-3 text-sm md:font-medium underline "
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
