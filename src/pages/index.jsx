import Head from 'next/head'

import HeaderHome from '@/components/HeaderHome'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import Posts from '@/components/Posts'
import Newsletter from '@/components/Newsletter'
import {getAllArticles} from "@/lib/getAllArticles";

export default function Home({ articles }) {
    return (
        <>
            <Head>
                <title>Développeur web Symfony - Romain Herault</title>
                <meta
                    name="description"
                    content="Romain Herault développeur web Full Stack spécialisé Symfony, Wordpress basé à Amiens."
                />
                <meta name="og:title" content="Développeur web Symfony - Romain Herault"/>
                <meta name="og:type" content="page"/>
                <meta name="og:site_name" content="rherault"/>
                <meta name="og:description"
                      content="Romain Herault développeur web Full Stack spécialisé Symfony, Wordpress basé à Amiens."/>
            </Head>
            <div className="relative overflow-hidden bg-gray-50">
                <HeaderHome/>
                <main className="relative">
                    <Hero/>
                    <Skills/>
                    <Posts articles={articles}/>
                </main>
                <Newsletter/>
                <Footer/>
            </div>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({ component, ...meta }) => meta),
        }
    }
}
