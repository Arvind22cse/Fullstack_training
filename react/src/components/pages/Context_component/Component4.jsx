import React from 'react'
import { useContext } from 'react'
import {EguseContext} from './Component1'
function Component4() {
    var result=useContext(EguseContext);
    return (
    <div>
        <h4>Sgpa is {result.sgpa}</h4>
      Comp4
    </div>
  )
}

export default Component4
