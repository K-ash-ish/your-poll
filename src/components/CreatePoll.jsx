import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { generatePath, useNavigate } from "react-router-dom";
import { pollCollectionRef } from "../firebase-config";
import { addDoc } from "firebase/firestore";
function Options(props) {
  const { option, handleInput } = props;
  return (
    <label className="options  md:w-1/2 w-3/4 my-2" htmlFor="">
      <p className="md:text-xl text-base "> Option : {option}</p>
      <input
        className="border-2 w-full rounded-md md-h-10 h-8 px-4 py-6 my-3"
        type="text"
        name={option}
        onChange={handleInput}
        required
      />
    </label>
  );
}
function CreatePoll() {
  const [newPoll, setNewPoll] = useState("");
  const [option, setOptions] = useState([1, 2]);
  const navigate = useNavigate();
  function addOptions(event) {
    event.preventDefault();
    setOptions((prevValue) => {
      let nextValue = prevValue.length + 1;
      return [...prevValue, nextValue];
    });
  }
  function handleInput(event) {
    const { name, value } = event.target;
    setNewPoll((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    const uniqueId = uuidv4();
    const pollOption = [];
    const votes = [];
    option.map((option) => {
      const voteKey = newPoll[option];
      const vote = {
        [voteKey]: 0,
      };
      const newOption = {
        option: newPoll[option],
      };
      votes.push(vote);
      return pollOption.push(newOption);
    });
    //adding to database
    addDoc(pollCollectionRef, {
      id: uniqueId,
      question: newPoll.question,
      option: pollOption,
      votes: votes,
    }).catch((err) => {
      console.log(err);
    });
    uniqueId &&
      navigate(generatePath("/yourpoll/:pollid", { pollid: uniqueId }));
    // navigate("yourpoll");
    // console.log(newQuestion);
    // cant access redux state just after dispatching
    // dispatch(polls(newQuestion));
  }

  return (
    <div className="w-full border-2  ">
      <form
        action=""
        onSubmit={handleClick}
        className="my-10 flex flex-col  items-center"
      >
        <label className="  md:w-1/2 w-3/4 my-2" htmlFor="">
          <p className="text-xl md:text-2xl"> Your Question ? </p>
          <textarea
            className="question border-2 w-full rounded-md md:h-24 h-20 px-4 py-4 my-3"
            type="text"
            name="question"
            onChange={handleInput}
            required
          />
        </label>
        {option.map((value, index) => {
          return (
            <Options
              // key={uuidv4()}
              // when using unique keys generator it rerenders the component and also when using
              // component function inside the parent component the component function should be on top
              key={index}
              handleInput={handleInput}
              option={value}
            />
          );
        })}
        <div className=" w-3/4 mb-8 md:w-1/2 flex justify-between">
          <button
            onClick={addOptions}
            className=" tracking-wide btn-add border-2 rounded-md py-1 px-3 text-sm md:font-medium flex justify-center items-center cursor-cell hover:border-black duration-300 ease-in"
          >
            More Options{" "}
            <span className="ml-1 text-sky-500 text-xl font-extrabold ">
              {" "}
              +{" "}
            </span>{" "}
          </button>
          <input
            className="  btn-create tracking-wide text-rose-500 border-2 rounded-md py-2 px-3 text-sm md:font-medium underline hover:border-rose-500 hover:text-black duration-300 ease-in "
            type="submit"
            value="CreatePoll"
          />
        </div>
      </form>
    </div>
  );
}
export default CreatePoll;
