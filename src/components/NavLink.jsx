import Link from 'next/link'

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900'>{children}</a>
    </Link>
  )
}
