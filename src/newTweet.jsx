import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Tweet from "./Tweet";
import { tweetContext } from "./tweetContext";

function NewTweet(props) {
  const [users, setUsers] = useContext(tweetContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [id, setId] = useState(1);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateMessage = e => {
    setMessage(e.target.value);
  };

  const addTweet = e => {
    e.preventDefault();
    setUsers(prevUsers => [
      ...prevUsers,
      { name: name, message: message, id: id }
    ]);
    setName("");
    setMessage("");

    setId(id + 1);
  };
  return (
    <div>
      <form onSubmit={addTweet}>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Name : </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name"
              value={name}
              onChange={updateName}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Message :</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="Message"
              placeholder="Message"
              value={message}
              onChange={updateMessage}
            />
          </div>
        </div>
        {/* <div className="form-group row">
          <label className="col-sm-4 col-form-label">Likes :</label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="Likes"
              placeholder="Likes"
              value={likes}
              onChange={updateLikes}
            />
          </div>
        </div> */}
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Add Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewTweet;
