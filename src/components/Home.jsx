import React from "react";
import Header from "./Header"
import CreatePoll from "./CreatePoll";
import YourPoll from "./YourPoll";
import Result from "./Result"
function Home() {
    return (
      <div className="container box-border flex flex-col flex-wrap items-center mb-4 ">
        <Header />
        <CreatePoll />
      </div>
    );
  }
  
  export default Home;