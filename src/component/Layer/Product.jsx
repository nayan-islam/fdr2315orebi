import React from 'react'
import cr01 from '../../../public/card/cr01.png'
import { Link } from 'react-router-dom'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FiRefreshCcw } from 'react-icons/fi'


const OverlayLi = ({LareText, Lareicon }) => {
  return (
               <li>
                  <Link className='flex justify-end gap-4 items-center font-DM text-[#767676] transition-all duration-300 hover:text-[#262626] hover:font-bold'>
                   {LareText} {Lareicon}
                  </Link>
                </li>
  ) 
}
// ========================
const Product = ({LareText1, LareText2,LareText3,offer,className, src, brand, productPrice, productName  }) => {
  return (
    <div className=' w-[370px] group font-DM relative'>
        <div className="img w-full h-[370px] relative">
            <img className='w-full h-full object-cover' src={src} alt={src} />
            <div className="overla absolute z-10 bottom-0 left-0 w-full py-6 px-7 bg-slate-300 opacity-0 group-hover:opacity-100">
              <ul>
              <OverlayLi  LareText='Add to Wish List' Lareicon={<FaHeart/>} />
              <OverlayLi  LareText='Compare'  Lareicon={<FiRefreshCcw />}/>
              <OverlayLi  LareText='Add to Cart' Lareicon={<FaShoppingCart />}/>
              </ul>
            </div>
            <button className={`absolute top-5 left-5 w-24 bg-[#262626] text-white text-sm font-bold ${className}`} >
          {offer}
        </button>
        </div>
        {/* ====================================== */}
        <div className="text pt-6 font-DM">
            <div className="price flex justify-between items-baseline mb-3">
                <h3 className='font-bold text-xl text-[#262626]'>{productName}</h3>
                <span className='text-base text-[#767676]'> ${productPrice} </span>
            </div>
            <div className="brand text-base text-[#767676]"> {brand}</div>

        </div>
       
    </div>
  
  )
}

export default Product

