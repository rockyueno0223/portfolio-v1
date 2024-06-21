import React from 'react'
import { Link } from "react-router-dom";

const Button = ({title, pass}) => {
  return (
    <div className='button'>
      <Link to={pass}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default Button
