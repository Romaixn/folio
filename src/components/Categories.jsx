export default function Categories({ categories }) {
  return (
    <span className="block text-center text-base font-semibold uppercase tracking-wide text-red-600 divide-x">
      {categories?.edges.length > 0 ? (
        categories?.edges.map((category, index) => (
          <span key={index} className="px-2">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories?.edges.node.name}</span>
      )}
    </span>
  )
}
