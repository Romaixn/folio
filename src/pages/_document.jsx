import Banner from '@/components/Banner'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full" lang="fr">
      <Head />
      <body className="h-full">
        <Banner />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
