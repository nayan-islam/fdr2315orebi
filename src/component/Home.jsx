import React from 'react'
import Banner from '../component/Layer/Banner'
import Shipping from './Layer/Shipping'
import Add from './Layer/Add'
import Arrivals from './Arrivals'
import BestSelling from './Layer/BestSelling'
import Add02 from './Layer/Add02'
import SpecialOffer from './Layer/SpecialOffer'
const Home = () => {
  return (
    <div>
        <Banner/>
        <Shipping/>
        <Add/>
        <Arrivals/>
        <BestSelling/>
        <Add02/>
        <SpecialOffer/>
    </div>
  )
}

export default Home