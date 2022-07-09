import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import ErrorPage from 'next/error'
import Layout from '@/components/Layout'
import { getPlaiceholder } from "plaiceholder";
import { getAllProjects, getProject } from '@/lib/rherault/api'

export default function Project({ project, blurDataURL}) {
  const router = useRouter()

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>{`${project?.title} - Romain Herault`}</title>
        <meta name="description" content={project?.excerpt} />
      </Head>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="space-x-2 text-base font-semibold uppercase tracking-wide text-red-600">
                {project?.categories.length > 0 ? (
                  project?.categories.map((category, index) => (
                    <span key={index}>{category.name}</span>
                  ))
                ) : (
                  <span>{project?.categories.name}</span>
                )}
              </h2>
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {project?.title}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={`https://api.rherault.fr/uploads/images/${project?.photoFilename}`}
                      alt={`Photo de ${project?.title}`}
                      width={1184}
                      height={1376}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div
                className="prose prose-red mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none"
                dangerouslySetInnerHTML={{ __html: project?.description }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug)
  const { base64, img } = await getPlaiceholder(`https://api.rherault.fr/uploads/images/${project?.photoFilename}`);

  return {
    props: {
      project: project,
      blurDataURL: base64
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const allProjects = await getAllProjects()

  return {
    paths: allProjects.map(({ slug }) => `/projets/${slug}`) || [],
    fallback: true,
  }
}
