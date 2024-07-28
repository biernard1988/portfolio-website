import { useRouter } from "next/navigation"
import Link from "next/link"
import React from "react"

const LinkWithoutId = ({ href, children, className, onClick, delay = 300 }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    const scrollToElement = () => {
      const elementId = href.split("#")[1]
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Scroll to the target element
    scrollToElement()

    // Delay before modifying the URL
    setTimeout(() => {
      // Remove hash and id from URL
      const url = window.location.href.split("#")[0]
      window.history.replaceState(null, "", url)

      // Call any additional onClick handler passed as a prop
      if (onClick) onClick()
    }, delay)
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}

export default LinkWithoutId
