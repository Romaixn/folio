import Container from '@/components/Container'

export default function Newsletter() {
    return (
      <div className="bg-white relative">
        <Container className="py-12 lg:py-16">
          <div className="py-10 px-6 bg-red-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Tu veux restez à jour en tant que développeur ?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-red-100">
                Inscris-toi pour recevoir ma veille technologique, toutes les semaines.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                    Adresse email
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white rounded-md"
                  placeholder="Entrez votre adresse mail"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
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
