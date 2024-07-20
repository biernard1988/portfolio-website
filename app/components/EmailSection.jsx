"use client"
import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function EmailSection() {
  const form = useRef()
  const [isSending, setIsSending] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsSending(true)
    try {
      const result = await emailjs.sendForm(
        "service_7ge1p1q",
        "template_d2qteaz",
        form.current,
        "Fp4lObwyj0EFy-HWn"
      )
      console.log(result.text)
      notify() // Notificar quando o e-mail for enviado com sucesso
    } catch (error) {
      console.log(error.text)
    } finally {
      setIsSending(false)
    }
  }

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
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    // Verifica se todos os campos estão preenchidos
    const allFieldsFilled = [...formData.values()].every(
      (value) => value.trim() !== ""
    )
    if (allFieldsFilled) {
      await sendEmail(e) // Se todos os campos estiverem preenchidos, envia o e-mail
    } else {
      // Caso contrário, exibe uma mensagem de erro
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-20 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          I'm currently looking for new opportunities. If you have any
          questions, please don't hesitate to contact me.
        </p>
        <p>Bernard Almeida da Costa</p>
        <p>Raubersrieder Weg, 57. Wendelstein - Germany</p>
        <p>PLZ: 90530</p>
        <p>Tel: +49 1623669251 or +351 928065203</p>
        <div className="socials flex flex-row gap-2 my-6">
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
        <form
          className="flex flex-col gap-6 max-w-lg"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
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
              rows="6"
              color="33"
              placeholder="Send a message..."
              className="bg-[#18191E] border border-[#ADB7BE] placeholder-[#9CA2AE] rounded-lg p-2 text-sm w-full block resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-green-500 hover:bg-gradient-to-r from-cyan-500 to-green-500 hover:text-black font-medium py-2.5 px-5 rounded-lg w-full ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
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
  )
}

export default EmailSection
