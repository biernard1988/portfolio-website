import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Bernard Costa
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam
            neque corporis minima culpa dolorem? Sint eaque, iure laboriosam
            recusandae aspernatur porro nulla, repellat incidunt cupiditate
            debitis ut accusamus necessitatibus!
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/eu.png"
              width={200}
              height={300}
              alt="eu"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
