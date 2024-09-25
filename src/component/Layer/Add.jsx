import React from 'react'
import Container from './Container'
import Image from './Image'
import ad1 from '../../../public/add/ad-1.png'
import ad2 from '../../../public/add/Ad_3.png'


const Add = () => {
  return (
    <div className='md:pt-[174px]' >
        <Container className='md:h-[780px] grid grid-cols-2 grid-rows-2 md:gap-10 gap-3' >

            <Image src={ad1} imgclassName='h-full' className='row-span-2'/>
            
            <Image src={ad2} imgclassName='h-full'/>
            
            <Image src={ad2} imgclassName='h-full'/>
            
        </Container>
    </div>
  )
}

export default Add