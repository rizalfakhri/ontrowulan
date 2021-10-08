import dynamic from 'next/dynamic';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';


import 'swiper/css';


import slide1 from '../public/assets/images/about/7.png'
import slide2 from '../public/assets/images/about/8.png'
import slide3 from '../public/assets/images/about/9.png'
import slide4 from '../public/assets/images/about/10.png'
import slide5 from '../public/assets/images/about/11.png'

const AboutCarouselBottom = (props) => {

  const { spaceBetween, view, reverse, delay } = props

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={spaceBetween ?? 20}
      slidesPerView={view ?? 4}
      direction={`horizontal`}
      autoplay={{
        delay: delay ?? 3000,
        reverseDirection: true,
        stopOnLastSlide: true
      }}
    >
      <SwiperSlide className="flex flex-col items-center ">
        <div className="relative w-full h-72">
          <Image src={slide1} layout="fill" objectFit="cover" placeholder="blur"/>
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
        <div className="relative w-full h-72">
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default dynamic(() => Promise.resolve(AboutCarouselBottom), {
  ssr: false
})
