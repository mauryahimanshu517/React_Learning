import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Catgories from './Catgories';



function Carousel() {

    const { data, fetchAllProduct } = useContext(DataContext)
    useEffect(() => {
        fetchAllProduct()
    }, [])

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`${className} mx-30`} style={{ zIndex: 3 }}>
                <AiOutlineArrowLeft className='arrows' style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", padding: "2px", left: "50px" }} />

            </div>
        )
    }

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className} mx-30`} style={{ zIndex: 3 }}>
                <AiOutlineArrowRight className='arrows' style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", postion: "absolute", padding: "2px", right: "50px" }} />

            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // keep this true to use custom arrows
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
            <Slider {...settings} >
                {
                    data?.sort(() => Math.random() - 0.5)?.slice(0, 7).map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
                            <div className="flex gap-10 justify-center h-[600px] item-center px-4 " >
                                <div className="space-y-6 my-40">
                                    <h3 className="text-red-500 font-semibold font-san text-sm ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, laudantium!</h3>
                                    <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">{item.title}</h1>
                                    <p className="md:w-[500px] line-clamp-3 text-white pr-7">{item.description}</p>
                                    <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>

                                </div>
                                <div>
                                    <img src={item.images} alt={item.titile} className='rounded-full w-[500px] hover:scale-105 my-10 transition-all shadow-2xl shadow-red-400' />
                                </div>
                            </div>
                        </div>
                    })
                }

            </Slider>
            <Catgories />

        </>
    )
}

export default Carousel