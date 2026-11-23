import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef()
  const [enteredplayerName, setEnteredPlayerName] = useState(null)


  function handleClick(){ 
     setEnteredPlayerName(inputName.current.value)
     inputName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredplayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
