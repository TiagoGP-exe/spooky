import Link from 'next/link'
import React from 'react'
import { RiInstagramFill } from 'react-icons/ri'

const atualDate = new Date()

const Footer = () => (
  <footer className='py-4 text-[#EB1B28]  justify-center flex flex-col items-center gap-1 avenir'>
    <Link href='https://www.instagram.com/heroartstudiobr/' passHref>
      <a target='_blank' rel='noreferrer'>
        <div className='flex items-center hover:scale-110 cursor-pointer text-xl animation'>
          <RiInstagramFill />
          <p className='avenirBold'>heroartstudiobr</p>
        </div>
      </a>
    </Link>
    <p className='  uppercase'>
      @ copyright Spooky • {atualDate.getFullYear()}
    </p>
  </footer>
)

export default Footer
