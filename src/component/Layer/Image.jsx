import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({href , src , alt , className, imgclassName}) => {
  return (
   <Link className={`${className}`} to={href}>
        <picture>
            <img className={`block w-full ${imgclassName} `} src={src} alt={alt} />
        </picture>
   </Link>
  )
}

export default Image