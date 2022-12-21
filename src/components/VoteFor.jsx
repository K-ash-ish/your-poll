import React from "react";
function VoteFor(props) {
  const { optionNO, option } = props;
  return (
    <div className="options my-4 ">
      <div className="option md:text-xl  flex items-center border-b-2  pb-4">
        <p className=" w-28 ">Option {optionNO}:</p>
        <div className="vote  w-full flex justify-between items-center">
          <p className=" ml-6">{option}</p>
          <button className="btn-vote border-2 px-3 py-1 font-medium ">
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
export default VoteFor;
