import React from "react";
import styles from "./Tweetbox.module.css";
import { Avatar, Button } from "@mui/material";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiBarChartGroupedFill, RiFileGifLine } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { useRecoilState  } from "recoil";
import { tweetData } from "../../../Data/Atom";


const Tweetbox = () => {
  const [myTweet, setMyTweets] = useRecoilState(tweetData)

  return (
    <div className={styles.tweetbox}>
      <form>
        <div className={styles.tweetbox_input}>
          <Avatar src={myTweet[0].image} />
          <input placeholder="what's happening ?" type="text" />
        </div>
      </form>
      <div className={styles.tweet_icons}>
        <BsCardImage />
        <RiFileGifLine />
        <RiBarChartGroupedFill />
        <BsEmojiSmile />
        <IoMdCalendar />
        <MdOutlineLocationOn />
      <Button className={styles.tweet_button}>Tweet</Button>
      </div>
    </div>
  );
};

export default Tweetbox;
