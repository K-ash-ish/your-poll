import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import NotFound from "./NotFound";
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
function Result() {
  const currentPoll = useSelector((state) => state.question);
  // const currentPoll = {
  //   id: "acb4d890-d5be-4cc3-aa5d-f9aa8f76a74f",
  //   question: "asqw",
  //   options: [
  //     {
  //       option: "qaszx",
  //       vote: 0,
  //     },
  //     {
  //       option: "zxzxzx",
  //       vote: 0,
  //     },
  //     {
  //       option: "qaszx",
  //       vote: 0,
  //     },
  //     {
  //       option: "zxzxzx",
  //       vote: 0,
  //     },
  //   ],
  // };

  const { pollid } = useParams();
  // will have to change this search from all polls
  return (
    <>
      <Header />
      {currentPoll.id === pollid ? (
        <div className="result-container my-6 w-full   flex flex-col justify-center  items-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider mb-8 underline decoration-rose-500 underline-offset-4">
            Result
          </h2>
          <div className="results w-4/5 md:w-1/2 min-h-max border-2 border-cyan-100 rounded flex flex-col">
            {currentPoll.options.map((poll) => {
              return (
                <OptionResult
                  key={uuidv4()}
                  vote={poll.vote}
                  option={poll.option}
                />
              );
            })}
          </div>
          {/* no need tochange */}
          {/* <div className="share-link border-2 w-4/5 flex  justify-around m-4">
        <button>Share link</button>
        <button>Share link</button>
        <button>Share link</button>
      </div> */}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Result;
