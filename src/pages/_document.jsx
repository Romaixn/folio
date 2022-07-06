import { Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full" lang="fr">
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
