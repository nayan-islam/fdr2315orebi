import React, { useEffect, useState } from 'react'
import Container from './Container'
import Heading from './Heading'
import Product from './Product'
import axios from 'axios'

const BestSelling = () => {

  let [bestSelling, setBestSelling] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
      try{
        let response = await axios.get('https://dummyjson.com/products')
        setBestSelling(response.data.products);
        
      }catch(error){
        console.error("Something is wrong", error);
      }
    }
    getData()
  },[])

  return (
    <div className='pt-28'>
        <Container>
            <Heading headingText='Best Selling'/>
            <div className="card flex flex-wrap justify-center md:justify-between">
        {
          bestSelling?
          bestSelling.filter((gdrytd5, product30)=> product30 >= 4 && product30 < 8 ).map((item, index)=> (
            <Product src={item.thumbnail} productName={item.title} productPrice={item.price} brand={item.brand} LareText1='Add to Wish List' LareText2='Compare' LareText3='Add to Cart' offer='25%' className='p-2' />
          )):<p>Stock out</p>
        }
            </div>
        </Container>
    </div>
  )
}

export default BestSelling