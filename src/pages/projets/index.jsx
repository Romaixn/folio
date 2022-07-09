import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { getAllProjects } from '@/lib/rherault/api'

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Mes projets - Romain Herault</title>
        <meta
          name="description"
          content="Développeur Symfony, Wordpress, Django. Découvrez la liste de mes projets Symfony et WordPress."
        />
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
                <div
                  key={project.slug}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      src={`https://api.rherault.fr/uploads/images/${project.photoFilename}`}
                      alt={`Photo de ${project.title}`}
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="space-x-2 text-sm font-medium text-red-600">
                        {project.categories.length > 0 ? (
                          project.categories.map((category, index) => (
                            <span key={index}>{category.name}</span>
                          ))
                        ) : (
                          <span>{project.categories.name}</span>
                        )}
                      </p>
                      <Link href={`/projets/${project.slug}`}>
                        <a className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {project.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {project.excerpt}
                          </p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
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
