import { GlobalContext, GlobalStorage } from '../public/GlobalContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStorage>
      <Component {...pageProps}/>
    </GlobalStorage>
  )
}
