import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Li = ({href, liContent,className,magaMenu,children, nayan}) => {

  let [padding, setPadding] = useState(nayan)

  return (
    <li className='group' >
        <Link className={`font-DM text-sm font-bold text-[#767676] hover:text-[#262626] ${className}`} to={href}>
            {liContent}
        </Link>

        <div className={`static md:absolute hidden md:group-hover:flex  bg-transparent left-full top-0 bg-zinc-300 font-DM text-sm font-bold text-[#767676] hover:text-[#000000] ${magaMenu} transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block ${padding&&"px-10 py-7"}  gap-x-12 gap-y-1 `}>
          {children}
        </div>


    </li>
  )
}

export default Li