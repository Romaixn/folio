import Head from 'next/head'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import Posts from '@/components/Posts'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Développeur web Symfony - Romain Herault</title>
        <meta name="description" content="Romain Herault développeur web Full Stack spécialisé Symfony, Wordpress basé à Amiens." />
      </Head>
      <div className="relative overflow-hidden bg-gray-50">
        <Header />
        <main className="relative">
          <Hero />
          <Skills />
          <Posts />
        </main>
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}
