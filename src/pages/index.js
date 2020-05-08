import React from "react"
import Layout from "../components/Layout.js"
import devicesImage from "../images/devices-image.svg"

export default () => {
  return (
    <Layout>
      <main className="sm:mt-16 sm:flex sm:flex-row-reverse">
        <div className="sm:w-1/2">
          <img
            className="ml-2 h-64 object-cover object-left max-w-none sm:h-50 md:h-70 lg:h-full"
            src={devicesImage}
            alt="mobile and desktop devices"
          />
        </div>
        <div className="mt-24 ml-8 sm:w-1/2 sm:mt-8">
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
          <div className="mt-6 sm:mt-16">
            <button
              type="button"
              className="px-6 py-2 border bg-primary hover:bg-light text-white font-condensed text-base font-semibold rounded uppercase lg:px-10 lg:py-3"
            >
              Schedule a demo
            </button>
            <button
              type="button"
              className="ml-5 text-neutral-400 font-condensed uppercase text-sm tracking-wide sm:ml-2 md:tracking-widest lg:ml-8"
            >
              To see a preview
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
