import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { generatePath, useNavigate } from "react-router-dom";
import { pollCollectionRef } from "../firebase-config";
import { addDoc } from "firebase/firestore";
import useOnline from "../utils/useOnline";
function Options(props) {
  const { option, handleInput } = props;
  return (
    <label className="options  md:w-1/2 w-3/4 my-2" htmlFor="">
      <p className="md:text-xl text-base ">{option}</p>
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
  const [pollDetails, setPollDetails] = useState([]);
  const [optionField, setOptionField] = useState(["Option 1", "Option 2"]);
  const navigate = useNavigate();

  function addNewOptionField(event) {
    event.preventDefault();
    setOptionField((prevValue) => {
      let newOption = prevValue.length + 1;
      newOption = "Option " + newOption;
      return [...prevValue, newOption];
    });
  }
  function handleInput(event) {
    const { name, value } = event.target;
    setPollDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleCreatePoll(event) {
    event.preventDefault();
    const uniqueId = uuidv4();
    const pollOption = [];
    const votes = {};

    optionField.map((option) => {
      const optionToVote = pollDetails[option];

      votes[optionToVote] = 0;

      return pollOption.push(pollDetails[option]);
    });

    //adding to database

    addDoc(pollCollectionRef, {
      id: uniqueId,
      question: pollDetails.question,
      option: pollOption,
      votes: votes,
    })
      .then(() =>
        navigate(generatePath("/yourpoll/:pollid", { pollid: uniqueId }))
      )
      .catch((err) => {
        console.log(err);
      });

    // navigate("yourpoll");
    // console.log(newQuestion);
    // cant access redux state just after dispatching
    // dispatch(polls(newQuestion));
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Check your internet Connection</h1>;
  }

  return (
    <div className="w-full   ">
      <form
        action=""
        onSubmit={handleCreatePoll}
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
        {optionField.map((value, index) => {
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
            onClick={addNewOptionField}
            className=" tracking-wide btn-add border-2 rounded-md py-1 px-3 text-sm md:font-medium flex justify-center items-center cursor-cell hover:border-black duration-300 ease-in"
          >
            More Options
            <span className="ml-1 text-sky-500 text-xl font-extrabold ">+</span>
          </button>
          <input
            className="  btn-create cursor-pointer tracking-wide text-rose-500 border-2 rounded-md py-2 px-3 text-sm md:font-medium underline hover:border-rose-500 hover:text-black duration-300 ease-in "
            type="submit"
            value="CreatePoll"
          />
        </div>
      </form>
    </div>
  );
}
export default CreatePoll;
