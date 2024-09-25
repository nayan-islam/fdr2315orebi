import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'

const RootLayOut = () => {
  return (
    <div className='' >
    <Header/>
       <Outlet/>
    <Footer/>
    </div  >
  )
}

export default RootLayOut