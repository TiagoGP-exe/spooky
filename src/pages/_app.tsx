import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import '../../styles/globals.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.svg' />
        <title>SPOOKY • Coleção</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
