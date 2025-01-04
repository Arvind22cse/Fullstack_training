import React from 'react'
import Component2 from './Component2'
export var EguseContext=React.createContext();
import '../../../assets/Css/Usecontext.css'
function Component1() {

  return (
    <div>    <center className='cen'>
        <EguseContext.Provider value={{sgpa:"10.00"}}>
    <h4  className='con'>Comp1</h4>
      <Component2/>
      </EguseContext.Provider>
      </center>
    </div>
  )
}

export default Component1
