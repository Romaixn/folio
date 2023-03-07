import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full" lang="fr">
      <Head />
      <body className="h-full">
        <Main />
        <script src="https://onestla.tech/widget-engreve/widget.js" async></script>
        <NextScript />
      </body>
    </Html>
  )
}
