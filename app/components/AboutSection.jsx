"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [startTransition, setStartTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/coding.png" width={600} height={600} alt="coding" />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            consectetur, optio officiis perferendis soluta quo sapiente. Illum
            quo doloribus nisi maxime, natus quaerat doloremque laboriosam, odit
            pariatur numquam molestiae ab!. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis suscipit nobis hic natus iusto
            soluta sunt rem laboriosam quas doloremque excepturi et dolorum
            perspiciatis commodi facilis dolore, corrupti inventore unde?
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-cyan-500">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
