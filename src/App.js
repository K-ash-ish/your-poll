import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import YourPoll from "./components/YourPoll";
import NotFound from "./components/NotFound";
import Result from "./components/Result";
function App() {
  return (
    <div className="container box-border flex flex-col flex-wrap items-center mb-4 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourpoll">
          <Route path=":pollid" element={<YourPoll />} />
          <Route path=":pollid/results" element={<Result />} />
          {/* relative path beacuse else it will open the route from root */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
