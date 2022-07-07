import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Développeur web Symfony - Romain Herault</title>
        <meta
          name="description"
          content="Romain Herault développeur web Full Stack spécialisé Symfony, Wordpress basé à Amiens."
        />
      </Head>
      <div className="relative overflow-hidden bg-gray-50">
        <Header />
        <main className="relative">
            {children}
        </main>
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}
