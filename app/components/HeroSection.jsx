"use client"
import Image from "next/image"
import React from "react"
import { TypeAnimation } from "react-type-animation"
import LinkWithoutId from "./LinkWithoutId"

function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/CV - Bernard Costa.pdf"
    link.download = "bernard_costa_cv.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-6 place-self-center text-center sm:text-left xl:pl-10">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
              Hello, I'm{""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Bernard Costa",
                1000,
                "Frontend Developer",
                1000,
                "UI Developer",
                1000,
                "Tech Support",
                1000,
                "Help Desk",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base text-justify sm:text-lg lg:text-xl mb-6 lg:mb-0">
            I recently completed a five-month intensive Full-stack Web and App
            development course at WBS Coding School in Berlin. I am now seeking
            opportunities as an entry or junior level, Frontend developer, UI
            developer, Tech Support, or Help Desk.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-3 mt-5">
            <LinkWithoutId
              href="#contact"
              className="bg-gradient-to-br from-cyan-500 to-green-600 hover:bg-gradient-to-bl hover:text-black px-6 py-3 w-full sm:w-fit rounded-full transition-all"
            >
              <b>Hire Me!</b>
            </LinkWithoutId>

            <button
              onClick={handleDownload}
              className="px-6 py-3 w-full sm:w-fit bg-transparent rounded-full border-2 border-white hover:border-cyan-500 transition-all"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#4c514d76] w-[320px] h-[320px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/eu1.png"
              width={210}
              height={390}
              alt="My profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
