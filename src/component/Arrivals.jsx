import React, { useEffect, useState } from 'react'
import Heading from './Layer/Heading'
import Container from './Layer/Container'
import Product from './Layer/Product'
import Slider from 'react-slick'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import axios, { all } from 'axios'


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="w-16 h-16 absolute right-0 top-1/2 -translate-y-1/2 bg-[#979797] rounded-full  text-center leading-[64px]"
      onClick={onClick}
    >
      <GrFormNextLink className='inline-block text-white' />

    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="w-16 h-16 absolute top-1/2 left-8 -translate-x-1/2 z-10  bg-[#979797] rounded-full  text-center leading-[64px]"
      onClick={onClick}
    >
      <GrFormPreviousLink className='inline-block text-white' />

    </div>
  );
}

const Arrivals = () => {

  let [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get('https://dummyjson.com/products')
      setAllProduct(response.data.products);
    }
    
    getData()
  }, [])
  
  

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,

        }
      },
    ]
  };
  return (
    <div className='md:mt-36 mt-8'>
      <Container>
        <Heading headingText='New Arrivals' />
        {/* ==================================================================== */}
        <div className="">

          <Slider {...settings}>
            {
              allProduct.map((item,index)=>(
                <Product key={index} productName={item.title} productPrice={item.price} src={item.thumbnail} offer='25%' className='p-2' />
              ))
            }
          </Slider>

        </div>

      </Container>
    </div>
  )
}

export default Arrivals