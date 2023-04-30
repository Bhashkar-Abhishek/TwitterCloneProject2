import React from "react";
import styles from "./Tweetbox.module.css";
import { Avatar, Button } from "@mui/material";
import { Images } from "../../../assets/Images";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiBarChartGroupedFill, RiFileGifLine } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
const Tweetbox = () => {
  return (
    <div className={styles.tweetbox}>
      <form>
        <div className={styles.tweetbox_input}>
          <Avatar src={Images} />
          <input placeholder="what's happening ?" type="text" />
        </div>
        <Button className={styles.tweet_button}>Tweet</Button>
      </form>
      <div>
        <BsCardImage />
        <RiFileGifLine />
        <RiBarChartGroupedFill />
        <BsEmojiSmile />
        <IoMdCalendar />
        <MdOutlineLocationOn />
      </div>
    </div>
  );
};

export default Tweetbox;
