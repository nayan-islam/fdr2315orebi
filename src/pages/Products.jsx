import React, { useState } from 'react'
import Brebcumb from '../component/Layer/Brebcumb'
import Container from '../component/Layer/Container'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Paginate from '../component/Layer/Paginate'

const Products = () => {
    let [show, setShow] = useState(false)

    let [showProduct, setShowProduct] = useState(12)

    let optionValue = (element)=>{
        let showNumber = Number(element.target.value)
        setShowProduct(showNumber)
    }

    


    return (
        <div>
            <Container>
                <Brebcumb />
                <div className='flex justify-between'>
                    <div className="left w-[370px] bg-slate-300 py-16">

                        <div>
                            <h3 className='bg-slate-100 text-3xl font-DM'>Shop by Category</h3>
                            <ul>
                                <li onClick={() => setShow(!show)} className=' bg-red-200 relative'>Category 1
                                    <div>
                                                                              
                                        <FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show?"opacity-0 rotate-90":"opacity-100"}`} />
                                        <FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show?"opacity-100 ":"opacity-0 -rotate-90"}`} />
                                  
                                    </div>
                                </li>
                                {
                                    show && (<ul className='bg-green-400'>
                                        <li>home</li>
                                        <li>home</li>
                                        <li>home</li>
                                    </ul>)
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="right w-[1190px]">
                        <div className='bg-slate-300 py-4 flex justify-end'>
                            <select onChange={optionValue}>
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="48">48</option>
                            </select>
                        </div>

                                    <Paginate itemsPerPage={showProduct}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Products