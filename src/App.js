import React from "react";
import "./App.css";
import Header from "./components/Header";
import CreatePoll from "./components/CreatePoll";

function App() {
  return (
    <div className="box-border flex flex-col flex-wrap items-center ">
      <Header />
      <CreatePoll />
    </div>
  );
}

export default App;
