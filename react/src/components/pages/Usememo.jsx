import React, { useState } from 'react'
var slow=(number)=>{
for(let i=0;i<100000000;i++){

}
return number*2
}
function Usememo() {
    var [num,setnum]=useState(0)
    var [theme,updateTheme]=useState(true);
    var darklight={
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black",

    }
  return (
    <div>
      <h1>Usememo</h1>
      <input type="number" value={num} onChange={(e)=>{setnum(e.target.value)}} />
    </div>
  )
}

export default Usememo
