import React, { useState, useContext } from "react";
import "./App.css";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.css";
import NewTweet from "./newTweet";
import { TweetProvider } from "./tweetContext";
import TweetList from "./tweetList";

function App() {
  return (
    <TweetProvider>
      <Navbar />
      <div className="app">
        <NewTweet />

        <TweetList />
      </div>
    </TweetProvider>
  );
}

export default App;
