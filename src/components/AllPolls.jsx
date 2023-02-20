import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getDocs } from "firebase/firestore";
import { pollCollectionRef } from "../firebase-config";
function AllPolls() {
  const [allPoll, setAllPoll] = useState();
  useEffect(() => {
    getAllPolls();
  }, []);
  async function getAllPolls() {
    const snapshot = await getDocs(pollCollectionRef);
    let polls = [];
    snapshot.forEach((data) => {
      return polls.push(data.data());
    });
    setAllPoll((prevValue) => {
      return polls;
    });
  }
  return allPoll?.length > 0 ? (
    <>
      <div className="all-poll-container w-full flex-row my-6 border-2 w-1/2 ">
        {allPoll.map((poll, index) => {
          return (
            <li
              key={uuidv4()}
              className="text-2xl my-6 mx-4 capitalize underline decoration-blue-400 "
            >
              <Link to={`/yourpoll/${poll.id}`}>{poll.question}</Link>
            </li>
          );
        })}
      </div>
    </>
  ) : (
    <h1>Loading All Polls..</h1>
  );
}

export default AllPolls;
