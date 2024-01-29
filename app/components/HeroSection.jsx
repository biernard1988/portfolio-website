"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mx-10">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam
            neque corporis minima culpa dolorem?
          </p>
          <div className="">
            <button className="bg-gradient-to-br from-cyan-500 to-green-600 hover:bg-gradient-to-bl hover:text-black px-6 py-3 w-full sm:w-fit mr-4 rounded-full">
              Hire me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit bg-transparent hover:bg-slate-800 rounded-full border border-white hover:border-transparent mt-2">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#4c514d76] w-[310px] h-[310px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/eu.png"
              width={180}
              height={320}
              alt="eu"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
