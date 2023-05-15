export default function Categories({ categories }) {
  return (
    <span className="block text-center text-base font-semibold uppercase tracking-wide text-red-600 divide-x">
      {categories?.length > 0 ? (
        categories?.map((category, index) => (
          <span key={index} className="px-2">
            {category}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories?.edges.node.name}</span>
      )}
    </span>
  )
}
