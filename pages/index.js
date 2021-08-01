import Head from 'next/head'
import {
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  ArrowLeft,
  Menu,
  ArrowPointRight
} from '../icons'
import dynamic from 'next/dynamic';
import '@brainhubeu/react-carousel/lib/style.css';
import { autoplayPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

function Home() {

  return (
    <div >
      <Head>
        <title>Jamu Ontrowulan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-auto max-w-screen">
        <div className="flex justify-between w-full h-16 max-w-6xl px-5 bg-white py-auto lg:hidden lg:px-5 justify-items-center bg-brand-green">
            <img src="/logo.png" className="w-12 h-12 my-auto" alt="" />
            <Menu className="my-auto w-9 h-9 text-brand-gold-darker" />
        </div>
        <div className="justify-between hidden w-full max-w-6xl mx-auto bg-white lg:flex lg:px-5 h-14 justify-items-center">
          <h1 className="text-2xl font-black tracking-[.7rem] text-bold uppercase my-auto">Ontrowulan</h1>
          <div className="flex items-center space-x-3">
            <Instagram className="text-white opacity-50 w-7 h-7"/>
            <Facebook className="text-white opacity-50 w-7 h-7"/>
            <Youtube className="text-white opacity-50 w-7 h-7"/>
          </div>
        </div>
        <div className="flex flex-col content-center h-screen">
          <div className="flex items-center justify-center h-[90%] lg:h-[80%] w-full relative ">
            <div className="absolute top-0 z-20 w-full h-10 bg-gradient-to-b from-[#101010] to-transparent lg:h-40 hidden lg:block"></div>
            <div className="absolute top-0 z-30 items-center hidden w-full h-20 max-w-6xl lg:flex lg:px-5 lg:h-28 space-x-16 ">
              <img src="/logo.png" className="my-auto lg:w-16 lg:h-16 h-14 w-14" alt="" />
              <h5 className="text-lg text-white hover:text-brand-gold transition duration-150 hover:cursor-pointer">Home</h5>
              <h5 className="text-lg text-white hover:text-brand-gold transition duration-150 hover:cursor-pointer">About Us</h5>
              <h5 className="text-lg text-white hover:text-brand-gold transition duration-150 hover:cursor-pointer">Our Products</h5>
              <h5 className="text-lg text-white hover:text-brand-gold transition duration-150 hover:cursor-pointer">Our Seller</h5>
              <h5 className="text-lg text-white hover:text-brand-gold transition duration-150 hover:cursor-pointer">Contact Us</h5>
            </div>
            <Carousel
              plugins={[
                'infinite',
                //{
                  //resolve: autoplayPlugin,
                  //options: {
                    //interval: 3000,
                  //}
                //},
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button className="absolute bottom-[50%] z-50 left-2 lg:left-5 text-brand-gold"><ArrowLeft className="w-10 h-10 text-brand-gold" /></button>,
                    arrowLeftDisabled:<button className="absolute bottom-[50%] z-50 lg:left-5 left-2 text-brand-gold"><ArrowLeft className="w-10 h-10 opacity-50 text-brand-gold" /></button>,
                    arrowRight: <button className="absolute bottom-[50%] lg:right-5 z-50  right-2 text-brand-gold"><ArrowRight className="w-10 h-10 text-brand-gold" /></button>,
                    arrowRightDisabled: <button className="absolute bottom-[50%] z-50 right-2 lg:right-5 text-brand-gold"><ArrowRight className="w-10 h-10 opacity-50 text-brand-gold" /></button>,
                    addArrowClickHandler: true,
                  }
                }
              ]}
              className="absolute top-0 w-full h-full"
            >
              <div className="relative z-50 w-full h-full ">
                <div className="absolute top-0 z-20 block w-full h-full overlay-radial-gradient-md lg:h-40 lg:hidden"></div>
                <div className="absolute bottom-[15%] md:bottom-[20%] lg:bottom-[25%] w-full h-auto z-30 ">
                  <div className="relative flex items-center w-full ">
                    <div className="w-full max-w-6xl pl-5 mx-auto ">
                      <h1 className="text-3xl font-black tracking-wide text-white uppercase lg:text-5xl">Ontrowulan</h1>
                      <h4 className="text-xl lg:text-2xl mt-6 font-semibold lg:tracking-[.6rem] tracking-[.4rem] text-white uppercase">Kapsul Diet Herbal</h4>
                      <p className="mt-2 font-thin text-white text-md lg:text-lg ">Meningkatkan metabolisme, Mencerahkan kulit</p>
                      <p className="font-thin text-white text-md lg:text-lg ">Efektif membantu penurunan berat badan</p>
                      <button className="w-40 h-10 px-3 mt-5 font-black text-white uppercase py-auto bg-brand-gold-darker">Read More</button>
                    </div>
                  </div>
                </div>
                <img className="object-cover w-full h-screen"  src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover" />
              </div>
              <div className="relative z-50 w-full h-full overlay-radial-gradient-md ">
                <div className="absolute top-0 z-20 block w-full h-full overlay-radial-gradient-md lg:h-40 lg:hidden"></div>
                <div className="absolute bottom-[15%] md:bottom-[20%] lg:bottom-[25%] w-full h-auto z-30 ">
                  <div className="relative flex items-center w-full ">
                    <div className="w-full max-w-md pl-5 mx-auto lg:max-w-5xl lg:max-w-6xl">
                      <h1 className="text-3xl font-black tracking-wide text-white uppercase md:text-6xl ">Ontrowulan</h1>
                      <h4 className="text-xl lg:text-2xl mt-6 font-semibold lg:tracking-[.6rem] tracking-[.4rem] text-white uppercase">Kapsul Diet Herbal</h4>
                      <p className="mt-2 font-thin text-white text-md lg:text-lg ">Meningkatkan metabolisme, Mencerahkan kulit</p>
                      <p className="font-thin text-white text-md lg:text-lg ">Efektif membantu penurunan berat badan</p>
                      <button className="w-40 h-10 px-3 mt-5 font-black text-white uppercase py-auto bg-brand-gold-darker">Read More</button>
                    </div>
                  </div>
                </div>
                <img className="object-cover w-full h-screen"  src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover" />
              </div>
            </Carousel>
          </div>
          <div className="flex items-center w-full bg-white justify-items-center h-[20%]">
            <h4 className="text-3xl font-bold tracking-[.6rem] m-auto text-black uppercase">Products</h4>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full h-8 bg-brand-gold-darker " />
          <div className="object-center w-full bg-no-repeat h-96 filter grayscale" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover)' }} />
          <div className="absolute top-0 flex flex-col justify-center w-full h-auto px-5 m-auto -mt-5 lg:-mt-14 lg:flex-row lg:max-w-3xl">
            <div className="w-[95%]  h-[20rem] m-auto lg:w-1/2 lg:h-96 bg-[#EBA87E] shadow-around"></div>
            <div className="w-[95%] h-[25rem] m-auto lg:w-1/2 lg:h-96 bg-white shadow-around p-8 lg:p-14 relative">
              <h3 className="text-2xl font-black uppercase">Diet Capsule</h3>
              <p className="mt-3 font-light">Merupakan capsule yang dibuat dari bahan alami herbal, yang bermanfaat untuk menurunkan berat badan, memperbaiki metabolisme tubuh dan membantu mengurangi lemak tubuh.</p>
              <div className="w-24 h-1 mt-5 bg-gray-400"></div>
              <div className="absolute bottom-0 right-0 flex items-center justify-between w-full h-20 pl-8 lg:pl-14">
                <h1 className="text-3xl font-black text-brand-gold-darker">Rp. 220.000</h1>
                <div className="w-20 h-20 bg-[#EBA87E] p-2">
                  <ArrowPointRight className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-96 lg:mt-1"></footer>
    </div>
  )
}

export default Home
