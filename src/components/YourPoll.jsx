import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import VoteFor from "./VoteFor";
import Header from "./Header";
import { pollCollectionRef } from "../firebase-config";
import { getDocs, query, where } from "firebase/firestore";
function YourPoll() {
  const [poll, setPoll] = useState();
  const { pollid } = useParams();
  useEffect(() => {
    getDocumentByQuery(pollid);
  }, [pollid]);
  const getDocumentByQuery = async (id) => {
    const q = query(pollCollectionRef, where("id", "==", id));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => {
      setPoll(data.data());
    });
  };

  // will have to change this and get from all polls
  // const [pollResult, setPollResult] = useState();
  // const newPoll = JSON.parse(localStorage.getItem("newPoll")) || "";
  // checking if id matches any entry from the database or not

  // localStorage.setItem("newPoll", JSON.stringify(newPoll));
  return !poll?.id ? (
    <React.Fragment>
      <h1 className="my-6 text-2xl">Loading...</h1>
      <p>(Check your link. If taking too much time)</p>
    </React.Fragment>
  ) : (
    <>
      <Header />
      <div className="  w-full my-6 flex flex-col items-center justify-center md:flex-row md:justify-around ">
        <div className="bg-slate-50 poll border-2 border-cyan-100  rounded md:p-6 py-4 px-2 md:w-1/2 w-11/12 my-2">
          <p className=" border-b-4 border-red-400 tracking-wide leading-relaxed md:text-2xl text-xl pb-2 px-2 mb-10 md:mb-14">
            {poll.question} ?
          </p>
          {poll.option.map((option, index) => {
            return (
              <VoteFor
                key={uuidv4()}
                optionNo={index + 1}
                option={option.option}
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
      </div>
    </>
  );
}
export default YourPoll;
