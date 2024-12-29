// //When to Use Default Export
// Use default export when a module has a primary purpose, such as exporting a single component, function, or class.
// Use named export when you need to export multiple entities from a module, or when exporting utility functions/constants.

import React from 'react'

function Function() {
  return (
    <div>
      <h1>Hello world from functional level component</h1>
    </div>
  )
}

export default Function
