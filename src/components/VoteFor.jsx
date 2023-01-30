import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voted } from "../features/question/qustionSlice";
function VoteFor(props) {
  const dispatch = useDispatch();
  const votes = useSelector(state=> state.question.options);
  
  function voteCount(e){
    const voteFor = e.target.previousSibling.innerText;
    dispatch(voted(voteFor));
  }
  const { option, optionNo } = props;
  return (
    <div className="options my-4 border-b-2 border-slate-100">
      <div className="option md:text-xl  flex items-center  pb-4">
        <div className=" vote w-full flex justify-between items-center"  optionno = {optionNo}>
          <p className=" mx-6  w-full bg-cyan-100 hover:bg-cyan-200 transitions-color duration-300 ease-in p-4">{option}</p>
          <button
          onClick={voteCount}
           className=" tracking-widest py-3 px-4 font-semibold text-sm bg-cyan-300 text-white rounded-md shadow-sm hover:text-black ease-in duration-200 ">
            Vote
          </button>
        </div>
      </div>
      <p>{JSON.stringify(votes)}</p>
    </div>
  );
}
export default VoteFor;
