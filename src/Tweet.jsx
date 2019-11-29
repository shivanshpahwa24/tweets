import React, { useState, useContext, useEffect } from "react";
import { tweetContext } from "./tweetContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function Tweet(props) {
  const [users, setUsers] = useContext(tweetContext);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const Updatelikes = () => {
    if (likes > 0) return <h5>Likes : {likes}</h5>;
    else return null;
  };
  const Updatedislikes = () => {
    if (dislikes > 0) return <h5>Dislikes : {dislikes}</h5>;
    else return null;
  };
  const increaseLikes = () => {
    setLikes(likes + 1);
  };
  const increaseDislikes = () => {
    setDislikes(dislikes + 1);
  };
  useEffect(() => {
    users.map(user => {
      if (user.id === props.id) {
        user.likes = likes;
        user.dislikes = dislikes;
      }
    });
    console.log(users);
  }, [likes, dislikes]);
  return (
    <div className="tweet">
      <div className="delete">
        <h3>{props.name}</h3>
        {/* <button
          className="btn btn-primary ml-5 mr-0"
          onClick={() => props.onDelete(props.likes)}
        >
          X
        </button> */}
      </div>
      <p>{props.message}</p>
      <div className="flex">
        <button onClick={increaseLikes} className="btn btn-primary mx-2">
          Like
        </button>
        <button onClick={increaseDislikes} className="btn btn-primary mx-2">
          Dislike
        </button>
      </div>
      <div className="flex">
        <Updatelikes />
        <Updatedislikes />
      </div>
    </div>
  );
}

export default Tweet;
