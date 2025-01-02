// import { useState, useEffect } from "react";
// import axios from "axios";
// function Useffect() {
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

//   var [post, setPost] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/")
//       .then((res) => {
//         console.log(res.data);
//         setPost(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <section>
//       <h1>Fecthing data from Json placeholder api</h1>
//       <h2>Post are</h2>
//       <ol>
//         {post.map((data) => (
//           <li key={data.id}>{data.title}</li>
//         ))}
//       </ol>
//     </section>
//   );
// }

// export default Useffect;
// AIzaSyDalotYmuwwLT76jtzMfHmx4t1N5QgtgAc
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Useffect() {
//   var [post, setPost] = useState([]);
//   const [fetch, setFetch] = useState(false);

//   useEffect(() => {
//     if (fetch) {
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts/")
//         .then((res) => {
//           console.log(res.data);
//           setPost(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [fetch]);

//   const fetchData = () => {
//     setFetch(true);
//   };

//   return (
//     <section>
//       <h1>Fetching data from Json placeholder API</h1>
//       <button onClick={fetchData}>Fetch Posts</button>
//       <h2>Posts are</h2>
//       <ol>
//         {post.map((data) => (
//           <li key={data.id}>{data.title}</li>
//         ))}
//       </ol>
//     </section>
//   );
// }

// export default Useffect;
// www.themealdb.com/api/json/v1/1/categories.php
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Useffect() {
//   var [post, setPost] = useState([]);
//   const [fetch, setFetch] = useState(false);

//   useEffect(() => {
//     if (fetch) {
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts/")
//         .then((res) => {
//           console.log(res.data);
//           setPost(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [fetch]);

//   const fetchData = () => {
//     setFetch(true);
//   };

//   return (
//     <section>
//       <h1>Fetching data from Json placeholder API</h1>
//       <button onClick={fetchData}>Fetch Posts</button>
//       <h2>Posts are</h2>
//       <ol>
//         {post.map((data) => (
//           <li key={data.id}>{data.title}</li>
//         ))}
//       </ol>
//     </section>
//   );
// }

// export default Useffect;
import { useState, useEffect } from "react";
import axios from "axios";

function Useffect() {
  const [post, setPost] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (fetch) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          console.log(res.data);
          setPost(res.data.categories); // Update this line
        })
        .catch((err) => console.log(err));
    }
  }, [fetch]);

  const fetchData = () => {
    setFetch(true);
  };

  return (
    <section>
      <h1>Fetching data from JSON Placeholder API</h1>
      <button onClick={fetchData}>Fetch Posts</button>
      <h2>Posts are</h2>
      <ol>
        {post.map((data) => (
          <>
            <img src={data.strCategoryThumb} alt={data.strCategory} />
            <li key={data.idCategory}>{data.strCategory}</li>
          </>
        ))}
      </ol>
    </section>
  );
}

export default Useffect;
