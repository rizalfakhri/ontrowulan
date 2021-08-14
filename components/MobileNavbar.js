import { Menu } from '../icons'

function MobileNavbar() {
  return (
    <div className="flex justify-between w-full max-w-6xl px-5 bg-white h-14 py-auto lg:hidden lg:px-5 justify-items-center bg-brand-green">
      <img src="/logo.png" className="my-auto w-9 h-9" alt="" />
      <Menu className="my-auto w-9 h-9 text-brand-gold-darker" />
    </div>
  )
}

export default MobileNavbar
