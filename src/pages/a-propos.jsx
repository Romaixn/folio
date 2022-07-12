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
                        Hey 👋🏻 ! Moi c'est <strong>Romain</strong>, passionné par les nouvelles technologies et leurs facultés à améliorer nos vies.
                    </p>
                    <p>Je suis <strong>développeur web orienté backend</strong> mais "touche à tout" (d'où le <strong>fullstack</strong>) ! J'apprécie plus particulièrement <strong>Symfony</strong> et <strong>WordPress</strong> combiné avec <strong>Tailwind CSS</strong> (❤️) pour créer de magnifiques sites performants.</p>
                    <p>Être fier de mon code est une véritable philosophie de vie, j'en parle <Link href="/blog/devenir-meilleur-developpeur-clean-code">ici</Link>. C'est pour cela que je m'intéresse de plus en plus aux <strong>architectures de codes modernes</strong> et aux principes liés au "<strong>Clean Code</strong>" (SOLID, DDD, etc..)</p>
                    <p>Diplômé d'une Licence Professionnelle Web et Mobile à l'IUT d'Orléans à la suite d'un DUT Informatique, je n'ai cessé de me former davantage depuis.</p>
                  </div>
                  <div className="prose prose-lg prose-red mt-6 text-gray-500 lg:mt-0">
                    <p>Je peux vous aider à <strong>réaliser un projet</strong> dans toutes ses étapes de la conception :</p>
                    <ol role="list">
                      <li>Analyse du cahier des charges et choix des technologies</li>
                      <li>Développement</li>
                      <li>Mise en production</li>
                      <li>Formation</li>
                    </ol>
                    <p>Actuellement en poste de développeur web backend chez <a href="https://agence-ewill.com">Ewill</a>, agence web.</p>
                    <p>Ce portfolio retrace mes <strong>découvertes et expériences</strong>. J'apprécie faire de la <strong>veille technologique</strong> et la partager via mon blog ou ma newsletter.</p>
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
