import {useState} from 'react';
import Link from 'next/link';

function Navbar({ type }) {


  const [ fixedNavbar, setFixedNavbar ] = useState(false)

  if( typeof document != 'undefined' ) {
    document.addEventListener('scroll', (e) => {

      if( window.scrollY >= 80 && ! fixedNavbar ) {
        setFixedNavbar(true)

      }


      if( window.scrollY <= 80 && fixedNavbar ) {
        setFixedNavbar(false)

      }

    })
  }

  return (
    <>
      { ( type != 'page' ) && <div className="absolute top-0 z-20 w-full h-10 bg-gradient-to-b from-[#101010] to-transparent lg:h-40 hidden lg:block" /> }
      <div className={`
            ${fixedNavbar ? 'fixed bg-brand-green lg:h-16 transition  duration-350 shadow-around' : 'absolute'}  inset-0 z-50 h-20 w-full flex items-center justify-center invisible lg:visible
            ${(type == 'page') ? 'bg-brand-green shadow-around' : ''}
        `}>
        <div className={`${fixedNavbar ? 'fixed' : 'absolute lg:h-20'} top-0 z-30 items-center hidden w-full h-16 max-w-6xl lg:flex lg:px-5 space-x-16`}>
          <img src="/logo.png" className="w-12 h-12 my-auto lg:w-12 lg:h-12" alt="" />
          <Link href="/">
            <h5 className="text-white text-md hover:text-brand-gold transition duration-150 hover:cursor-pointer">Home</h5>
          </Link>
          <Link href="/about">
            <h5 className="text-white text-md hover:text-brand-gold transition duration-150 hover:cursor-pointer">Tentang Kami</h5>
          </Link>
          <Link href="/product">
            <h5 className="text-white text-md hover:text-brand-gold transition duration-150 hover:cursor-pointer">Produk</h5>
          </Link>
          <Link href="/contact-us">
            <h5 className="text-white text-md hover:text-brand-gold transition duration-150 hover:cursor-pointer">Hubungi Kami</h5>
          </Link>
        </div>
      </div>
    </>
  )

}

export default Navbar;
