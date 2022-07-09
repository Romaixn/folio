import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Layout from '@/components/Layout'
import Newsletter from '@/components/Newsletter'
import Categories from '@/components/Categories'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/wordpress/api'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const cleanExcerpt =
    post?.excerpt.replace(
      /<\/?([a-zA-Z]\s?)*?([a-zA-Z]+?=\s?".*")*?([\s/]*?)>/gi,
      ''
    ) ??
    'Romain Herault développeur web Full Stack spécialisé Symfony, Wordpress basé à Amiens.'

  return (
    <Layout>
      <Head>
        <title>{`${post?.title} - Romain Herault`}</title>
        <meta name="description" content={cleanExcerpt} />
      </Head>
      <div className="relative overflow-hidden bg-white py-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50"
        ></div>
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div
            className="relative mx-auto h-full max-w-prose text-lg"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <article className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <Categories categories={post?.categories} />
              <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {post?.title}
              </span>
            </h1>
            <div
              className="mt-8 text-xl leading-8 text-gray-500"
              dangerouslySetInnerHTML={{ __html: post?.excerpt }}
            ></div>
          </div>
          <div
            className="prose prose-lg prose-red mx-auto mt-6 text-gray-500"
            dangerouslySetInnerHTML={{ __html: post?.content }}
          ></div>
        </article>
      </div>
      <Newsletter />
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  }
}
