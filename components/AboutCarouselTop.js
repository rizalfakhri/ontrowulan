import dynamic from 'next/dynamic';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';


import 'swiper/css';


import slide1 from '../public/assets/images/about/1.png'
import slide2 from '../public/assets/images/about/2.png'
import slide3 from '../public/assets/images/about/3.png'
import slide4 from '../public/assets/images/about/4.png'
import slide5 from '../public/assets/images/about/5.png'
import slide6 from '../public/assets/images/about/6.png'

const AboutCarouselTop = (props) => {

  const { spaceBetween, view, reverse, delay } = props

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={spaceBetween ?? 20}
      slidesPerView={view ?? 4}
      direction={`horizontal`}
      autoplay={{
        delay: delay ?? 3000,
        reverseDirection: reverse ?? false,
        stopOnLastSlide: true
      }}
    >
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
          <Image src={slide6} layout="fill" objectFit="cover" placeholder="blur"/>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-green to-brand-gold-darker opacity-30"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
          <Image src={slide2} layout="fill" objectFit="cover" placeholder="blur" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-green to-brand-gold-darker opacity-30"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
          <Image src={slide3} layout="fill" objectFit="cover" placeholder="blur"/>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-green to-brand-gold-darker opacity-30"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
          <Image src={slide4} layout="fill" objectFit="cover" placeholder="blur"/>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-green to-brand-gold-darker opacity-30"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
          <Image src={slide5} layout="fill" objectFit="cover" placeholder="blur"/>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-green to-brand-gold-darker opacity-30"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full p-3 h-72 ">
          <Image src={slide1} layout="fill" objectFit="cover" placeholder="blur"/>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-green to-brand-gold-darker opacity-30"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default dynamic(() => Promise.resolve(AboutCarouselTop), {
  ssr: false
})
