import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Sidebar2 from "./RightSide/Sidebar2";
import Tweet from "./Tweet/Tweet";
const Home = () => {
  return (
    <div className="home_design">
      <Sidebar />
      <Tweet />
      <Sidebar2 />
    </div>
  );
};

export default Home;
