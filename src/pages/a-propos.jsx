import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Container from '@/components/Container'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>À propos - Romain Herault</title>
        <meta
          name="description"
          content="Romain HERAULT, Développeur web Full Stack spécialisé Symfony et WordPress."
        />
      </Head>
      <div className="py-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50"
        ></div>
        <Container className="overflow-hidden bg-white">
          <div className="mx-auto max-w-max lg:max-w-7xl">
            <div className="relative z-10 mb-8 md:mb-2">
              <div className="max-w-prose text-base lg:max-w-none">
                <h2 className="font-semibold uppercase leading-6 tracking-wide text-red-600">
                    À propos
                </h2>
                <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Qui suis-je ?
                </p>
              </div>
            </div>
            <div className="relative">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
                />
              </svg>
              <svg
                className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
                />
              </svg>
              <div className="relative md:bg-white md:py-6">
                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                  <div className="prose prose-lg prose-red text-gray-500 lg:max-w-none">
                    <p>
                      Ultrices ultricies a in odio consequat egestas rutrum. Ut
                      vitae aliquam in ipsum. Duis nullam placerat cursus risus
                      ultrices nisi, vitae tellus in. Qui non fugiat aut minus
                      aut rerum. Perspiciatis iusto mollitia iste minima soluta
                      id.
                    </p>
                    <p>
                      Erat pellentesque dictumst ligula porttitor risus eget et
                      eget. Ultricies tellus felis id dignissim eget. Est augue{' '}
                      <a href="#">maecenas</a> risus nulla ultrices congue nunc
                      tortor. Eu leo risus porta integer suspendisse sed sit
                      ligula elit.
                    </p>
                    <ol role="list">
                      <li>
                        Integer varius imperdiet sed interdum felis cras in nec
                        nunc.
                      </li>
                      <li>
                        Quam malesuada odio ut sit egestas. Elementum at porta
                        vitae.
                      </li>
                    </ol>
                    <p>
                      Amet, eu nulla id molestie quis tortor. Auctor erat justo,
                      sed pellentesque scelerisque interdum blandit lectus. Nec
                      viverra amet ac facilisis vestibulum. Vestibulum purus
                      nibh ac ultricies congue.
                    </p>
                  </div>
                  <div className="prose prose-lg prose-red mt-6 text-gray-500 lg:mt-0">
                    <p>
                      Erat pellentesque dictumst ligula porttitor risus eget et
                      eget. Ultricies tellus felis id dignissim eget. Est augue
                      maecenas risus nulla ultrices congue nunc tortor.
                    </p>
                    <p>
                      Eu leo risus porta integer suspendisse sed sit ligula
                      elit. Elit egestas lacinia sagittis pellentesque neque
                      dignissim vulputate sodales. Diam sed mauris felis risus,
                      ultricies mauris netus tincidunt. Mauris sit eu ac tellus
                      nibh non eget sed accumsan. Viverra ac sed venenatis
                      pulvinar elit. Cras diam quis tincidunt lectus. Non mi
                      vitae, scelerisque felis nisi, netus amet nisl.
                    </p>
                    <p>
                      Eu eu mauris bibendum scelerisque adipiscing et. Justo,
                      elementum consectetur morbi eros, posuere ipsum tortor.
                      Eget cursus massa sed velit feugiat sed ut. Faucibus eros
                      mauris morbi aliquam nullam. Scelerisque elementum sit
                      magna ullamcorper dignissim pretium.
                    </p>
                  </div>
                </div>
                <div className="mt-8 inline-flex rounded-md shadow">
                  <Link href="/contact">
                      <a
                        className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
                      >
                        Contactez-moi
                      </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
