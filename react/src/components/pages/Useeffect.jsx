import { useState, useEffect } from "react";
import axios from "axios";
function Useffect() {
  //   const [text, setText] = useState("Kongu");

  //   useEffect(() => {
  //     console.log(text);

  //     setText("KEC");
  //   }, []);

  //   return (
  //     <>
  //       <h1>Name:</h1>
  //       <input
  //         type="text"
  //         value={text}
  //         onChange={(e) => setText(e.target.value)}
  //       />
  //       <h1>The name is {text}</h1>
  //     </>
  //   );

  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <h1>Fecthing data from Json placeholder api</h1>
      <h2>Post are</h2>
      <ol>
        {post.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ol>
    </section>
  );
}

export default Useffect;
