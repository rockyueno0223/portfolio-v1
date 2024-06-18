import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
