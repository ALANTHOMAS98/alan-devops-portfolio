// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'   // <-- Add this line

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />  {/* Show navbar on every page */}
      <Component {...pageProps} />
    </>
  )
}

