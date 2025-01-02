// import React, { useRef, useState,useEffect } from "react";

// function Useref() {
//   var [text, settext] = useState("");
//   var prev = useRef("");
//   useEffect(() => {
//     prev.current = text;
//   }, [text]);
//   return (
//     <div>
//       <h1>use ref</h1>
//       <h1>The Text is:{text}</h1>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => settext(e.target.value)}
//       />
//       <h1>My prev render is {prev.current}</h1>
//     </div>
//   );
// }

// export default Useref;

import React, { useRef, useState, useEffect } from 'react';

const Useref = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(number);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      numberRef.current += 1;
    } else if (event.key === 'ArrowDown') {
      numberRef.current -= 1;
    }
    setNumber(numberRef.current);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>Current Number: {number}</p>
      <p>Use the Up and Down arrow keys to increment or decrement the number.</p>
    </div>
  );
};

export default Useref;
