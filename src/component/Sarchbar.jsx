import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import { MdOutlineSignalCellularAlt2Bar } from 'react-icons/md'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { BiSolidDownArrow } from 'react-icons/bi'
import Li from './Layer/Li'
import MegaLi from '../../src/component/Layer/MegaLi'


const Sarchbar = () => {
  let [show, setShow] = useState(false)


  let [search, setSearch] = useState('')
  let [noProductFound, setNoProductFound] = useState('')
  let [filterData, setFilterData] = useState([])
  let [product, setProduct] = useState([])

  let manageSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()

      setFilterData(data.products)
      setProduct(data.products)
    }

    getData()

  }, [])

  useEffect(() => {

    if (search == "") {
      setFilterData("")
    } else {
      let searchData = product.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      setFilterData(searchData);
      if (!filterData) {
        setNoProductFound("no product found")
      }
    }

  }, [search, product])





  return (
    <div className='bg-[#C4C4C4] md:py-6 md:px-0 p-2'>
      <Container className={'flex md:justify-between items-center  gap-2 md:gap-0 relative font-DM'}>

        <div className="1 flex items-center gap-2 text-primary text-sm font-DM cursor-pointer z-40" onClick={() => setShow(!show)} >
          <MdOutlineSignalCellularAlt2Bar className='rotate-90 cursor-pointer' />
          <p className='md:block hidden' >Shop by Category</p>
        </div>

        <ul className={`w-[263px] bg-slate-800 absolute left-0 top-full transition-all duration-700 ${show ? " opacity-100 visible" : " invisible opacity-0"} z-50`}>

          <Li magaMenu='h-full' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Accesories' >

            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>

          </Li>

          <Li nayan={false} magaMenu='hidden' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Furniture' />


          <Li magaMenu='h-full' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Electronics'>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
          </Li>


          <Li nayan={false} magaMenu='hidden' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Clothes' />
          <Li magaMenu='h-full' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Bags'>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
            <ul>
              <h3>Phone</h3>
              <MegaLi MegaLiName='phone 01' href={'/'} />
              <MegaLi MegaLiName='phone 02' href={'/'} />
              <MegaLi MegaLiName='phone 03 ' href={'/'} />
              <MegaLi MegaLiName='phone 04' href={'/'} />
              <MegaLi MegaLiName='phone 05' href={'/'} />
              <MegaLi MegaLiName='phone 06' href={'/'} />
              <MegaLi MegaLiName='phone 07' href={'/'} />
            </ul>
          </Li>
          <Li nayan={false} magaMenu='hidden' className="hover:text-white transition-all duration-200 block py-4 px-5 group hover:pl-8" liContent='Home appliances' />
        </ul>


        <div className="02 relative md:w-auto w-full">
          <input onChange={manageSearch} value={search} type="text" placeholder='Search by products name...' className='md:w-[601px] w-full  md:py-4 py-2 md:px-5 px-3 border-none outline-none' />

          <FaSearch className='absolute top-1/2 -translate-y-1/2 right-5 ' />
        </div>

        <div className="03 justify-center items-center gap-10 cursor-pointer md:flex hidden ">
          <div className="user flex  items-center gap-2">
            <FaUser />
            <BiSolidDownArrow />

            {/* <div className={'flex flex-col justify-center items-center '}>
            <div className='bg-[#2B2B2B] text-[#FFFFFF] w-[200px] flex justify-center py-4'>
              <p>my account</p>
            </div>
            <div className='text-[#2B2B2B] bg-[#FFFFFF] w-[200px] flex justify-center py-4'>
              <p>log out</p>
            </div>
          </div> */}

          </div>
          <div className="shop">
            <FaShoppingCart />
          </div>
        </div>

        {
        filterData.length > 0 && (
          <ul className='absolute z-20 top-full left-0 w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-400 gap-2'>
            {
              filterData.map((item, index)=>(
                <li className='grid grid-cols-3 bg-slate-200 py-5 px-7' key={index}>
                  <img className='h-40' src={item.thumbnail} alt={item.thumbnail} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <button className='py-3 bg-orange-400 px-6 rounded'>Add to cart</button>
                    <button className='py-3 bg-orange-400 px-6 rounded'>Wishlist</button>
                  </div>
                </li>
              ))
            }
          </ul>

) 
}


      </Container>

      
    </div>
  )
}

export default Sarchbar