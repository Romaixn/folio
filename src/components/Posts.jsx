import Container from '@/components/Container'
import Link from 'next/link'
import Date from '@/components/Date'

export default function Posts({articles}) {
    return (
        <div className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
            <Container className="relative divide-y-2 divide-gray-200">
                <div>
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Mes derniers
                        articles</h2>
                    <p className="mt-3 sm:mt-4 text-xl text-gray-500">Découvrez de nombreux articles parlant
                        d'expériences, de découvertes et de tutoriels.</p>
                </div>
                <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {articles.map((article) => (
                        <div key={article.slug}>
                            <p className="text-sm text-gray-500">
                                <Date dateString={article.date}/>
                            </p>
                            <Link href={`/blog/${article.slug}`} className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                                <div className="mt-3 text-base text-gray-500">{article.description}</div>
                            </Link>
                            <div className="mt-3">
                                <Link href={`/blog/${article.slug}`}
                                      className="text-base font-semibold text-red-600 hover:text-red-500">
                                    Lire l'article
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
