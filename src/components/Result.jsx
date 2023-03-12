import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import QRCode from "react-qr-code";
import { pollCollectionRef } from "../firebase-config";
import { onSnapshot, query, where } from "firebase/firestore";
import { ResultShimmer } from "./Shimmer";
import { Banner } from "../utils/Banner";
import useOnline from "../utils/useOnline";
function OptionResult(props) {
  const { option, vote } = props;
  console.log(option, vote[option]);
  return (
    <div className="option-result m-4 p-2 border-2 ">
      <div className="capitalize md:text-xl border-b-2 option font-medium">
        {option}
      </div>
      <div className="votes font-bold m-2 text-xl">
        <span className="text-sky-500">Votes: </span>
        {vote[option] || 0}
      </div>
      {/* <div className="vote-bar m-2 border-y-2 h-4 rounded-md flex justify-start items-center">
        <div className="w-1/2 option-vote h-4  rounded-md bg-rose-500"></div>
      </div> */}
    </div>
  );
}
function Result() {
  const [poll, setPoll] = useState();
  const { pollid } = useParams();
  useEffect(() => {
    setTimeout(() => {
      getDocumentByQuery(pollid);
    }, 2000);
    return () => {
      getDocumentByQuery(pollid);
    };
  }, [pollid]);
  const getDocumentByQuery = async (id) => {
    const q = query(pollCollectionRef, where("id", "==", id));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((data) => {
        setPoll(data.data());
      });
    });
  };
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Check your internet Connection</h1>;
  }
  const fingerPrintCheck =
    JSON.parse(localStorage.getItem("fingerPrint")) || [];

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

  // will have to change this search from all polls
  return poll?.id === pollid ? (
    <div className="result-container my-6 w-full   flex md:flex-row flex-col justify-around  items-center">
      <div className="results w-4/5 md:w-1/2 min-h-max border-2 border-cyan-100 rounded flex flex-col">
        {fingerPrintCheck.includes(pollid) ? <Banner /> : null}
        <h2 className="mx-4 my-2  capitalize text-2xl md:text-3xl font-bold tracking-wider  underline-offset-4">
          {!fingerPrintCheck.includes(pollid) ? (
            <Link to={`/yourpoll/${poll.id}`} className=" underline">
              {poll.question} ?
            </Link>
          ) : (
            poll.question + "?"
          )}
        </h2>
        {poll.option.map((polls) => {
          return (
            <OptionResult
              key={uuidv4()}
              vote={poll.votes}
              option={polls.option}
            />
          );
        })}
      </div>
      <div className="sharing-links flex flex-col items-center h-18  justify-center my-4  ">
        <QRCode
          size={256}
          style={{ height: "auto", width: "50%" }}
          value={`https://your-poll.netlify.app/yourpoll/${pollid}`}
          viewBox={`0 0 256 256`}
        />
      </div>

      {/* no need tochange */}
      {/* <div className="share-link border-2 w-4/5 flex  justify-around m-4">
        <button>Share link</button>
        <button>Share link</button>
        <button>Share link</button>
      </div> */}
    </div>
  ) : (
    <ResultShimmer />
  );
}

export default Result;
