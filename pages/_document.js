import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </Head>
      <body>
        <Script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}