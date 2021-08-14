import Head from 'next/head'
import {
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  ArrowLeft,
  Menu,
  ArrowPointRight,
  Accent,
  Play
} from '../icons'
import dynamic from 'next/dynamic';
import '@brainhubeu/react-carousel/lib/style.css';
import { autoplayPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productImage from '../public/assets/images/products/diet-capsule.png'

import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';


const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

function Home() {

  const [ fixedNavbar, setFixedNavbar ] = useState(false)

  const [ testiOnePlayerActive, setTestiOnePlayerActive ] = useState(false)
  const [ testiTwoPlayerActive, setTestiTwoPlayerActive ] = useState(false)
  const [ testiThreePlayerActive, setTestiThreePlayerActive ] = useState(false)

  if( typeof document != 'undefined' ) {
    document.addEventListener('scroll', (e) => {

      if( window.scrollY >= 80 && ! fixedNavbar ) {
        setFixedNavbar(true)

      }


      if( window.scrollY <= 80 && fixedNavbar ) {
        setFixedNavbar(false)

      }

      const slideLeft = document.getElementById('slideLeft')
      const slideRight = document.getElementById('slideRight')

      if(  slideRight &&  slideLeft ) {
      }
      else
      {
        if( slideLeft ) {
          slideLeft.click()
        }
        else if(slideRight)
        {

          slideRight.click()
        }

      }

    })
  }

  return (
    <div >
      <Head>
        <title>Jamu Ontrowulan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-auto mb-10">

        <MobileNavbar />

        <TopNavbar />

        <div className="flex flex-col items-center h-screen">
          <div className="flex items-center justify-center h-[90%] lg:h-[80%] w-full relative ">

            <Navbar />

            <Carousel
              plugins={[
                'infinite',
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 3000,
                  }
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button id="slideLeft" className="absolute bottom-[50%] z-30 left-2 lg:left-5 text-brand-gold"><ArrowLeft className="w-10 h-10 text-brand-gold" /></button>,
                    arrowLeftDisabled:<button className="absolute bottom-[50%] z-30 lg:left-5 left-2 text-brand-gold"><ArrowLeft className="w-10 h-10 opacity-50 text-brand-gold" /></button>,
                    arrowRight: <button id="slideRight" className="absolute bottom-[50%] lg:right-5 z-30  right-2 text-brand-gold"><ArrowRight className="w-10 h-10 text-brand-gold" /></button>,
                    arrowRightDisabled: <button className="absolute bottom-[50%] z-30 right-2 lg:right-5 text-brand-gold"><ArrowRight className="w-10 h-10 opacity-50 text-brand-gold" /></button>,
                    addArrowClickHandler: true,
                  }
                }
              ]}
              className="absolute top-0 w-full h-full"
            >
              <div className="relative z-50 w-full h-full ">
                <div className="absolute inset-0 z-20 block w-full h-full overlay-radial-gradient-md "></div>
                <div className="absolute bottom-[15%] md:bottom-[20%] lg:bottom-[25%] w-full h-auto z-30 ">
                  <div className="relative flex items-center w-full ">
                    <div className="w-full max-w-6xl pl-5 mx-auto ">
                      <h1 className="text-3xl font-black tracking-wide text-white uppercase lg:text-4xl">Ontrowulan</h1>
                      <h4 className="text-xl lg:text-xl mt-6 font-semibold lg:tracking-[.6rem] tracking-[.4rem] text-white uppercase">Kapsul Diet Herbal</h4>
                      <p className="mt-2 text-sm font-thin text-white lg:text-lg ">Meningkatkan metabolisme, Mencerahkan kulit</p>
                      <p className="font-thin text-white text-md lg:text-lg ">Efektif membantu penurunan berat badan</p>
                      <Link href="/product">
                        <button className="w-40 h-10 px-3 mt-5 font-black text-white uppercase py-auto bg-brand-gold-darker">Selengkapnya</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <img className="object-cover w-full h-screen"  src="/assets/images/slider/1.png" placeholder="blur"/>
              </div>
              <div className="relative z-50 w-full h-full overlay-radial-gradient-md ">
                <div className="absolute inset-0 z-20 block w-full h-full overlay-radial-gradient-md "></div>
                <div className="absolute bottom-[15%] md:bottom-[20%] lg:bottom-[25%] w-full h-auto z-30 ">
                  <div className="relative flex items-center w-full ">
                    <div className="w-full max-w-md pl-5 mx-auto lg:max-w-5xl lg:max-w-6xl">
                      <h1 className="text-3xl font-black tracking-wide text-white uppercase md:text-4xl ">Ontrowulan</h1>
                      <h4 className="text-xl lg:text-xl mt-6 font-semibold lg:tracking-[.6rem] tracking-[.4rem] text-white uppercase">Kapsul Diet Herbal</h4>
                      <p className="mt-2 font-thin text-white text-md lg:text-lg ">Meningkatkan metabolisme, Mencerahkan kulit</p>
                      <p className="font-thin text-white text-md lg:text-lg ">Efektif membantu penurunan berat badan</p>
                      <Link href="/product">
                        <button className="w-40 h-10 px-3 mt-5 font-black text-white uppercase py-auto bg-brand-gold-darker">Selengkapnya</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <img className="object-cover w-full h-screen"  src="/assets/images/slider/2.png" placeholder="blur"/>
              </div>
              <div className="relative z-50 w-full h-full overlay-radial-gradient-md ">
                <div className="absolute inset-0 z-20 block w-full h-full overlay-radial-gradient-md "></div>
                <div className="absolute bottom-[15%] md:bottom-[20%] lg:bottom-[25%] w-full h-auto z-30 ">
                  <div className="relative flex items-center w-full ">
                    <div className="w-full max-w-md pl-5 mx-auto lg:max-w-5xl lg:max-w-6xl">
                      <h1 className="text-3xl font-black tracking-wide text-white uppercase md:text-4xl ">Ontrowulan</h1>
                      <h4 className="text-xl lg:text-xl mt-6 font-semibold lg:tracking-[.6rem] tracking-[.4rem] text-white uppercase">Kapsul Diet Herbal</h4>
                      <p className="mt-2 font-thin text-white text-md lg:text-lg ">Meningkatkan metabolisme, Mencerahkan kulit</p>
                      <p className="font-thin text-white text-md lg:text-lg ">Efektif membantu penurunan berat badan</p>
                      <Link href="/product">
                        <button className="w-40 h-10 px-3 mt-5 font-black text-white uppercase py-auto bg-brand-gold-darker">Selengkapnya</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <img className="object-cover w-full h-screen"  src="/assets/images/slider/3.png" placeholder="blur"/>
              </div>
            </Carousel>
          </div>
          <div className="flex items-center w-full bg-white justify-items-center h-[30%]">
            <h4 className="text-3xl font-bold tracking-[.6rem] m-auto text-black uppercase">Produk</h4>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full h-8 bg-brand-gold-darker " />
          <div className="w-full h-auto">
            <img src="/assets/images/bg/ingredient-footer-bg-fragment-1.png"  className="object-cover w-full h-[25rem] filter grayscale"  />
          </div>
          <div className="w-full h-auto">
            <img src="/assets/images/bg/ingredient-footer-bg.png"  className="object-cover w-full h-80"  />
          </div>
          <div className="absolute top-0 flex flex-col justify-center w-full h-auto px-5 m-auto -mt-14 lg:flex-row lg:max-w-3xl">
            <div className="w-[95%]  h-[20rem] m-auto lg:w-1/2 lg:h-[27rem] bg-gradient-to-t from-[#f9c3a2] via-[#EBA87E] to-[#EBA87E] shadow-around relative flex items-center justify-center">
                <Image src={productImage} className="absolute inset-0 w-full h-auto" placeholder="blur" />
            </div>
            <div className="w-[95%] h-[25rem] m-auto lg:w-1/2 lg:h-[27rem] bg-white shadow-around p-8 lg:p-14 relative">
              <h3 className="text-2xl font-black uppercase">Kapsul Diet Ontrowulan</h3>
              <p className="mt-3 font-light">Merupakan capsule yang dibuat dari bahan alami herbal, yang bermanfaat untuk menurunkan berat badan, memperbaiki metabolisme tubuh dan membantu mengurangi lemak tubuh.</p>
              <div className="w-24 h-1 mt-5 bg-gray-400 "></div>
              <div className="absolute bottom-0 right-0 flex items-center justify-between w-full h-20 pl-8 lg:pl-14">
                <h1 className="text-3xl font-black text-brand-gold-darker">Rp. 220.000</h1>
                <div className="w-20 h-20 bg-[#EBA87E] p-2">
                  <ArrowPointRight className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="w-full h-8 bg-brand-gold-darker" />
          <div className="flex flex-col items-center justify-center w-full h-auto ">

            <div className="relative flex items-center justify-center w-full mx-auto mt-16 ">
              <h4 className="absolute mt-[4.5rem] ml-2 text-4xl lg:text-6xl font-bold uppercase text-brand-green">Cerita Mereka</h4>
              <h4 className="absolute mt-16 text-4xl font-bold uppercase lg:text-6xl text-brand-gold-darker">Cerita Mereka</h4>
            </div>

            <div className="flex flex-col justify-between w-full h-auto mt-10 max-w-7xl">

              <div className="flex flex-col justify-between w-full h-auto px-6 mt-20 lg:px-0 lg:flex-row lg:space-x-44 lg:space-y-0 space-y-64">
                <div className="relative w-full lg:w-1/2">
                  <div className="absolute ml-2 lg:ml-5 mt-2 lg:mt-5 inset-0 rounded-lg w-full lg:w-[40rem] h-52 lg:h-96 bg-brand-green shadow-around"></div>
                  <div className="absolute inset-0 rounded-lg w-full lg:w-[40rem] h-52  lg:h-96 bg-brand-gold shadow-around">
                    <div className="absolute -ml-24 h-36 bottom-8 w-44 text-brand-gold-darker">
                      <Accent className="text-brand-gold-darker"/>
                    </div>
                    {
                      testiOnePlayerActive
                        ? <>
                            <iframe className="absolute w-full h-full rounded-lg" src="https://www.youtube.com/embed/rguiIamh4l8?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                          </>
                        : <>
                          <img src="/assets/images/testimoni/1.jpg" placeholder="blur" className="absolute object-cover w-full h-full rounded-lg" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg bg-opacity-30" >
                            <Play className="w-20 h-20 text-white cursor-pointer opacity-80 hover:opacity-100 transition duration-300" onClick={() => setTestiOnePlayerActive(true)}/>
                          </div>
                        </>
                    }

                  </div>
                </div>

                <div className="w-full h-auto mt-10 lg:w-1/2 ">
                  <div className="relative w-full h-auto p-5 rounded-lg bg-brand-gold/40 transform -rotate-2">
                    <h4 className="z-30 mx-auto font-serif text-xl lg:text-2xl text-black/50">
                      Ini copywriting cerita progresi jamu,, minta teks aslinya ya ehe~, <span className="border-b-2 font-base border-brand-green">contoh point penting</span>, lalu buat copywriting agak banyakan dikit biar ada space nya wkwkwk, <span className="border-b-2 font-base border-brand-green">turun berat xx KG</span>, <span className="border-b-2 font-base border-brand-green">gelowing</span> & <span className="border-b-2 font-base border-brand-green">menemukan jati diri </span>, bingung sebenernya mau nulis apa lagi, tapi biar space nya agak banyakan dikit tulis tulisan ini aja lah, nanti diganti yang beneran ya...
                    </h4>
                  </div>

                  <div className="relative flex items-center mt-10 space-x-3">
                    <div className="z-30 w-12 h-1 bg-brand-green"></div>
                    <div className="flex flex-col ">
                      <h4 className="font-serif text-lg font-black text-brand-gold-darker">Jennys Ellenadiva</h4>
                      <h4 className="font-serif text-lg italic text-gray-500/50">Pokalis Blekping</h4>
                    </div>
                  </div>
                </div>

              </div>


              <div className="flex flex-col-reverse lg:flex-row justify-between  w-full h-auto mt-[8rem] lg:mt-[15rem] lg:space-x-32  px-6 ">

                <div className="w-full h-auto lg:mt-10 lg:w-1/2 mt-[17rem] ">
                  <div className="relative w-full h-auto p-5 rounded-lg bg-brand-gold/40 transform rotate-2">
                    <h4 className="z-30 mx-auto font-serif text-xl lg:text-2xl text-black/50">
                      Ini copywriting cerita progresi jamu,, minta teks aslinya ya ehe~, <span className="border-b-2 font-base border-brand-green">contoh point penting</span>, lalu buat copywriting agak banyakan dikit biar ada space nya wkwkwk, <span className="border-b-2 font-base border-brand-green">turun berat xx KG</span>, <span className="border-b-2 font-base border-brand-green">gelowing</span> & <span className="border-b-2 font-base border-brand-green">menemukan jati diri </span>, bingung sebenernya mau nulis apa lagi, tapi biar space nya agak banyakan dikit tulis tulisan ini aja lah, nanti diganti yang beneran ya...
                    </h4>
                  </div>

                  <div className="relative flex items-center mt-10 space-x-3">
                    <div className="z-30 w-12 h-1 bg-brand-green"></div>
                    <div className="flex flex-col ">
                      <h4 className="font-serif text-lg font-black text-brand-gold-darker">Muhammad Ing Abdul Qodir Jaelani</h4>
                      <h4 className="font-serif text-lg italic text-gray-500/50">Pengembara Khatulistiwa</h4>
                    </div>
                  </div>
                </div>
                <div className="relative w-full lg:w-1/2">
                  <div className="overflow-hidden">
                    <div className="absolute bg-[#EBA87E] rounded-full -top-16 lg:-right-32  lg:ml-96 mb-36 lg:w-44 lg:h-44 w-0 h-0 "></div>
                  </div>
                  <div className="absolute ml-2 lg:ml-5 mt-2 lg:mt-5 inset-0 rounded-lg w-full h-52 lg:w-[40rem] lg:h-96 bg-brand-green shadow-around"></div>
                  <div className="absolute inset-0 rounded-lg w-full h-52  lg:w-[40rem] lg:h-96 bg-brand-gold shadow-around">
                    <div className="absolute visible -ml-24 h-36 bottom-8 w-44 text-brand-green lg:invisible">
                      <Accent className="text-gray-500/50"/>
                    </div>
                    {
                      testiTwoPlayerActive
                        ? <>
                            <iframe className="absolute z-50 w-full h-full rounded-lg" src="https://www.youtube.com/embed/aQIA2Qjm3NA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                          </>
                        : <>
                          <img src="/assets/images/testimoni/2.jpg" placeholder="blur" className="absolute object-cover w-full h-full rounded-lg" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg bg-opacity-30" >
                            <Play className="w-20 h-20 text-white cursor-pointer opacity-80 hover:opacity-100 transition duration-300" onClick={() => setTestiTwoPlayerActive(true)}/>
                          </div>
                        </>
                    }

                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between w-full h-auto px-6 mt-44 lg:px-0 lg:flex-row lg:space-x-44 lg:space-y-0 space-y-64">
                <div className="relative w-full lg:w-1/2">
                  <div className="absolute mb-20 -top-10 -right-[20rem] ml-[30rem] w-0 lg:w-44 h-0 lg:h-44 ">
                      <Accent className="text-gray-500/50"/>
                  </div>
                  <div className="absolute ml-2 lg:ml-5 mt-2 lg:mt-5 inset-0 rounded-lg w-full lg:w-[40rem] h-52 lg:h-96 bg-brand-green shadow-around"></div>
                  <div className="absolute inset-0 rounded-lg w-full lg:w-[40rem] h-52  lg:h-96 bg-brand-gold shadow-around">
                    <div className="absolute visible -ml-24 h-36 bottom-8 w-44 text-brand-gold-darker lg:invisible">
                      <Accent className=" text-[#EBA87E]"/>
                    </div>
                    {
                      testiThreePlayerActive
                        ? <>
                            <iframe className="absolute w-full h-full rounded-lg" src="https://www.youtube.com/embed/Bh3YcEpGMz4?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                          </>
                        : <>
                          <img src="/assets/images/testimoni/3.jpg" placeholder="blur" className="absolute object-cover w-full h-full rounded-lg" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg bg-opacity-30" >
                            <Play className="w-20 h-20 text-white cursor-pointer opacity-80 hover:opacity-100 transition duration-300" onClick={() => setTestiThreePlayerActive(true)}/>
                          </div>
                        </>
                    }

                  </div>
                </div>

                <div className="w-full h-auto mt-10 lg:w-1/2 ">
                  <div className="relative w-full h-auto p-5 rounded-lg bg-brand-gold/40 transform -rotate-2">
                    <h4 className="z-30 mx-auto font-serif text-xl lg:text-2xl text-black/50">
                      Ini copywriting cerita progresi jamu,, minta teks aslinya ya ehe~, <span className="border-b-2 font-base border-brand-green">contoh point penting</span>, lalu buat copywriting agak banyakan dikit biar ada space nya wkwkwk, <span className="border-b-2 font-base border-brand-green">turun berat xx KG</span>, <span className="border-b-2 font-base border-brand-green">gelowing</span> & <span className="border-b-2 font-base border-brand-green">menemukan jati diri </span>, bingung sebenernya mau nulis apa lagi, tapi biar space nya agak banyakan dikit tulis tulisan ini aja lah, nanti diganti yang beneran ya...
                    </h4>
                  </div>

                  <div className="relative flex items-center mt-10 space-x-3">
                    <div className="z-30 w-12 h-1 bg-brand-green"></div>
                    <div className="flex flex-col ">
                      <h4 className="font-serif text-lg font-black text-brand-gold-darker">Patricia Kamalaeng</h4>
                      <h4 className="font-serif text-lg italic text-gray-500/50">Pencerita Mistis & Pecinta Sampoerna Mild</h4>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Home
