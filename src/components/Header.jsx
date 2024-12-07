import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)

  const headerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        delay: 0.3,
        ease: [0.25, 0.8, 0.25, 1],
      }
    },
  }

  return (
    <header>
      <motion.nav
        initial={location.pathname === "/" ? "hidden" : false}
        animate={location.pathname === "/" ? "visible" : false}
        variants={headerVariants}
      >
        <Link to="/" className='logo'>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Rocky" />
        </Link>
        <div className={`menu ${menuOpen ? "open" : ""}`} onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </motion.nav>
    </header>
  )
}

export default Header
