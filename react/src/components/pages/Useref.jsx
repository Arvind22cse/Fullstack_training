import React, { useRef, useState,useEffect } from "react";

function Useref() {
  var [text, settext] = useState("");
  var prev = useRef("");
  useEffect(() => {
    prev.current = text;
  }, [text]);
  return (
    <div>
      <h1>use ref</h1>
      <h1>The Text is:{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <h1>My prev render is {prev.current}</h1>
    </div>
  );
}

export default Useref;
