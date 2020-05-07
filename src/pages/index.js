import React from "react"
import Layout from "../components/Layout.js"
import logo from "../images/logo.svg"
import devicesImage from "../images/devices-image.svg"

export default () => {
  return (
    <Layout>
      <header className="flex justify-between px-8 py-10">
        <div>
          <img className="h-6" src={logo} alt="Logo" />
        </div>

        <button className="text-neutral-300" type="button">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H24V2H0V0ZM0 7H24V9H0V7ZM0 14H24V16H0V14Z"
            />
          </svg>
        </button>
      </header>
      <main className="">
        <div className="">
          <img
            className="ml-2 h-64 object-cover object-left"
            src={devicesImage}
            alt="mobile and desktop devices"
          />
        </div>
        <div className="mt-24 ml-8">
          <p className="font-condensed tracking-widest text-neutral-400 uppercase">
            <span className="mr-2 px-3 py-1 bg-neutral-300 text-white rounded-full tracking-normal">
              NEW
            </span>{" "}
            Monograph Dashboard
          </p>
          <h1 className="mt-4 font-condensed font-bold text-neutral-300 text-h1 leading-none uppercase">
            Powerful Insights into your Team
          </h1>
          <p className="mt-3 font-barlow text-lg text-neutral-400">
            Project planning and time tracking <br />
            for agile teams
          </p>
          <div class="mt-6">
            <button
              type="button"
              className="px-6 py-2 border bg-primary text-white font-condensed text-base font-semibold rounded uppercase"
            >
              Schedule a demo
            </button>
            <button
              type="button"
              className="ml-5 text-neutral-400 font-condensed uppercase text-sm tracking-wide"
            >
              To see a preview
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
