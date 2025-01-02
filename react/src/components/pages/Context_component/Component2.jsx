import React from 'react'
import Component3 from './Component3'
function Component2() {
  return (
    <div>
        Comp2
        To avoid prop drilling we are using Use Context
      <Component3/>
    </div>
  )
}

export default Component2
