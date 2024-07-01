import React, { useEffect } from "react";
import { useNavigate, generatePath, useParams } from "react-router-dom";
import { database } from "../firebase-config";
import { doc, increment, updateDoc } from "firebase/firestore";

function VoteFor(props) {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { pollid } = useParams();
  const { option, optionNo, docId } = props;
  const fingerPrintCheck =
    JSON.parse(localStorage.getItem("fingerPrint")) || [];
  const navigate = useNavigate();
  function voteCount(e) {
    const votedFor = e.target.previousSibling.innerText.toLowerCase();
    console.log(votedFor);
    const vote = [{ yes: 4 }, { no: 3 }, { nahh: 0 }];
    const index = vote.findIndex((item) => votedFor in item);
    console.log(vote, index);
    console.log();

    // console.log(vote[index][voteFor], vote, voteFor);
    const pollRef = doc(database, "allPolls", docId);
    const localArray = JSON.parse(localStorage.getItem("fingerPrint")) || [];

    localArray.push(pollid);
    localStorage.setItem("fingerPrint", JSON.stringify(localArray));
    console.log(pollRef);
    updateDoc(pollRef, {
      [`votes.${votedFor}`]: increment(1),
      // "votes."
    })
      .then(() => {
        navigate(generatePath("/yourpoll/:pollid/results", { pollid: pollid }));
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    if (fingerPrintCheck.includes(pollid)) {
      return navigate("/yourpoll/" + pollid + "/results");
    }
  });
  return (
    <div className="options my-4 border-b-2 border-slate-100">
      <div className="option md:text-xl  flex items-center  pb-4">
        <div
          className=" vote w-full flex justify-between items-center"
          optionno={optionNo}
        >
          <p className=" mx-6  w-full bg-cyan-100 hover:bg-cyan-200 transitions-color duration-300 ease-in p-4">
            {option}
          </p>
          <button
            onClick={voteCount}
            className=" tracking-widest py-3 px-4 font-semibold text-sm bg-cyan-300 text-white rounded-md shadow-sm hover:text-black ease-in duration-200 "
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}
export default VoteFor;
