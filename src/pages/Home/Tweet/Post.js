import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "@mui/material";
import { Images } from "../../../assets/Images";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
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
              verified
              <span>
                <VerifiedIcon className={styles.post_verified} />
                scarlet@gmail.com
              </span>
            </h3>
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
          <ChatBubbleOutlineIcon />
          <RepeatIcon />
          <FavoriteIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
