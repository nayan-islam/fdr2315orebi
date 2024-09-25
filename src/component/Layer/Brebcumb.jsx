import React from 'react'

const Brebcumb = () => {
  return (
    <div>
        <h2 className='text-5xl text-[#262626] font-DM font-bold capitalize'>{`${window.location.pathname.split("/")[1]}`}</h2>
        <p className='text-xs font-DM text-[#6D6D60] capitalize'>{`Home  -  ${window.location.pathname.split("/")[1]}`}</p>
    </div>
  )
}

export default Brebcumb