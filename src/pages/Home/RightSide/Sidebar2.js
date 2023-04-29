import React from "react";
import styles from "./Sidebar2.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterShareButton,TwitterTimelineEmbed,TwitterTweetEmbed } from "react-twitter-embed";
const Sidebar2 = () => {
  return (
    <div className={styles.sidebar2}>
      <div className={styles.side2_input}>
        <SearchIcon className={styles.side2_searchicon}/>
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className={styles.side2_container}>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1652009110530056192"/>

        <TwitterTimelineEmbed sourceType="profile" screenName="vikrant"/>

        <TwitterShareButton/>
      </div>
    </div>
  );
};

export default Sidebar2;
