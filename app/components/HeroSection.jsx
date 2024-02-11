"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mx-8">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
              Hello, I'm{""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Bernard Costa",
                1000,
                "Junior Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 lg:mb-0">
            I recently finished a 5 month intensive web & app development course
            at WBS Coding School - Berlin. I am currently looking for
            opportunities as Entry/Junior Web Developer.
          </p>
          <div>
            <Link
              href="#contact"
              className="bg-gradient-to-br from-cyan-500 to-green-600 hover:bg-gradient-to-bl hover:text-black px-6 py-3 w-full sm:w-fit mr-4 rounded-full transition-all"
            >
              Hire me
            </Link>

            <button className="px-6 py-3 w-full sm:w-fit bg-transparent rounded-full border-2 border-white hover:border-cyan-500 mt-2 transition-all">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#4c514d76] w-[350px] h-[350px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/eu2.png"
              width={200}
              height={350}
              alt="My profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
