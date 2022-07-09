import Head from 'next/head'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { getAllProjects } from '@/lib/rherault/api'

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Mes projets - Romain Herault</title>
        <meta name="description" content="Développeur Symfony, Wordpress, Django. Découvrez la liste de mes projets Symfony et WordPress." />
      </Head>
      <div className="pt-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50"
        ></div>
        <Container className="relative pb-20">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Projets
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Découvrez mes projets, qu'ils soient réalisés dans un cadre
                professionnel ou personnel.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {projects.map((project) => (
                <Card project={project} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()

  return {
    props: { projects },
    revalidate: 60,
  }
}
