import React from "react";
import styles from "./Tweet.module.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
const Tweet = () => {
  return (
      <div className={styles.tweet}>
        <div className={styles.tweet_header}>
          <h2>Home</h2>
        </div>
        <Tweetbox/>
        <Post/>
      </div>
  );
};

export default Tweet;
