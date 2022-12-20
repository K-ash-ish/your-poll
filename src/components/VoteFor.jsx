import React from "react";
function VoteFor(props) {
  const { optionNO, option } = props;
  return (
    <div className="options my-4 ">
      <div className="option flex ">
        <p className="text-xl">Option {optionNO}:</p>
        <p className="text-xl ml-10">{option}</p>
      </div>
      <div className="vote border-b-2 flex justify-between items-center pb-4">
        <p>Number of votes here</p>
        <button className="btn-vote border-2 px-3 py-1 font-medium ">
          Vote
        </button>
      </div>
    </div>
  );
}
export default VoteFor;
