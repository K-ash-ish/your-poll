import React from "react";
import VoteFor from "./VoteFor";
import Header from "./Header";
function YourPoll() {
  return (
    <div className="w-full  my-10 flex flex-col  items-center">
      <div className="poll w-1/2  my-2">
        <p className="text-2xl">What is your height?</p>

        <VoteFor optionNO="1" option="Height is 1.2m" />
        <VoteFor optionNO="1" option="Height is 1.2m" />
        <VoteFor optionNO="1" option="Height is 1.2m" />
        <VoteFor optionNO="2" option="Height is 1.4m" />
      </div>
    </div>
  );
}
export default YourPoll;
