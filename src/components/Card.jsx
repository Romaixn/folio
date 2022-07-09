import Link from 'next/link'
import Image from 'next/image'

export default function Card({ project }) {
  return (
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
              <p className="mt-3 text-base text-gray-500">{project.excerpt}</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
