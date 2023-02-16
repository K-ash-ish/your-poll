import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { pollCollectionRef } from "../firebase-config";
import { getDocs } from "firebase/firestore";
import Header from "./Header";
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
  console.log(allPoll);
  return allPoll?.length > 0 ? (
    <>
      <Header />
      <div className="all-poll-container w-full flex-row my-6 ">
        {allPoll.map((poll) => {
          return (
            <li className="text-2xl my-6 mx-4 border-b-2 text-blue-400">
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
