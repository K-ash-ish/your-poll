import React from "react";
function Result() {
  function OptionResult(props) {
    const { option, vote } = props;
    return (
      <div className="option-result m-4 p-2 border-2 ">
        <div className="md:text-xl border-b-2 option font-medium">{option}</div>
        <div className="votes font-bold m-2">
          <span className="text-sky-500">Votes: </span>
          {vote}
        </div>
        <div className="vote-bar m-2 border-y-2 h-4 rounded-md flex justify-start items-center">
          <div className="w-1/2 option-vote h-4  rounded-md bg-rose-500"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="result-container border-2 w-full  my-10 flex flex-col justify-center  items-center">
      <h2 className="text-2xl md:text-4xl font-bold tracking-wider mb-8 underline decoration-rose-500 underline-offset-4">
        Result
      </h2>
      <div className="results w-4/5 md:w-1/2 min-h-max border-2 border-cyan-100 rounded flex flex-col">
        <OptionResult vote="24" option="Height is 1.24." />
        <OptionResult vote="24" option="Height is 1.10." />
        <OptionResult vote="24" option="Height is 1.54." />
      </div>
      {/* <div className="share-link border-2 w-4/5 flex  justify-around m-4">
        <button>Share link</button>
        <button>Share link</button>
        <button>Share link</button>
      </div> */}
    </div>
  );
}

export default Result;
