"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tab_Data = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Git</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Linux</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Full Stack Web and App Development - WBS Conding School (2023-2004)
        </li>
        <li>Degree in Biology - Instituto Federal do Amazonas (2009-2013)</li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Full Stack Web and App Development - WBS Conding School (2023-2004)
        </li>
        <li>Advanced English - Yázigi Manaus (2013)</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-lg shadow-lg"
          src="/coding.png"
          width={600}
          height={600}
          alt="coding"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 " id="content">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;