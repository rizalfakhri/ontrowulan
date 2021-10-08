import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from '../components/Footer';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import productImage from '../public/assets/images/products/diet-capsule.png'
import PurchaseModal from '../components/PurchaseModal'
import { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ArrowRight } from '../icons'

import dynamic from 'next/dynamic'

const IngredientsCarousel = dynamic(() => import('../components/IngredientsCarousel'), {ssr: false})


import sereh from '../public/assets/images/ingredients/colored/sereh.png'
import asamJawa from '../public/assets/images/ingredients/colored/asam-jawa.png'
import bengkoang from '../public/assets/images/ingredients/colored/bengkoang.png'
import daunKelor from '../public/assets/images/ingredients/colored/daun-kelor.png'
import daunSalam from '../public/assets/images/ingredients/colored/daun-salam.png'
import jahe from '../public/assets/images/ingredients/colored/jahe.png'
import kunyit from '../public/assets/images/ingredients/colored/kunyit.png'
import lemon from '../public/assets/images/ingredients/colored/lemon.png'
import ketumbar from '../public/assets/images/ingredients/colored/ketumbar.png'

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
          <div className="relative flex flex-col items-center justify-between w-full h-auto mx-auto 2xl:max-w-7xl max-w-11/12 lg:h-screen lg:flex-row lg:space-x-24">
            <div className="hidden w-full px-7 lg:w-1/2 lg:block">
              <div className="relative flex items-center w-full lg:w-[30rem] h-[40rem] mx-auto">
                <div className="absolute w-full lg:w-[35rem] -ml-3 lg:-ml-5 -mb-5 lg:-mb-10 h-[25rem] lg:h-[40rem] bg-brand-green shadow-around"></div>
                <div className="absolute w-full lg:w-[35rem] h-[25rem] lg:h-[40rem] bg-brand-gold shadow-around"></div>
                <div className="absolute hidden w-24 h-24 bg-transparent border-t-2 border-r-2 border-brand-green/50 lg:-top-8 lg:-right-28 lg:block"></div>
                <Image src={productImage} className="absolute inset-0 w-full h-auto" placeholder="blur" />
              </div>
            </div>
            <div className="flex flex-col block w-full h-auto lg:hidden">
              <div className="relative shadow-xl bg-brand-gold">
                <Image src={productImage} className="absolute inset-0 w-full h-auto" placeholder="blur" />
                <div className="absolute bottom-0 flex w-full h-2">
                  <div className=" w-[80%] h-2 bg-brand-green"></div>
                  <div className="w-[20%] h-2 bg-brand-gold-darker"></div>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mt-5 lg:w-1/2">
              <h1 className="font-thin text-3xl lg:text-5xl text-[#185445] ">Kapsul Diet</h1>
              <h1 className="font-serif font-black text-5xl lg:text-7xl text-[#185445] ">Ontrowulan</h1>
              <h4 className="font-serif font-black text-md lg:text-xl text-[#185445] ">Ramuan alam warisan leluhur terbuat dari bahan alami</h4>
              <div className="h-1 w-14 bg-[#185445]"></div>
              <p className="font-serif text-sm lg:text-lg text-[#185445] mt-8">Merupakan ekstrak herbal alami yang diformulasikan dalam bentuk kapsul. dikonsumsi untuk membantu menurunkan berat badan dengan efektif, membantu mengurangi lemak tubuh dan memperbaiki metabolisme.</p>

              <div className="flex flex-col-reverse mt-10 lg:items-center lg:flex-row lg:space-x-10">
                <button className="px-3 py-2 mt-6 text-lg font-black uppercase rounded-lg lg:mt-0 h-14 lg:w-52 bg-brand-green text-brand-gold" onClick={() => setIsOpen(true)}>Beli Sekarang</button>
                <h4 className="text-3xl font-black  text-[#185445]">Rp 220.000<span className="text-xl font-thin text-black">/botol</span></h4>
              </div>

              <div className="flex flex-col my-10">
                <div className="w-full h-auto py-1 border-t border-brand-green/50">
                  <Disclosure>
                    {({ open }) => (
                      <>

                      <Disclosure.Button as="div" className="items-center cursor-pointer grid grid-cols-3">
                        <h1 className="font-black text-md text-[#185445] col-span-2">Bahan-Bahan</h1>
                        <div className="w-4 h-4 text-lg font-thin text-black justify-self-end text-[#185445]">
                          <ArrowRight className={`${open ? ' -rotate-90 ' : ' rotate-90'} transform transition duration-200`} />
                        </div>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel>
                          Mengandung 9 bahan herbal alami, seperti Lemon yang berkhasiat untuk Melancarkan Pencernaan, Meningkatkan Metabolisme Tubuh, & Detoksifikasi, Asam Jawa yang ber... <a href="#ingredients" className="text-[#185445] font-semibold">Selengkapnya</a>
                        </Disclosure.Panel>
                      </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="w-full h-auto py-1 border-t border-brand-green/50">
                  <Disclosure>
                    {({ open }) => (
                      <>

                      <Disclosure.Button as="div" className="items-center cursor-pointer grid grid-cols-3">
                        <h1 className="font-black text-md text-[#185445] col-span-2">Cara Penyimpanan</h1>
                        <div className="w-4 h-4 text-lg font-thin text-black justify-self-end text-[#185445]">
                          <ArrowRight className={`${open ? ' -rotate-90 ' : ' rotate-90'} transform transition duration-200`} />
                        </div>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel>
                          Simpan di ruangan yang tidak lembab dan bersuhu dibawah 30°
                        </Disclosure.Panel>
                      </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="w-full h-auto py-1 border-t border-b border-brand-green/50">
                  <Disclosure>
                    {({ open }) => (
                      <>

                      <Disclosure.Button as="div" className="items-center cursor-pointer grid grid-cols-3">
                        <h1 className="font-black text-md text-[#185445] col-span-2">Cara Pemakaian</h1>
                        <div className="w-4 h-4 text-lg font-thin text-black justify-self-end text-[#185445]">
                          <ArrowRight className={`${open ? ' -rotate-90 ' : ' rotate-90'} transform transition duration-200`} />
                        </div>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel>
                          <ul className="list-disc list-inside">
                            <li>PRIA: 2 Kali sehari @ 3 kapsul</li>
                            <li>WANITA: 2 Kali sehari @ 2 kapsul</li>
                          </ul>
                        </Disclosure.Panel>
                      </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>

            </div>
          </div>

          <div className="z-50 flex w-full h-2">
            <div className=" w-[80%] h-2 bg-brand-green"></div>
            <div className="w-[20%] h-2 bg-brand-gold-darker"></div>
          </div>
        </div>
        <div id="ingredients" className="w-full h-screen mt-2 bg-brand-gold/50">
          <div className="flex items-center justify-between w-full h-auto mx-auto 2xl:max-w-7xl max-w-11/12">
            <div className="w-[53%] h-screen flex  justify-center flex-col relative">
              <h1 className="font-black font-cormorant-infant text-brand-gold-darker text-8xl">Dengan 9 bahan herbal alami.</h1>
              <p className="text-sm font-light text-black font-poppins">Adipisicing reiciendis facilis at quisquam est Sapiente deleniti tempore aliquid animi debitis Similique fugit minima numquam perspiciatis maxime A id eveniet eos earum cum? Ipsam ab officia placeat eligendi molestiae. Text copywriting demo, nanti diganti ya.</p>
            </div>
            <div className="w-[45%] h-screen  flex justify-between">
              <div className="w-[48%]  h-screen">

                <IngredientsCarousel view={3.2} />

              </div>
              <div className="w-[48%]  h-screen">

                <IngredientsCarousel spaceBetween={30} view={2.5} reverse={true} delay={2000}/>

              </div>
            </div>

          </div>
        </div>
        <div id="ingredients-detailed" className="relative z-30 flex items-center justify-center w-full h-auto -mt-24 bg-brand-green transform-gpu -skew-y-3">
          <div className="w-full mx-auto py-28 2xl:max-w-7xl max-w-11/12 grid grid-cols-2 skew-y-3 gap-8">
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">01. Asam Jawa</h3>
                <p className="text-sm font-poppins">Khasiat asam jawa yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Menjaga kesehatan pencernaan.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Mengurangi kadar lemak dalam tubuh.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Kaya akan antioksidan.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Menurunkan kadar gula darah. </p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">4</p>
                  </div>
                  <p className="text-sm font-poppins">Mencegah penuaan (anti aging).</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={asamJawa} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">02. Sereh</h3>
                <p className="text-sm font-poppins">Khasiat sereh yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Menambah Stamina.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Anti Microba.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu Mengatasi Sembelit.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Memiliki zat anti-depressan.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={sereh} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">03. Bengkoang</h3>
                <p className="text-sm font-poppins">Khasiat bengkoang yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Kaya air & serat.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Baik untuk kesehatan kulit.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Mencegah dehidrasi.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={bengkoang} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">04. Daun Kelor</h3>
                <p className="text-sm font-poppins">Khasiat daun kelor yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Anti peradangan.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu meremajakan kulit.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu menurunkan kolesterol.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">4</p>
                  </div>
                  <p className="text-sm font-poppins">Memelihara imun tubuh.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={daunKelor} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">05. Daun Salam</h3>
                <p className="text-sm font-poppins">Khasiat daun salam yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Menurunkan kadar Asam Urat.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Mencegah peradangan lambung.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Melembabkan kulit.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">4</p>
                  </div>
                  <p className="text-sm font-poppins">Mencegah diare.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={daunSalam} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">06. Jahe</h3>
                <p className="text-sm font-poppins">Khasiat jahe yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Mengencangkan otot.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Mencegah kanker.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Mengurangi nyeri saat menstruasi.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={jahe} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">07. Kunyit</h3>
                <p className="text-sm font-poppins">Khasiat kunyit yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu mengatasi bau tubuh.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Merapatkan organ intim.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu menormalkan siklus menstruasi.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={kunyit} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">08. Lemon</h3>
                <p className="text-sm font-poppins">Khasiat lemon yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-end mt-3 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Melancarkan pencernaan.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Meningkatkan metabolisme tubuh.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Detoksifikasi tubuh.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={lemon} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
            <div className="flex items-center justify-between h-auto bg-white rounded-lg ">
              <div className="w-[60%] h-full bg-gray-100 rounded-l-lg p-4 shadow-xl">
                <h3 className="font-sans text-4xl font-black text-brand-green">09. Ketumbar</h3>
                <p className="text-sm font-poppins">Khasiat Ketumbar yang blablablablablablabla dan dengan blablablabl, diantaranya</p>
                <div className="flex items-center mt-3 space-x-2">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto font-bold text-white font-poppins">1</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu mengatasi gangguan sistem pernafasan.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">2</p>
                  </div>
                  <p className="text-sm font-poppins">Memperkuat imunitas tubuh.</p>
                </div>
                <div className="flex items-end mt-1 space-x-1">
                  <div className="flex w-6 h-6 rounded-full bg-brand-gold ">
                    <p className="m-auto text-sm font-bold text-white font-poppins">3</p>
                  </div>
                  <p className="text-sm font-poppins">Membantu melancarkan peredaran darah.</p>
                </div>
              </div>
              <div className="w-[40%] h-full bg-brand-gold rounded-r-lg relative">
                <Image src={ketumbar} layout="fill" objectFit="cover" placeholder="blur"  className="rounded-r-lg "/>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-40 h-32 -mt-20 w-fuill bg-brand-green xl:h-40"></div>



        <PurchaseModal open={isOpen} opener={setIsOpen}/>
      </main>

      <Footer />
    </>

  )

}

export default Product;
