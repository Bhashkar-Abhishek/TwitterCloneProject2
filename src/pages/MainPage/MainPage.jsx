import React from "react";
import Sidebar from  '../Home/sidebar/Sidebar'
import Sidebar2 from '../Home/RightSide/Sidebar2'
import Tweet from  '../Home/Tweet/Tweet'



const MainPage = () => {
    
  return (
    <div className="home_design">
      <Sidebar />
      <Tweet />
      <Sidebar2 />
    </div>
  );
};

export default MainPage;
