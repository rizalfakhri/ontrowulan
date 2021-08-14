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
import Link from 'next/link'

function TopNavbar() {

  return (
    <div className="justify-between hidden w-full max-w-6xl mx-auto bg-white lg:flex lg:px-5 h-14 justify-items-center">
      <h1 className="text-xl font-black tracking-[.8rem] text-bold uppercase my-auto">Ontrowulan</h1>
      <div className="flex items-center space-x-3">
        <Link href="https://www.instagram.com/ontrowulan/">
          <Instagram className="text-black opacity-50 w-7 h-7 cursor-pointer"/>
        </Link>
        <Link href="https://web.facebook.com/ontrowulanofficials">
          <Facebook className="text-black opacity-50 w-7 h-7 cursor-pointer"/>
        </Link>
        <Link href="https://www.youtube.com/channel/UC_5UYduo8shv_Jh00Ql7R1A">
          <Youtube className="text-black opacity-50 w-7 h-7 cursor-pointer"/>
        </Link>
      </div>
    </div>
  )
}

export default TopNavbar;
