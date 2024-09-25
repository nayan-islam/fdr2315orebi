import React from 'react'
import { Link } from 'react-router-dom'

const MegaLi = ({href, MegaLiName}) => {
  return (
    <li className='w-28'>
    <Link className='block ' to={href}>
      <p>{MegaLiName}</p>
    </Link>
  </li>
  )
}

export default MegaLi