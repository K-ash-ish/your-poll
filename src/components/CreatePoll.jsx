import React from "react";

function CreatePoll() {
  return (
    <div className="w-full border-2">
      <h2 className="text-3xl  font-medium">Create Poll</h2>
      <form action="" className="flex flex-col  items-center">
        <label className="  w-2/4 my-2" htmlFor="">
          <p className="text-2xl"> Question for your Poll? </p>
          <textarea
            className="border-2 w-full rounded-md h-24 px-4 py-4 my-3"
            type="text"
          />
        </label>
        <label className="  w-2/4 my-2" htmlFor="">
          <p className="text-2xl"> Option 1: </p>
          <input
            className="border-2 w-full rounded-md h-10 px-4 py-6 my-3"
            type="text"
          />
        </label>
        <label className="  w-2/4 my-2" htmlFor="">
          <p className="text-2xl"> Option 2: </p>
          <input
            className="border-2 w-full rounded-md h-10 px-4 py-6 my-3"
            type="text"
          />
        </label>
        <button className="border-2 rounded-md py-1 px-3 my-2 font-medium ">
          Add More Options <span className="text-sky-500 text-xl font-extrabold"> + </span>{" "}
        </button>
        <button
          className="border-2 rounded-md py-1 px-3 my-2 font-medium "
          type="submit"
        >
          Create Poll
        </button>
      </form>
    </div>
  );
}
export default CreatePoll;
