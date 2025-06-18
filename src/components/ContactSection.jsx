"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Globe, Mail, MessageSquare } from "lucide-react"
import { sendEnquiry } from "../../actions/sendEnquiry"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("subject", formData.subject)
    formDataObj.append("message", formData.message)

    const { data, error } = await sendEnquiry(formDataObj)

    if (error) {
      alert(error)
      return
    }

    alert("Enquiry sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const scrollToForm = () => {
    document.getElementById("contact-form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative">
      <div className="relative h-[400px] overflow-hidden">
        <div className="hidden sm:block">
          <Image
            src="/logos/Home-Page-Pictures/coverimages/contact-us.jpeg"
            alt="Contact Us Image for larger screens"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* smaller screens */}
        <div className="block sm:hidden">
          <Image
            src="/logos/Home-Page-Pictures/coverimages/mobile/contact-us.jpg"
            alt="Contact Us Image for smaller screens"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Partner with Central to access
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              cutting-edge scientific technology
            </h3>
            <p className="text-white/90 max-w-3xl mx-auto">
              We look forward to learning about your specific project needs,
              requirements and feedback. Let's work together to advance
              sustainability in the communities that you serve and on your
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* overlapping Cards */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 -mt-8 sm:-mt-14">
          <a
            href="https://www.central-bd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                www.central-bd.com
              </p>
            </div>
          </a>

          <a
            href="mailto:info@central-bd.com"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                info@central-bd.com
              </p>
            </div>
          </a>

          <button
            onClick={scrollToForm}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer w-full"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                Contact Form
              </p>
            </div>
          </button>
        </div>

        {/* Contact Form */}
        <div
          id="contact-form"
          className="max-w-2xl mx-auto mt-16 mb-20 scroll-mt-24"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full bg-gray-100 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full bg-gray-100 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <Input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="w-full bg-gray-100 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <Textarea
              placeholder="You message here..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              rows={5}
              className="w-full bg-gray-100 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-secondary transition-all duration-150 text-white py-6"
            >
              Send us your request
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
