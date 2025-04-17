import '../styles/globals.css'
import Header from '../components/Header'

import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-50 dark:bg-gray-900">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
