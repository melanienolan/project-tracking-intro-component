import React, { useState } from "react"
import Layout from "../components/Layout.js"
import logo from "../images/logo.svg"
import devicesImage from "../images/devices-image.svg"

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      <div
        className="absolute top-0 right-0 w-1/2 bg-neutral-100"
        style={{
          height: "45vh",
          borderBottomLeftRadius: "6rem",
          zIndex: "-1",
        }}
      ></div>
      <header className="sm:flex sm:justify-between">
        <div className="flex justify-between px-8 py-10 sm:block sm:py-16 sm:px-20">
          <div>
            <img className="h-6 sm:h-8" src={logo} alt="Logo" />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-300 sm:hidden"
            type="button"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
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
        <nav
          className={`${
            open ? "flex" : "hidden"
          } flex-col items-center p-4 absolute font-condensed font-bold text-neutral-300 bg-white shadow-xl rounded list-none uppercase sm:hidden`}
          style={{ left: "2rem", right: "2rem" }}
        >
          <ul>
            <li className="block w-full mt-5 text-center">
              <a href="#" className="">
                Product
              </a>
            </li>
            <li className="block w-full mt-5 text-center">
              <a href="#" className="">
                Features
              </a>
            </li>
            <li className="block w-full mt-5 text-center">
              <a href="#" className="">
                Pricing
              </a>
            </li>
            <li className="block w-full mt-3 pt-2 text-center text-neutral-400 border-t">
              <a href="#" className="">
                Login
              </a>
            </li>
          </ul>
        </nav>
        <nav className="hidden px-8 py-16 sm:block font-condensed font-bold text-neutral-300 list-none uppercase sm:pr-20">
          <ul className="sm:flex sm:justify-between">
            <li className="px-5">
              <a href="#" className="">
                Product
              </a>
            </li>
            <li className="px-5">
              <a href="#" className="">
                Features
              </a>
            </li>
            <li className="px-5">
              <a href="#" className="">
                Pricing
              </a>
            </li>
            <li className="px-5 text-neutral-400">&bull;</li>
            <li className="px-5 text-neutral-400">
              <a href="#" className="">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="sm:mt-16 sm:flex sm:flex-row-reverse">
        <div className="sm:w-1/2">
          <img
            className="ml-2 h-64 object-cover object-left sm:h-full"
            src={devicesImage}
            alt="mobile and desktop devices"
          />
        </div>
        <div className="mt-24 ml-8 sm:w-1/2 sm:pl-12 sm:mt-8">
          <p className="font-condensed tracking-widest text-neutral-400 uppercase">
            <span className="mr-2 px-3 py-1 bg-neutral-300 text-white rounded-full tracking-normal">
              NEW
            </span>{" "}
            Monograph Dashboard
          </p>
          <h1 className="mt-4 font-condensed font-bold text-neutral-300 text-h1 leading-none uppercase text-4xxl max-w-xs sm:max-w-none sm:text-6xl">
            Powerful Insights into your Team
          </h1>
          <p className="mt-3 font-barlow text-lg text-neutral-400 sm:mt-8">
            Project planning and time tracking <br />
            for agile teams
          </p>
          <div class="mt-6 sm:mt-16">
            <button
              type="button"
              className="px-6 py-2 border bg-primary text-white font-condensed text-base font-semibold rounded uppercase sm:px-10 sm:py-3"
            >
              Schedule a demo
            </button>
            <button
              type="button"
              className="ml-5 text-neutral-400 font-condensed uppercase text-sm tracking-wide sm:ml-8 sm:tracking-widest"
            >
              To see a preview
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
