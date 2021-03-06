import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Banner: FC = () => (
  <div className='h-[100vh] relative flex items-center justify-center  '>
    <div className='absolute  z-20 flex flex-col h-full  items-center justify-evenly'>
      <img src='/logo.svg' alt='' className=' h-48 max-w-[80%]' />
      <div className='flex flex-col items-center gap-6'>
        <p className='text-[#EB1B28] text-center text-7xl sm:text-8xl angel nosferatu active'>
          Eles estão vindo!
        </p>
        <Link href='#products'>
          <a>
            <button className='py-4 avenirBold nosferatu px-10 rounded-full font-bold text-white bg-[#EB1B28] hover:bg-transparent hover:text-[#EB1B28] border-2 border-[#EB1B28] animation'>
              GARANTA JA SUA OBRA
            </button>
          </a>
        </Link>
      </div>
    </div>
    <div className='absolute w-full min-h-screen bg-gradient-to-t via-[#000000B2] from-black z-10' />

    <Image
      src='/bg.png'
      alt='background'
      layout='fill'
      className='sm:bg-scroll  bg-right md:bg-center h-full w-full object-right sm:object-center object-cover transition-all duration-200 '
    />

    <div className='animation-wrapper z-[11]'>
      <div className='particle particle-1 '></div>
      <div className='particle particle-2 '></div>
      <div className='particle particle-3 '></div>
      <div className='particle particle-4 '></div>
    </div>
  </div>
)

export default Banner
