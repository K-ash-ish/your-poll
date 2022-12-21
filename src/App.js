import React from "react";
import "./App.css";
import Header from "./components/Header";
import CreatePoll from "./components/CreatePoll";
import YourPoll from "./components/YourPoll";
import Result from "./components/Result"
function App() {
  return (
    <div className="container box-border flex flex-col flex-wrap items-center mb-4 ">
      <Header />
      <Result />
      {/* <CreatePoll /> */}
      {/* <YourPoll /> */}
    </div>
  );
}

export default App;
