import React from "react";
import CreatePoll from "./CreatePoll";
function Home() {
  return (
    <div className="container box-border flex flex-col flex-wrap items-center mb-4 ">
      <CreatePoll />
    </div>
  );
}

export default Home;
