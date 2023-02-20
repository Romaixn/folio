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
        <meta name="og:title" content="Blog - Romain Herault" />
        <meta name="og:type" content="blog" />
        <meta name="og:site_name" content="rherault" />
        <meta name="og:description" content="Découvrez de nombreux articles parlant d'expériences, de découvertes et de tutoriels dans l'ensemble de ces domaines : PHP, WordPress, Symfony, CI/CD, développement web." />
      </Head>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50"
      ></div>
      <Container className="bg-white pt-8 pb-20 sm:pt-16 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Blog
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <p className="text-xl text-gray-500">
                Inscris-toi pour recevoir ma <a className="text-red-600" href="https://rherault.substack.com" target="_blank" rel="noopener noreferrer">veille technologique</a>, toutes les
                semaines et t'améliorer en tant que développeur.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {edges.map(({ node }) => (
              <div key={node.slug}>
                <p className="text-sm text-gray-500">
                  <Date dateString={node.date} />
                </p>
                <Link href={`/blog/${node.slug}`} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {node.title}
                  </p>
                  <div
                    className="mt-3 text-base text-gray-500"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  ></div>
                </Link>
                <div className="mt-3">
                  <Link href={`/blog/${node.slug}`} className="text-base font-semibold text-red-600 hover:text-red-500">
                    Lire l'article
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
