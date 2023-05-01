import React from "react";
import Sidebar from  '../Home/sidebar/Sidebar'
import Sidebar2 from '../Home/RightSide/Sidebar2'
import Tweet from  '../Home/Tweet/Tweet'
import style from "./MainPage.module.css"


const MainPage = () => {
    
  return (
    <div className={style.home_design}>
      <div className={style.sidebar}>
      <Sidebar />
      </div>

      <div className={style.tweet}>
      <Tweet />
      </div>

      <div className={style.sidebar2}>
      <Sidebar2 />
      </div>

      
    </div>
  );
};

export default MainPage;
