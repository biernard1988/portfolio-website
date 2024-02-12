"use client";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmailSection() {
  const form = useRef();

  /*  const [user, setUser] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [e.target.name]: value });
  }; */

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7ge1p1q",
        "template_d2qteaz",
        form.current,
        "Fp4lObwyj0EFy-HWn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Email sent Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
          <Link target="_blank" href="https://github.com/biernard1988">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2rem" }} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/bernard-almeida-da-costa/"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "2rem" }} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={sendEmail} ref={form}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              /* onChange={handleChange}
              value={user.email} */
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
            onClick={notify}
            value="Send"
            className="bg-green-500 hover:bg-gradient-to-r from-cyan-500 to-green-500 hover:text-black font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
