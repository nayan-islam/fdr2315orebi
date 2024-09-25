import React from 'react'

const Heading = ({className,headingText}) => {
  return (
    <h2 className={`font-DM mb-5 md:mb=10 text-2xl md:text-[36px] text-[#262626] font-bold ${className}`}>
        {headingText}

    </h2>
  )
}

export default Heading