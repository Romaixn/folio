import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Développeur web Symfony - Romain Herault</title>
      </Head>
      <div className="relative overflow-hidden bg-gray-50">
        <Header />
        <main className="relative">
          <Hero />
        </main>
      </div>
    </>
  )
}
