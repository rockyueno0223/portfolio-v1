import React from 'react'
import { Link } from "react-router-dom";

const Button = ({title, pass}) => {
  return (
    <div>
      <div className='button'>
        <Link to={pass}>
          <p>{title}</p>
        </Link>
      </div>
    </div>
  )
}

export default Button
