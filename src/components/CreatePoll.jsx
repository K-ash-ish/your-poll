import React from "react";
import Options from "./Options";
function CreatePoll() {
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
        <Options option="1" />
        <Options option="2" />
        <div className="mb-8 w-1/2 flex justify-between">
          <button className="  btn-add border-2 rounded-md py-1 px-3 my-2 font-medium ">
            More Options{" "}
            <span className="text-sky-500 text-xl font-extrabold"> + </span>{" "}
          </button>
          <button
            className="  btn-create border-2 rounded-md py-2 px-3 my-2 font-medium underline "
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("click");
            }}
          >
            Create Poll
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreatePoll;
