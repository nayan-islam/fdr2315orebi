import React from 'react'
import Container from './Container'
import Image from './Image'
import add02 from '../../../public/add/Ads_2.jpg'

const Add02 = () => {
  return (
    <div className='md:py-28 py-10'>
        <Container>
            <Image src={add02} href="/"/>
        </Container>
    </div>
  )
}

export default Add02