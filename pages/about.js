import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import Head from 'next/head'
import dynamic from 'next/dynamic'

const AboutCarouselTop = dynamic(() => import('../components/AboutCarouselTop'), {ssr: false})
const AboutCarouselBottom = dynamic(() => import('../components/AboutCarouselBottom'), {ssr: false})

export default function About() {
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

        <div className="w-full h-auto pt-28 lg:mt-5 bg-gradient-to-br from-brand-gold to-brand-gold-darker">
          <div className="flex items-end justify-between max-w-6xl mx-auto">
            <h1 className="w-1/2 text-6xl font-black font-cormorant-infant text-brand-green">Ramuan Alam Warisan Leluhur.</h1>
            <p className="text-2xl italic font-light font-poppins text-brand-green">EST. 2021</p>
          </div>

          <div className="flex flex-col w-full h-auto mt-10 space-y-5">
            <div>
              <AboutCarouselTop view={4.3}/>
            </div>
            <div >
              <AboutCarouselBottom view={3.9}/>
            </div>
          </div>


          <div className="flex items-end justify-between max-w-6xl py-32 mx-auto">
            <div className="p-5 ">
              <h4 className="font-black uppercase text-md font-poppins text-brand-green">Tentang Kami</h4>
              <h2 className="mt-5 text-2xl font-light font-poppins text-brand-green">
                Produk jejamuan herbal yang dibuat dari bahan alam pilihan tanpa bahan kimia berkhasiat membantu menyehatkan tubuh tanpa efek samping. Di formulasikan dengan 9 bahan alami dari alam, warisan leluhur, contoh contohg contoh contoh contoh contoh, nanti diganti ya.
              </h2>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
