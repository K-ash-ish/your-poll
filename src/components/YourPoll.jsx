import React from "react";
import VoteFor from "./VoteFor";
function YourPoll() {
  return (
    <div className="w-full min-h-screen my-10 flex justify-center  items-center">
      <div className="poll border-2  rounded p-6 md:w-1/2  my-2">
        <p className="md:text-2xl text-xl underline decoration-red-500 underline-offset-8 mb-10 md:mb-14">
          What is your height?
        </p>
        <VoteFor optionNO="1" option="Height is 1.2m" />
        <VoteFor optionNO="2" option="Height is 1.0m" />
        <VoteFor optionNO="3" option="Height is 1.1m" />
        <VoteFor optionNO="4" option="Height is 1.4m" />
      </div>
    </div>
  );
}
export default YourPoll;
