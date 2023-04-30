import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "@mui/material";
import { Images } from "../../../assets/Images";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PollIcon from "@mui/icons-material/Poll";
import IosShareIcon from "@mui/icons-material/IosShare";
const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post_avatar}>
        <Avatar src={Images} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.header_text}>
            <h3>
              Scarlet Johnson
            </h3>
              <span className={styles.header_spec}>
                <VerifiedIcon className={styles.post_verified} />
                scarlet@gmail.com
              </span>
          </div>
          <div className={styles.header_description}>
            <p>
              Check out this fantastic collection of Scarlett Johansson
              wallpapers,.
            </p>
          </div>
        </div>
        <img src={Images} alt="img" />
        <div className={styles.bottom}>
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteIcon fontSize="small" />
          <PollIcon fontSize="small" />
          <IosShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
