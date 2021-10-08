import dynamic from 'next/dynamic';
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';


import 'swiper/css';


import sereh from '../public/assets/images/ingredients/sereh.png'
import asamJawa from '../public/assets/images/ingredients/asam-jawa.png'
import bengkoang from '../public/assets/images/ingredients/bengkoang.png'
import daunKelor from '../public/assets/images/ingredients/daun-kelor.png'
import daunSalam from '../public/assets/images/ingredients/daun-salam.png'
import jahe from '../public/assets/images/ingredients/jahe.png'
import kunyit from '../public/assets/images/ingredients/kunyit.png'
import lemon from '../public/assets/images/ingredients/lemon.png'
import ketumbar from '../public/assets/images/ingredients/ketumbar.png'

const IngredientsCarousel = (props) => {

  const { spaceBetween, view, reverse, delay } = props

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={spaceBetween ?? 20}
      slidesPerView={view ?? 3}
      direction={`vertical`}
      loop={true}
      autoplay={{
        delay: delay ?? 3000,
        reverseDirection: reverse ?? false
      }}
      className="h-screen"
    >
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={asamJawa} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]  ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">01. Asam Jawa</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={sereh} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%] ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">02. Sereh</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={bengkoang} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]   ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">03. Bengkoang</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <div className="w-full h-[90%]  relative">
          <Image src={daunKelor} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]  ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">04. Daun Kelor</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={daunSalam} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]  ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">05. Daun Salam </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={jahe} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]   ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">06. Jahe</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={kunyit} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]   ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">07. Kunyit</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={lemon} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%] ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">08. Lemon</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="w-full h-[90%]  relative">
          <Image src={ketumbar} layout="fill" objectFit="cover"/>
        </div>
        <div className=" w-full h-[10%]  ">
          <h1 className="text-xl font-light font-black text-black font-josefin-slab">09. Ketumbar</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default dynamic(() => Promise.resolve(IngredientsCarousel), {
  ssr: false
})
