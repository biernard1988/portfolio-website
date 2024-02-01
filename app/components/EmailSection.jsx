"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          I'm currently looking for new opportunities. If you have any
          questions, please don't hesitate to contact me.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/akshaykulkarni">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2rem" }} />
          </Link>
          <Link href="https://github.com/akshaykulkarni">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "2rem" }} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="your@email.com"
              className="bg-[#18191E] border border-[#ADB7BE] placeholder-[#9CA2AE] rounded-lg p-2 text-sm w-full block"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Your subject..."
              className="bg-[#18191E] border border-[#ADB7BE] placeholder-[#9CA2AE] rounded-lg p-2 text-sm w-full block"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Send a message..."
              className="bg-[#18191E] border border-[#ADB7BE] placeholder-[#9CA2AE] rounded-lg p-2 text-sm w-full block"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-gradient-to-r from-cyan-500 to-green-500 hover:text-black font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500">Email sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
