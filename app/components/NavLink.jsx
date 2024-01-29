import Link from "next/link";

function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-3 pl-3 pr-4 sm:text-xl md:p-0 text-white hover:text-green-400"
    >
      {title}
    </Link>
  );
}

export default NavLink;
