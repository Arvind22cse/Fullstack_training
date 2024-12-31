import React from "react";
import '../assets/Css/Navbar.css'
export default function Nav() {
  
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li><a href="/gallery">Gallery</a></li>
        <li>
          <a href="/contact">Contact us</a>
        </li>
        <li>
          <a href="/useeffect">Use Effect</a>
        </li>
        <li>
          <a href="/useref">Use ref</a>
        </li>
        <li>
          <a href="/usecontext">Use Context</a>
        </li>
      </ul>
    </div>
  );
}
