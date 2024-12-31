import React from 'react'
import Clsname from './components/classeg'
import Function from './components/Function'
import Nav from './components/nav'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import Home from './components/pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './components/pages/About'
import Useffect from './components/pages/Useeffect'
function App() {
  return (
    <div>

      <Nav/>
      {/* <Clsname/>
      <Function/> */}
      {/* <Contact/>
      <Gallery/>*/}
      <BrowserRouter>
      
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/useeffect" element={<Useffect/>}/>

      </Routes> 
      </BrowserRouter>

    
    </div>
  )
}

export default App
