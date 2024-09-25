import React from 'react'
import Container from '../component/Layer/Container'
import Brebcumb from '../component/Layer/Brebcumb'
import { PiClipboard } from 'react-icons/pi'
import Input from '../component/Layer/Input'

const LOGin = () => {
  return (
    <div className='mt-10 font-DM' >
        <Container>
            <div className=" pb-10 border-b">
            <Brebcumb/>
           <p className="mt-20 max-w-[644px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis ullam, possimus consequuntur error excepturi eveniet inventore distinctio modi. Quo!
           </p>
            </div>
            {/* ============== */}
            <div className=" mt-10 border-b pb-10">
                <h2 className='text-3xl font-bold mb-10'>
                Returning Customer
                </h2>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
                <Input className="w-[507px]" LAbelText="Email address" placeholder="Email address" type="text" id="Email address"  />
                <Input LAbelText="Password" placeholder="Password" type="text" id="Password" className="w-[507px] " />
            </div>
            <button className='font-bold px-20 py-4 mt-3 border-2 border-black'>
            Log in
            </button>
            </div>

            <div className=" mt-10 border-b pb-10">
                <h2 className='text-3xl font-bold mb-10'>
                New Customer
                </h2>
                <p className="mt-20 max-w-[644px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati nesciunt rerum quaerat sint corporis aliquam maiores ratione, tempore repudiandae!
                </p>
                <button className='font-bold px-20 py-4 mt-3 bg-black text-white'>
                Continue
            </button>
            
            </div>

        </Container>
    </div>
  )
}

export default LOGin