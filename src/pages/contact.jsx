import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Notification from '@/components/Notification'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [notificationMail, setNotificationMail] = useState(null)
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const submitContact = async (event) => {
    setSending(true)
    event.preventDefault()
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    const subject = event.target.subject.value
    const message = event.target.message.value

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    setStatus(res.status)
    let response = await res.json()
    setNotificationMail(response)
    event.target.reset()
    setSending(false)
  }

  return (
    <Layout>
      <Head>
        <title>Contactez-moi - Romain Herault</title>
        <meta
          name="description"
          content="Romain HERAULT, Développeur web Full Stack spécialisé Symfony et WordPress. N'hésitez pas à me contacter."
        />
        <meta name="og:title" content="Contactez-moi - Romain Herault" />
        <meta name="og:type" content="page" />
        <meta name="og:site_name" content="rherault" />
        <meta name="og:description" content="Romain HERAULT, Développeur web Full Stack spécialisé Symfony et WordPress. N'hésitez pas à me contacter." />
      </Head>

      {notificationMail && (
        <Notification title={status === 201 ? "Le message a bien été envoyé !": "Oups, une erreur s'est produite !"} status={status} message={notificationMail} />
      )}
      <div className="bg-white">
        <main className="overflow-hidden">
          <div className="bg-gray-50">
            <div className="py-8 sm:py-16">
              <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Contactez-moi
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-gray-500">
                  N'hésitez pas à me contacter pour toute demande, suggestion ou
                  autre.
                </p>
              </div>
            </div>
          </div>
          {/* Contact section */}
          <section
            className="relative bg-white pb-24 sm:pb-32"
            aria-labelledby="contact-heading"
          >
            <div
              className="absolute h-1/2 w-full bg-gray-50"
              aria-hidden="true"
            />
            {/* Decorative dot pattern */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <svg
                className="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative bg-white shadow-xl">
                <h2 id="contact-heading" className="sr-only">
                  Contactez-moi
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Contact information */}
                  <div className="relative overflow-hidden bg-gradient-to-b from-red-500 to-red-600 py-10 px-6 sm:px-10 xl:p-12">
                    {/* Decorative angle backgrounds */}
                    <div
                      className="pointer-events-none absolute inset-0 sm:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full"
                        width={343}
                        height={388}
                        viewBox="0 0 343 388"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                          fill="url(#linear1)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear1"
                            x1="254.553"
                            y1="107.554"
                            x2="961.66"
                            y2="814.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full"
                        width={359}
                        height={339}
                        viewBox="0 0 359 339"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                          fill="url(#linear2)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear2"
                            x1="192.553"
                            y1="28.553"
                            x2="899.66"
                            y2="735.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full"
                        width={160}
                        height={678}
                        viewBox="0 0 160 678"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                          fill="url(#linear3)"
                          fillOpacity=".1"
                        />
                        <defs>
                          <linearGradient
                            id="linear3"
                            x1="192.553"
                            y1="325.553"
                            x2="899.66"
                            y2="1032.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Informations de contact
                    </h3>
                    <p className="mt-6 max-w-3xl text-base text-red-50">
                      Envoyez moi un mail <span className="line-through">en passant par ce formulaire</span> (Formulaire temporairement indisponible) ou
                      directement via mon adresse mail ci-dessous.
                    </p>
                    <dl className="mt-8 space-y-6">
                      <dt>
                        <span className="sr-only">Email</span>
                      </dt>
                      <dd className="flex text-base text-red-50">
                        <EnvelopeIcon
                          className="h-6 w-6 flex-shrink-0 text-red-200"
                          aria-hidden="true"
                        />
                        <span className="ml-3">romain@rherault.dev</span>
                      </dd>
                    </dl>
                    <ul role="list" className="mt-8 flex space-x-12">
                      <li>
                        <a
                          className="text-red-200 hover:text-red-100"
                          href="https://github.com/Romaixn"
                        >
                          <span className="sr-only">GitHub</span>
                          <svg
                            className="h-7 w-7"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-red-200 hover:text-red-100"
                          href="https://www.linkedin.com/in/romain-herault/"
                        >
                          <span className="sr-only">Linkedin</span>
                          <svg className="h-7 w-7" aria-hidden="true"fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-red-200 hover:text-red-100"
                          href="https://twitter.com/Romaixn"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-7 w-7"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Contact form */}
                  <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 blur pointer-events-none">
                    <h3 className="text-lg font-medium text-gray-900">
                      Envoyez moi un message
                    </h3>
                    <form
                      onSubmit={submitContact}
                      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Prénom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Nom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900"
                        >
                          E-mail
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Téléphone
                          </label>
                          <span
                            id="phone-optional"
                            className="text-sm text-gray-500"
                          >
                            Optionnel
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
                            aria-describedby="phone-optional"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Sujet
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Message
                          </label>
                          <span
                            id="message-max"
                            className="text-sm text-gray-500"
                          >
                            Max. 500 caractères
                          </span>
                        </div>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
                            aria-describedby="message-max"
                            defaultValue={''}
                            required
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto disabled:opacity-80"
                          {...(sending ? { disabled: true } : {})}
                        >
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}
