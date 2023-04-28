import React from "react";
import styles from "./Tweetbox.module.css";
import { Avatar, Button } from "@mui/material";
import { Images } from "../../../assets/Images";

const Tweetbox = () => {
  return (
    <div className={styles.tweetbox}>
      <form>
        <div className={styles.tweetbox_input}>
          <Avatar src={Images} />
          <input placeholder="what's happening ?" type="text" />
        </div>
        <input className={styles.image_input} placeholder="Enter url?" type="text"/>
        <Button className={styles.tweet_button}>Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
