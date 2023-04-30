import { atom } from "recoil";
import { Tweets } from "./Data";

export const tweetData = atom({
  key: "tweetData",
  default: [...Tweets],
});