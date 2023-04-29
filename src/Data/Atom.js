import { atom } from "recoil";
import { Tweets } from "./Data";
import { Users } from "./Data";

export const tweetData = atom({
  key: "tweetData",
  default: [...Tweets],
});


export const tweetUser = atom({
    key: "tweetUser",
    default: [...Users],
  });