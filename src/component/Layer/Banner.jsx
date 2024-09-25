import React, { useState } from 'react'
import Slider from 'react-slick';
import Image from './Image';
import ban01 from '../../../public/banner/banner01.png'

const Banner = () => {
    let[active, setActive]=useState(0)
    var settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "0px",
                padding: "0px",
                position:'absolute',
                left:"13%",
                top:'50%',
                transform:"translateY-(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`flex items-center border-r-2 text-[10px] ${i == active ? "text-[#262626] border-[#262626]":"text-transparent border-white"}`}
              style={{
                width: "22px",
                height:'30px',
              }}
            >
              0{i + 1}
            </div>
          ),
          beforeChange: (items, index)=>{
            setActive(index)
          },
          responsive: [
        
            {
              breakpoint: 480,
              settings: {
                appendDots: dots => (
                    <div
                      style={{
                        borderRadius: "0px",
                        padding: "0px",
                        position:'absolute',
                        right:"50%",
                        bottom:'10%',
                        transform:"translateX-(-50%)",
                      }}
                    >
                      <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
                    </div>
                  ),
                  customPaging: i => (
                    <div className={`flex justify-center items-center border-b text-[8px] ${i == active ? "text-[#262626] border-[#262626]":"text-transparent border-white"}`}
                      style={{
                        width: "20px",
                        height:'15px',
                      }}
                    >
                      0{i + 1}
                    </div>
                  ),
              }
            }
          ]
      };
  return (
    <div className=''>
            <Slider {...settings}>
        <div>
             <Image hreaf='/' src={ban01}/>
         </div> 
         <div>
             <Image hreaf='/' src={ban01}/>
         </div>
          <div>
             <Image hreaf='/' src={ban01}/>
         </div>
    </Slider>
    </div>
  )
}

export default Banner
