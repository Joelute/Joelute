import '../styles/globals.css'
import { Nunito } from '@next/font/google'
import { ThemeContextProvider } from '../lib/ThemeContext'

const nunito = Nunito({
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>{`
      html {
        font-family: ${nunito.style.fontFamily};
      }
    `}</style>
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  </>
}
