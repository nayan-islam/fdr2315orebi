import React from 'react'
import Container from './Layer/Container'
import Li from './Layer/Li'
import logo from '/Logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className='bg-gray-400 md:mt-28 mt-8 '>
    <Container className={'md:flex justify-between items-center   '}>
        <div className="fMenu p-7 flex  ">
        <ul className={`flex gap-20 md:gap-36 `}>
          
            <ul>
                <h3 className='font-bold'> MENU </h3>
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
            </ul>
            <ul>
                <h3 className='font-bold'> SHOP </h3>
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
            </ul>
            <ul>
                <h3 className='font-bold'> HELP </h3>
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
                <Li magaMenu={'hidden'} liContent={'Home'} />
            </ul>
        </ul>
        </div>

        <div className="fLogo flex justify-between md:gap-96 p-7  ">
            <div className="one flex flex-col ">
            <p>(052) 611-5711</p>
            <p>company@domain.com</p>
            <p className='text-[#6D6D6D]' >575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="logo flex justify-center items-center">
                <img src={logo} alt={'img'} hreaf='/' />
            </div>
        </div>
    </Container>

    <Container className={'flex justify-between items-center gap-20 p-10'}>

        <div className="icon flex gap-4 cursor-pointer text-2xl md:text-4xl ">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
        </div>
        <div className="copy">
            <p className='text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>

    </Container>
   </footer>
  )
}

export default Footer