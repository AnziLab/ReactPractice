import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("hello!");
  const onClickLeave = () => setMessage("Bye");

  const[color, setColor] = useState('red');

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{color}}>{message}</h1>

<button style={{color:'red'}} onClick={()=> setColor('red')}>red</button>
<button style={{color:'lightblue'}} onClick={()=> setColor('lightblue')}>light blue</button>
<button style={{color:'green'}} onClick={()=> setColor('green')}>green</button>
    </div>
  );
};

export default Say;