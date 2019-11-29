import React, { useState, useContext } from "react";
import "./App.css";
import Tweet from "./Tweet";
import "bootstrap/dist/css/bootstrap.css";
import newTweet from "./newTweet";
import { tweetContext } from "./tweetContext";

function TweetList() {
  const [users, setUsers] = useContext(tweetContext);

  /* const handleDelete = tweetId => {
    const tweets = users.filter(user => user.likes !== tweetId);
    setUsers({ tweets });
  }; */

  return (
    <div>
      <h1 className="text-warning">No. of Tweets : {users.length}</h1>
      {users.map(user => (
        <Tweet
          name={user.name}
          message={user.message}
          key={user.id}
          id={user.id}
          likes={user.likes}
          dislikes={user.dislikes}
          /* onDelete={handleDelete} */
        />
      ))}
    </div>
  );
}

export default TweetList;
