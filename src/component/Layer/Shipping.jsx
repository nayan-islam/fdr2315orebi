import React from 'react'
import Container from './Container'
import { PiNumberTwoBold } from 'react-icons/pi'
import { FaTruck, FaUndoAlt } from 'react-icons/fa'

const Shipping = () => {
  return (
    <div className='-mt-2.5 px-4 md:px-0'>
        <Container className='flex justify-between'>

            <div className="shop1 py-8 flex justify-center items-center gap-3 font-DM] cursor-pointer">
            <PiNumberTwoBold />
                <p className=' text-[#6D6D6D]'>Two years warranty</p>
            </div>

            <div className="shop2 py-8 flex  justify-center items-center gap-3 font-DM] cursor-pointer">
            <FaTruck />
                <p className=' text-[#6D6D6D]'>Free shipping</p>
            </div>

            <div className="shop3 py-8 flex  justify-center items-center gap-3 font-DM] cursor-pointer">
            <FaUndoAlt />
            <p className=' text-[#6D6D6D]'> Return policy in 30 days</p>
            </div>

        </Container>
    </div>
  )
}

export default Shipping