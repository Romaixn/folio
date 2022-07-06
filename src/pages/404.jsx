import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Background from '@/images/404.jpg'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page introuvable - Romain Herault</title>
      </Head>
      <main className="min-h-full">
        <div className="-z-10">
            <Image
                src={Background}
                layout="fill"
                objectFit='cover'
                objectPosition={'bottom'}
                placeholder='blur'
            />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 z-10 relative">
          <p className="text-sm font-semibold uppercase tracking-wide text-black text-opacity-60">
            Erreur 404
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hey ! Je pense que vous êtes perdu.
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-60">
            Il semble que la page que vous recherchez n'existe pas.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className='inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50'>Retourner sur la page d'accueil</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
