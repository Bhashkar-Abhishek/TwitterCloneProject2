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
import { useRecoilState  } from "recoil";
import { tweetData } from "../../../Data/Atom";
const Post = () => {
  const [myTweet, setMyTweets] = useRecoilState(tweetData)
  console.log(myTweet)
  return (
<>

     { myTweet.map((tweet) => {
      return (
        <>
        <div className={styles.post} key={tweet.id}>
        <div className={styles.post_avatar}>
          <Avatar src={tweet.image} />
        </div>
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.header_text}>
              <h3>
               {tweet.userName}
              </h3>
                <span className={styles.header_spec}>
                  <VerifiedIcon className={styles.post_verified} />
                 {tweet.email}
                </span>
            </div>
            <div className={styles.header_description}>
              <p>
                {tweet.description}
              </p>
            </div>
          </div>
          <img src={tweet.image} alt="img"  />
          <div className={styles.bottom}>
           <span> <ChatBubbleOutlineIcon fontSize="small" /> <strong style={{color:"red"}}>{tweet.commentCount}</strong> </span> 
            <RepeatIcon fontSize="small" />
          <span >  <FavoriteIcon fontSize="small" /><strong style={{color: "red"}}> {tweet.likeCount} </strong></span> 
            <PollIcon fontSize="small" />
            <IosShareIcon fontSize="small" />
          </div>
        </div>
      </div>
        
        </>
      )
     })}

  </>);
};

export default Post;
