import React from "react";
import "./App.css";
import Header from "./components/Header";
import CreatePoll from "./components/CreatePoll";
import YourPoll from "./components/YourPoll";
function App() {
  return (
    <div className="container box-border flex flex-col flex-wrap items-center mb-4 ">
      <Header />
      <CreatePoll />
      <YourPoll />
    </div>
  );
}

export default App;
