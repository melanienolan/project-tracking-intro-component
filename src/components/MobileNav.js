import React from "react"
import { Link } from "gatsby"

const MobileNav = () => {
  return (
    <nav className="p-4 absolute inset-x-2 font-condensed font-bold text-neutral-300 bg-white shadow-xl rounded uppercase sm:hidden">
      <ul className="flex flex-col list-none text-center">
        <li className="mt-5 hover:underline">
          <Link to="/product" activeClassName="underline">
            Product
          </Link>
        </li>
        <li className="mt-5 hover:underline">
          <Link to="/features" activeClassName="underline">
            Features
          </Link>
        </li>
        <li className="mt-5 hover:underline">
          <Link to="/pricing" activeClassName="underline">
            Pricing
          </Link>
        </li>
        <li className="mt-3 pt-2 text-neutral-400 border-t hover:underline">
          <Link to="/login" activeClassName="underline">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav
