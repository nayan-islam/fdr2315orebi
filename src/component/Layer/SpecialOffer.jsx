import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Product from './Product'

const SpecialOffer = () => {
  return (
    <div className='md:mt-28 mt-0'>
         <Container>
            <Heading headingText='Special Offer'/>
            <div className="card flex flex-wrap justify-center md:justify-between">
        <Product LareText1='Add to Wish List' LareText2='Compare' LareText3='Add to Cart' offer='25%' className='p-2' />
        <Product LareText1='Add to Wish List' LareText2='Compare' LareText3='Add to Cart' offer='new' className='p-2' />
        <Product LareText1='Add to Wish List' LareText2='Compare' LareText3='Add to Cart' className='p-0'/>
        <Product LareText1='Add to Wish List' LareText2='Compare' LareText3='Add to Cart' offer='10%' className='p-2' />
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffer