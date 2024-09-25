import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import logo from '/Logo.png'
import Image from './Layer/Image'
import Li from './Layer/Li'
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa'
import { BiSolidDownArrow } from 'react-icons/bi'

const Nav = () => {

  let [show, setShow] = useState(true)
  
  useEffect(() => {
    function resize() {
      if (window.innerWidth < 735.98) {

        setShow(false)

      } else {
        setShow(true)
      }
    }
    resize()
    window.addEventListener("resize", resize)
  }, [])


  return (
    <nav className='py-8 bg-slate-400  '>
      <Container className='flex md:justify-center justify-end items-center relative md:py-8 py-3 px-3 md:px-0'>
            <Image className='absolute left-0 top-1/2 -translate-1/2 px-4' src={logo} href='/' alt='logo' />

        <ul className={`transition-all duration-700 absolute top-full left-0 w-full md:w-auto flex flex-col md:flex-row gap-x-10 md:static bg-gray-100  md:bg-transparent p-4 md:p-0 z-50 ${show ? "translate-x-0" : "-translate-x-full"}`}>
          <Li magaMenu={'hidden'} className='text-black' liContent="Home" href="/" />
          <Li magaMenu={'hidden'} liContent="Shop" href="/products" />
          <Li magaMenu={'hidden'} liContent="About" href="/signup" /> 
          <Li magaMenu={'hidden'} liContent="Contacts" href="/login" />
          <Li magaMenu={'hidden'} liContent="Journal" href="/journal" />
        </ul>



        <div className="icon flex justify-center items-start gap-3 md:hidden cursor-pointer">
        <div className="user flex gap-2">
          <FaUser />
          <BiSolidDownArrow  className='md:block hidden'/> 
          </div>
          <div className="shop">
          <FaShoppingCart />
          </div>

        <div  onClick={() => setShow(!show)} >
        <FaBars className='text-xl' />
        </div>
        </div>


      </Container>
    </nav>
  )
}

export default Nav
