"use client"
import Image from "next/image"
import React, { useState, useTransition } from "react"
import TabButton from "./TabButton"

const Tab_Data = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Bun.js</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Git</li>
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
          Full Stack Web and App Development - WBS Coding School (2023-2004)
        </li>
        <li>Node.js Essential Training - Eve Porcello (2024)</li>
        <li>TypeScript Essential Training - Jess Chadwick (2024)</li>
        <li>
          <li>
            .NET Fundamentals: Concepts, APIs, and Libraries in the .NET
            Framework - Walt Ritscher (2023)
          </li>
          AWS Essential Training for Developers - Jeremy Villeneuve (2023)
        </li>
        <li>Learning Next.js - Sandy Ludosky (2022)</li>
        <li>Advanced English - Yázigi Manaus (2013)</li>
      </ul>
    ),
  },
]

function AboutSection() {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-lg sm:h-72 md:h-80 lg:h-96"
          src="/coding.png"
          width={600}
          height={600}
          alt="coding"
        />
        <div className="mt-12 md:mt-10 text-justify flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 place-self-center md:place-self-start">
            About Me
          </h2>
          <p className="text-base lg:text-lg ">
            Career changer as Web Developer with a background in Biology and
            Seminars Facilitator in UNICEF. Proficient in Fullstack Web and App
            Development, acquired deeply skills as Frontend Developer at WBS
            Coding School. Effective communicator with a proven ability to
            facilitate clear and concise collaboration among cross-functional
            teams, ensuring alignment and fostering a cohesive environment for
            delivering successful software projects.
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
  )
}

export default AboutSection
