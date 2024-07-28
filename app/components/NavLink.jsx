import Link from "next/link"
import LinkWithoutId from "./LinkWithoutId"

function NavLink({ href, title }) {
  return (
    <LinkWithoutId
      href={href}
      className="block z-10 py-3 pl-3 pr-4 sm:text-xl md:p-0 text-white hover:text-green-400"
    >
      {title}
    </LinkWithoutId>
  )
}

export default NavLink
