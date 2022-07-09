import Link from 'next/link';
import Container from '@/components/Container'

export default function Hero() {
  return (
      <Container className="pb-16 sm:pb-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-red-600">
                Romain Herault
            </span>{' '}
            <span className="block">Développeur web full stack</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Bienvenue dans mon "chez moi" digital où je partage mes découvertes et mes expériences.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
              >
                En savoir plus
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/contact">
                  <a
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-red-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                  >
                    Me contacter
                  </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
  )
}
