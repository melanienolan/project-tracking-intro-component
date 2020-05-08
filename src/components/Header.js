import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="px-8 py-10 sm:flex sm:justify-between">
      <div className="flex justify-between">
        <div>
          <img className="h-6 sm:h-8" src={logo} alt="Logo" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-neutral-300 sm:hidden"
          type="button"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.334.97l1.696 1.696L13.697 12l9.333 9.334-1.696 1.696L12 13.697 2.666 23.03.97 21.334 10.303 12 .97 2.666 2.666.97 12 10.303 21.334.97z"
              />
            ) : (
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H24V2H0V0ZM0 7H24V9H0V7ZM0 14H24V16H0V14Z"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav
          className="p-4 absolute font-condensed font-bold text-neutral-300 bg-white shadow-xl rounded uppercase sm:hidden"
          style={{ left: "2rem", right: "2rem" }}
        >
          <ul className="flex flex-col list-none text-center">
            <li className="mt-5">
              <Link to="/product" className="">
                Product
              </Link>
            </li>
            <li className="mt-5">
              <Link to="/features" className="">
                Features
              </Link>
            </li>
            <li className="mt-5">
              <Link to="/pricing" className="">
                Pricing
              </Link>
            </li>
            <li className="mt-3 pt-2 text-neutral-400 border-t">
              <Link to="/login" className="">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden sm:block font-condensed font-bold text-neutral-300 uppercase">
        <ul className="list-none sm:flex sm:justify-between sm:items-center">
          <li className="mr-5">
            <Link to="/product" className="">
              Product
            </Link>
          </li>
          <li className="mx-5">
            <Link to="/features" className="">
              Features
            </Link>
          </li>
          <li className="mx-5">
            <Link to="/pricing" className="">
              Pricing
            </Link>
          </li>
          <li className="mx-5 text-neutral-400">&bull;</li>
          <li className="ml-5 text-neutral-400">
            <Link to="/login" className="">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
