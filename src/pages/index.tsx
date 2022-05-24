import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Banner />
      <Products />
      <Footer />
    </>
  )
}
