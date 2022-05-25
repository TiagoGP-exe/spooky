import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import '../../styles/globals.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.svg' />
        <meta property='og:locale' content='pt_BR' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Coleção horror clássico Spooky!' />
        <meta
          property='og:description'
          content='Estamos trazendo de volta à vida personagens do horror clássico para
          colecionadores e apaixonados. A Coleção Spooky preza pelos detalhes
          da sua concepção à finalização. O colecionador terá em suas mãos uma
          obra exclusiva, limitada e realista. São personagens icônicos que
          marcaram época, cada um à sua maneira. Eles estão presentes no
          cinema, livros, séries e no imaginário mundial.'
        />
        <title>SPOOKY • Coleção</title>
      </Head>
      <meta
        property='og:image'
        itemProp='image'
        content='https://spooky-colecao.vercel.app/bg-og-image.png'
      />
      <meta
        property='og:image:alt'
        content='DOMPIXEL - GROWTH MARKETING'
      ></meta>
      <Component {...pageProps} />
    </>
  )
}

export default App
