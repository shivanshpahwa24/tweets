import React, { useState, createContext } from "react";

export const tweetContext = createContext();

export const TweetProvider = props => {
  const [users, setUsers] = useState(
    [] /* [
    {
      name: "Phil",
      message: "S.H.I.E.L.D is HYDRA",
      likes: "50000"
    },
    {
      name: "Coulson",
      message: "I am the Director",
      likes: "500"
    },
    {
      name: "Daisy",
      message: "I am a hacker",
      likes: "9987"
    },
    {
      name: "Jhonson",
      message: "I can hack SHIELD",
      likes: "989"
    }
  ] */
  );
  return (
    <tweetContext.Provider value={[users, setUsers]}>
      {props.children}
    </tweetContext.Provider>
  );
};
