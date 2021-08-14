import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import Head from 'next/head'
import Image from 'next/image'
import productImage from '../public/assets/images/products/diet-capsule.png'
import PurchaseModal from '../components/PurchaseModal'
import { useState } from 'react'

function Product() {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
      <Head>
        <title>Kapsul Diet Ontrowulan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MobileNavbar />
        <TopNavbar />

        <div className="flex flex-col items-center h-auto">
          <div className="relative flex items-center justify-center w-full ">
            <Navbar type="page" />
          </div>
        </div>

        <div className=" w-full h-auto lg:h-screen lg:mt-5 bg-gradient-to-tr from-[#f9c3a2] via-[#EBA87E] to-[#EBA87E]  ">
          <div className="relative flex flex-col items-center justify-between w-full h-auto mx-auto lg:h-screen lg:flex-row lg:max-w-3/4 lg:space-x-24">
            <div className="w-full px-7 lg:w-1/2">
              <div className="relative flex items-center w-full lg:w-[30rem] h-[40rem] mx-auto">
                <div className="absolute w-full lg:w-[35rem] -ml-3 lg:-ml-5 -mb-5 lg:-mb-10 h-[25rem] lg:h-[40rem] bg-brand-green shadow-around"></div>
                <div className="absolute w-full lg:w-[35rem] h-[25rem] lg:h-[40rem] bg-brand-gold shadow-around"></div>
                <div className="absolute hidden w-24 h-24 bg-transparent border-t-2 border-r-2 border-brand-green/50 lg:-top-8 lg:-right-28 lg:block"></div>
                <Image src={productImage} className="absolute inset-0 w-full h-auto" placeholder="blur" />
              </div>
            </div>
            <div className="w-full px-6 lg:w-1/2">
              <h1 className="font-thin text-2xl lg:text-4xl text-[#185445] ">Kapsul Diet</h1>
              <h1 className="font-serif font-black text-5xl lg:text-7xl text-[#185445] ">Ontrowulan</h1>
              <h4 className="font-serif font-black text-md lg:text-xl text-[#185445] ">Ramuan alam warisan leluhur terbuat dari bahan alami</h4>
              <div className="h-1 w-14 bg-[#185445]"></div>
              <p className="font-serif text-sm lg:text-lg text-[#185445] mt-8">Produk jejamuan herbal yang dibuat dari bahan alam pilihan tanpa bahan kimia berkhasiat membantu menyehatkan tubuh tanpa efek samping.</p>

              <div className="flex flex-col-reverse mt-10 lg:items-center lg:flex-row lg:space-x-10">
                <button className="px-3 py-2 mt-6 text-lg font-black uppercase rounded-lg lg:mt-0 h-14 lg:w-52 bg-brand-green text-brand-gold" onClick={() => setIsOpen(true)}>Beli Sekarang</button>
                <h4 className="text-3xl font-black  text-[#185445]">Rp 220.000<span className="text-xl font-thin text-black">/botol</span></h4>
              </div>

              <div className="flex flex-col items-center mt-10 mb-10 lg:mt-20 lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0">
                <div className="flex flex-col w-full border-b border-b-0 lg:border-r lg:w-3/12 border-brand-green/50">
                  <h1 className="text-lg font-thin text-black ">Bahan-bahan</h1>
                  <h1 className="font-black text-2xl text-[#185445] ">100% Herbal</h1>
                </div>
                <div className="flex flex-col w-full border-b lg:border-b-0 lg:border-r lg:w-3/12 border-brand-green/50">
                  <h1 className="text-lg font-thin text-black ">Jumlah Kapsul</h1>
                  <h1 className=" font-black text-2xl text-[#185445] ">56 Kapsul</h1>
                </div>
                <div className="flex flex-col w-full lg:w-3/12 border-brand-green/50">
                  <h1 className="text-lg font-thin text-black ">Cara Penyimpanan</h1>
                  <h1 className=" font-black text-2xl text-[#185445] "> Suhu 36° </h1>
                </div>
              </div>

            </div>
          </div>

        </div>

        <PurchaseModal open={isOpen} opener={setIsOpen}/>
      </main>
      <Footer />
    </>

  )

}

export default Product;
