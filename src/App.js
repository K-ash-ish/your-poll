import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import YourPoll from "./components/YourPoll";
import NotFound from "./components/NotFound";
import Result from "./components/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route
        element={
          <div className="container border-2  md:min-h-screen justify-between box-border flex flex-col flex-wrap items-center mb-4 ">
            <Header />
            <Outlet />
            <Footer />
          </div>
        }
      >
        <Route path="/" element={<Home />} />

        <Route path="/yourpoll">
          <Route path=":pollid" element={<YourPoll />} />
          <Route path=":pollid/results" element={<Result />} />
          {/* relative path beacuse else it will open the route from root */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
