import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        username="sonny sangha"
        timestamp="it's a timestamp wow"
        message="WoW this works"
      />
      <Post
        profilePic="https://i.dailymail.co.uk/i/pix/2014/02/11/article-2557079-1B65996200000578-297_306x423.jpg"
        image="https://previews.123rf.com/images/4pmproduction/4pmproduction1708/4pmproduction170800040/83417675-yes-that-s-my-new-car-customer-in-car-dealership-young-man-knelt-down-with-keys-in-hand-.jpg"
        username="Noah  Harry"
        timestamp="it's a timestamp wow"
        message="my new car XD"
      />
      <Post
        profilePic="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image="https://images.unsplash.com/photo-1477951233099-d2c5fbd878ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        username="Oliver George"
        timestamp="it's a timestamp wow"
        message="A new way"
      />
    </div>
  );
}

export default Feed;
