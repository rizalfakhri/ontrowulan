import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {useEffect, useState} from 'react';

import {
  Email,
  Whatsapp,
  Marker,
  Instagram
} from '../icons'

const MapLocation = dynamic(
  () => import('../components/MapLocation'),
  { ssr: false }
)


const ContactUs = () => {

  const [ isBrowser, setIsBrowser ] = useState(false)

  useEffect(() => setIsBrowser(true), [])

  return (

    <>
      <Head>
        <title>Tentang Kami - Ontrowulan</title>
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

        <div className="w-full h-screen pt-28 lg:mt-5 bg-gradient-to-br from-brand-gold to-brand-gold-darker">
          <div className="flex flex-col max-w-6xl mx-auto space-y-1">
            <h1 className="text-6xl font-black font-cormorant-infant text-brand-green">Hubungi Kami </h1>
            <p className="text-md font-poppins text-brand-green">Jika ada sebarang pertanyaan mengenai Jamu Ontrowulan.</p>
          </div>
          <div className="flex justify-between h-auto max-w-6xl mx-auto mt-5 rounded-lg ">
            <div className="w-[30%] bg-brand-green h-auto rounded-l-lg p-5">
              <h1 className="text-xl font-bold font-poppins text-brand-gold">Informasi Kontak</h1>

              <div className="mt-3 grid grid-cols-12 gap-2">
                <Whatsapp className="w-5 h-5 text-brand-gold-darker" />
                <Link href="https://wa.me/+6285860701965">
                  <p className="text-sm cursor-pointer col-span-11 text-brand-gold-darker font-poppins">+62 85860701965</p>
                </Link>
              </div>
              <div className="mt-2 grid grid-cols-12 gap-2">
                <Email className="w-5 h-5 text-brand-gold-darker" />
                <Link href="mailto:ontrowulan21@gmail.com">
                  <p className="text-sm cursor-pointer col-span-11 text-brand-gold-darker font-poppins">ontrowulan21@gmail.com</p>
                </Link>
              </div>
              <div className="mt-2 grid grid-cols-12 gap-2">
                <Instagram className="w-5 h-5 text-brand-gold-darker" />
                  <Link href="https://www.instagram.com/ontrowulan">
                  <p className="text-sm cursor-pointer col-span-11 text-brand-gold-darker font-poppins">@ontrowulan</p>
                </Link>
              </div>
              <div className="mt-2 grid grid-cols-12 gap-2">
                <Marker className="w-5 h-5 text-brand-gold-darker" />
                <p className="text-sm col-span-11 text-brand-gold-darker font-poppins">Paradise Serpong City Cluster Vista Blok F1 No.3 RT.004 RW.006 Kel, Babakan, Setu, Babakan, Kec. Setu, Kota Tangerang Selatan, Banten 15315</p>
              </div>

              <div className="py-5">
                <div className="w-full h-0.5 bg-brand-gold"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold font-poppins text-brand-gold">Link Lainya: </h1>
                <div className="flex flex-col items-center mt-5 space-y-2">
                  <Link href="https://www.tokopedia.com/ontr">
                    <button className="w-full h-8  rounded-lg bg-[#01923F] text-white">Tokopedia</button>
                  </Link>
                  <Link href="https://shopee.co.id/ontrowulan" >
                    <button className="w-full h-8  rounded-lg bg-[#FC5B31] text-white">Shopee</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[70%] bg-white h-auto rounded-r-lg relative">
                { isBrowser && <MapLocation /> }
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactUs

