import Head from 'next/head'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Inscription à la newsletter - Romain Herault</title>
      </Head>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link href="/">
              <a className="inline-flex">
                <span className="sr-only">rherault</span>
                <Logo class="h-12 w-auto" />
              </a>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Confirmation
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Inscription confirmée !
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Merci pour votre inscription, vous pouvez à tout moment vous
                désinscrire à la fin des mails.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-red-600 hover:text-red-500">
                    Retourner sur la page d'accueil
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
