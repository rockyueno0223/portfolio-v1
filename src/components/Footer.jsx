import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoDevTo } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="link-wrapper">
        <div className='link-item'>
          <a href="https://github.com/rockyueno0223" target="_blank" rel="noreferrer">
            <FaGithub size={38} />
          </a>
        </div>
        <div className='link-item'>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin size={38} />
          </a>
        </div>
        <div className='link-item'>
          <a href="https://dev.to/rockyueno0223" target="_blank" rel="noreferrer">
            <BiLogoDevTo size={38} />
          </a>
        </div>
        <div className='link-item'>
          <a href="mailto:rockyueno@gmail.com">
            <MdEmail size={38} />
          </a>
        </div>
      </div>
      <p>Copyright©Rocky. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
