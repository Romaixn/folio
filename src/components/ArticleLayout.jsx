import Head from 'next/head'
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Layout from "@/components/Layout";

function ArrowLeftIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function ArticleLayout({
                                  children,
                                  meta,
                                  isRssFeed = false,
                                  previousPathname,
                              }) {
    // const router = useRouter()

    if (isRssFeed) {
        return children
    }

    const siteUrl = process.env.SITE_URL || 'https://rherault.fr'

    return (
        <Layout>
            <Head>
                <title>{`${meta.title} - Romain Herault`}</title>
                <meta name="description" content={meta.description}/>
                <meta name="og:title" content={`${meta.title} - Romain Herault`} />
                <meta name="og:type" content="article" />
                <meta name="og:site_name" content="rherault" />
                <meta name="og:description" content={meta.description} />
                <meta property="og:locale" content="fr-FR" />
                <meta property="article:published_time" content={meta.date} />
                {meta.image && (
                    <>
                    <meta property="og:image" content={`${siteUrl}${meta.image.src}`} />
                    <meta property="og:image:width" content={meta.image.width} />
                    <meta property="og:image:height" content={meta.image.height} />
                    <meta name="twitter:image" content={`${siteUrl}${meta.image.src}`} />
                    </>
                )}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Romaixn" />
                <meta name="twitter:site" content="@Romaixn" />
                <meta name="twitter:title" content={`${meta.title} - Romain Herault`} />
                <meta name="twitter:description" content={meta.description} />
            </Head>
            <div className="relative overflow-hidden bg-white py-8 sm:py-16">
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
                            <Categories categories={meta.categories}/>
                            <span
                                className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {meta.title}
              </span>
                        </h1>
                        <div className="mt-8 text-xl leading-8 text-gray-500">
                            {meta.description}
                        </div>
                    </div>
                    <div className="prose prose-lg prose-red mx-auto mt-6 text-gray-500"
                    >
                        {children}
                    </div>
                </article>
            </div>
            <Newsletter/>
        </Layout>
    )
}
