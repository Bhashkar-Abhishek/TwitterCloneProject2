import { atom } from "recoil";
import { Tweets } from "./Data";

export const tweetData = atom({
  key: "tweetData",
  default: [...Tweets],
});

export const todoItem=atom({
  key : "todo",
  default :[]
})