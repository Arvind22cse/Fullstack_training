import React from 'react'
import Component2 from './Component2'
export var EguseContext=React.createContext();
function Component1() {

  return (
    <div>
        <EguseContext.Provider value={{sgpa:"10.00"}}>
        <h4>Comp1</h4>
      <Component2/>
      </EguseContext.Provider>
    </div>
  )
}

export default Component1
