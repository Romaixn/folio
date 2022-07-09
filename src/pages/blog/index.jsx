import Head from 'next/head'
import Link from 'next/link'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { getAllPosts } from '@/lib/wordpress/api'

export default function Blog({ posts: { edges } }) {
  return (
    <Layout>
      <Head>
        <title>Blog - Romain Herault</title>
        <meta
          name="description"
          content="Découvrez de nombreux articles parlant d'expériences, de découvertes et de tutoriels dans l'ensemble de ces domaines : PHP, WordPress, Symfony, CI/CD, développement web."
        />
      </Head>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50"
      ></div>
      <Container className="bg-white pt-16 pb-20 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Blog
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <p className="text-xl text-gray-500">
                Inscris-toi pour recevoir ma veille technologique, toutes les
                semaines et t'améliorer en tant que développeur.
              </p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Adresse email
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-red-500 lg:max-w-xs"
                    placeholder="Adresse email"
                  />
                </div>
                <div className="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:inline-flex sm:w-auto"
                  >
                    S'inscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {edges.map(({ node }) => (
              <div key={node.slug}>
                <p className="text-sm text-gray-500">
                  <Date dateString={node.date} />
                </p>
                <Link href={`/blog/${node.slug}`}>
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {node.title}
                    </p>
                    <div
                      className="mt-3 text-base text-gray-500"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    ></div>
                  </a>
                </Link>
                <div className="mt-3">
                  <Link href={`/blog/${node.slug}`}>
                    <a className="text-base font-semibold text-red-600 hover:text-red-500">
                        Lire l'article
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: { posts },
    revalidate: 60,
  }
}
