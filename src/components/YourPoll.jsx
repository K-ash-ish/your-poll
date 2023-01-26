import React from "react";
import VoteFor from "./VoteFor";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
function YourPoll() {
  // const newPoll = useSelector((state) => state.question);
  const newPoll = JSON.parse(localStorage.getItem("newPoll")) || "";
  // checking if id matches any entry from the database or not
  const { pollid } = useParams();
  // localStorage.setItem("newPoll", JSON.stringify(newPoll));
  return (
    <>
      {newPoll.id === pollid ? (
        <div className=" w-full min-h-screen my-10 flex justify-center  items-center">
          <div className="bg-slate-50 poll border-2 border-cyan-100 rounded md:p-6 py-4 px-2 md:w-1/2 w-11/12  my-2">
            <p className=" border-b-4 border-red-400 tracking-wide leading-relaxed md:text-2xl text-xl pb-2 px-2 mb-10 md:mb-14">
              {newPoll.question}
            </p>
            {newPoll.options.map((option, index) => {
              return (
                <VoteFor key={uuidv4()} optionNo={index + 1} option={option} />
              );
            })}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
export default YourPoll;
