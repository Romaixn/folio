import { useState } from 'react'
import Container from '@/components/Container'

export default function Newsletter() {
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  return (
    <div className="relative bg-white">
      <Container className="py-12 lg:py-16">
        <div className="rounded-3xl bg-red-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Tu veux restez à jour en tant que développeur ?
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-red-100">
              Inscris-toi pour recevoir ma veille technologique, toutes les
              semaines.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex" action="https://www.getrevue.co/profile/rherault/add_subscriber" method="post" name="revue-form" target="_blank">
              <label htmlFor="member_email" className="sr-only">
                Adresse email
              </label>
              <input
                id="member_email"
                name="member[email]"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700"
                placeholder="Entrez votre adresse mail"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 disabled:opacity-80"
                {...(sending ? { disabled: true } : {})}
              >
                S'inscrire
              </button>
            </form>
            <p className="mt-3 text-sm text-red-100">
              Aucune donnée ne sera partagée.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
