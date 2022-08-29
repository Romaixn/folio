import Container from '@/components/Container'

import {
    CursorArrowRaysIcon,
    GlobeAltIcon,
    ServerStackIcon,
  } from '@heroicons/react/24/outline'

  const features = [
    {
      name: 'Backend',
      description: 'Plus de 5 ans d\'expérience dans la réalisation d\'applications PHP et je maîtrise le framework Symfony 6.',
      icon: ServerStackIcon,
    },
    {
      name: 'Frontend',
      description: 'Si vous souhaitez un site web réactif, je maîtrise aussi certains framework comme React et Vue.',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'WordPress',
      description: 'Vous souhaitez un site sur mesure clé en main développé sous WordPress ? Je peux vous aider.',
      icon: GlobeAltIcon,
    },
  ]

  export default function Skills() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-50"></div>
        <Container className="text-center relative">
          <h2 className="text-base font-semibold uppercase tracking-wider text-red-600">Compétences</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mes services
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">Je vous aide à réaliser vos projets, de la conception à la réalisation et jusqu'à la livraison.</p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    )
  }
