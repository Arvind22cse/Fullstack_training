import {useState} from 'react'
import '../../assets/Css/Gallery.css'
export default function Gallery() {
    var [c,setcount]=useState(0);
    var [d,setc]=useState(0);

    function increment(){
        setcount(c+1)
    }
  return (
    <div>
      Gallery
      <h1>The count is{c}</h1>
      <h1>The count is{d}</h1>

      <button onDoubleClick={increment}>Increment</button>
      <button onClick={()=>{ setc(d+1)}}>Inc</button>
      <button onClick={()=>setc(d-1)}>DEC</button>
      <button onClick={()=>{setc(0)}}>Reset</button>
    </div>
  )
}
