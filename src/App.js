import React from "react";
import "./App.css";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom"
import YourPoll from "./components/YourPoll";
function App() {
  return (
    <div className="container box-border flex flex-col flex-wrap items-center mb-4 ">
    <Routes >
      <Route path = "/" element = {<Home/>} />
      <Route path = "/yourpoll" element = {<YourPoll/>} />
    </Routes>
    </div>
  );
}

export default App;
