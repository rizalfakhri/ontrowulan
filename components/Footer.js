import {
  Instagram,
  Facebook,
  Youtube
} from '../icons'
import Link from 'next/link'

function Footer() {

  return (
    <>
      <footer >
        <div className="w-full h-3 bg-brand-gold-darker" />
        <div className="w-full h-auto bg-gradient-to-br from-[#246051] to-brand-green relative">

          <div className="flex flex-col items-center justify-center invisible h-0 py-8 lg:h-auto lg:py-14 lg:visible">
            <div className="flex items-center justify-between w-full h-auto max-w-6xl py-2 mt-5 border-b border-brand-gold-darker/90">
              <img src="/logo-text.png" className="w-auto h-10" />
              <p className="font-medium text-brand-gold">Copyright &copy; 2021 Ontrowulan  - All rights reserved.</p>
            </div>
            <div className="flex items-center justify-between w-full h-auto max-w-6xl mt-1">
              <p className="font-serif text-lg italic font-thin text-brand-gold-darker">Ramuan Alam Warisan Leluhur</p>
              <div className="flex items-center mt-1 space-x-3">
                <Link href="https://www.instagram.com/ontrowulan/">
                  <Instagram className="w-6 h-6 cursor-pointer text-brand-gold-darker"/>
                </Link>
                <Link href="https://web.facebook.com/ontrowulanofficials">
                  <Facebook className="w-6 h-6 cursor-pointer text-brand-gold-darker"/>
                </Link>
                <Link href="https://www.youtube.com/channel/UC_5UYduo8shv_Jh00Ql7R1A">
                  <Youtube className="w-6 h-6 cursor-pointer text-brand-gold-darker"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center pb-14 lg:hidden">
            <div className="flex flex-col items-center justify-between w-full h-auto px-2 py-2 mx-2 border-b border-brand-gold-darker/90">
              <img src="/logo-text.png" className="w-auto h-7" />
            </div>
            <div className="flex flex-col items-center justify-between w-full h-auto max-w-6xl mt-1">
              <p className="font-serif text-sm italic font-thin text-brand-gold-darker">Ramuan Alam Warisan Leluhur</p>
              <div className="flex items-center mt-1 space-x-3">
                <Link href="https://www.instagram.com/ontrowulan/">
                  <Instagram className="w-6 h-6 cursor-pointer text-brand-gold-darker"/>
                </Link>
                <Link href="https://web.facebook.com/ontrowulanofficials">
                  <Facebook className="w-6 h-6 cursor-pointer text-brand-gold-darker"/>
                </Link>
                <Link href="https://www.youtube.com/channel/UC_5UYduo8shv_Jh00Ql7R1A">
                  <Youtube className="w-6 h-6 cursor-pointer text-brand-gold-darker"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 block w-full mb-5 lg:hidden ">
            <p className="text-xs text-center text-brand-gold">Copyright &copy; 2021 Ontrowulan  - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )

}

export default Footer;
