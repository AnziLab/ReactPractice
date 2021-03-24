import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = e =>{
      if(e.key === 'Enter'){
          onClick();
      }
  };

  return (
      <div>
          <h1>Event Practice</h1>
          <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={onChangeUsername}/>

          <input
          type="text"
          name="message"
          placeholder="write anything"
          value={message}
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}/>
          <button onClick ={onClick}>confirm</button>
      </div>
  );
};

export default EventPractice;
