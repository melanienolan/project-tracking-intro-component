import React from "react"
import { Link } from "gatsby"

const NormalNav = () => {
  return (
    <nav className="hidden sm:block font-condensed font-bold text-neutral-300 uppercase">
      <ul className="list-none sm:flex sm:justify-between sm:items-center">
        <li className="mr-5 hover:underline">
          <Link to="/product" activeClassName="underline">
            Product
          </Link>
        </li>
        <li className="mx-5 hover:underline">
          <Link to="/features" activeClassName="underline">
            Features
          </Link>
        </li>
        <li className="mx-5 hover:underline">
          <Link to="/pricing" activeClassName="underline">
            Pricing
          </Link>
        </li>
        <li className="mx-5 text-neutral-400">&bull;</li>
        <li className="ml-5 text-neutral-400 hover:underline">
          <Link to="/login" activeClassName="underline">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NormalNav
