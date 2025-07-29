"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/navbar-dropdown"
import { Check, ChevronDown, Moon, Sun } from "lucide-react"

const links = [
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/news-and-events", label: "News And Events" },
  { to: "/careers", label: "Careers" },
  { to: "/contact-us", label: "Contact Us" },
]

const whatWeDoLinks = [
  { to: "/our-products", label: "Our Products" },
  { to: "/our-expertise", label: "Our Expertise" },
  { to: "/our-clients", label: "Our Clients" },
  { to: "/our-commitment", label: "Our Commitment" },
]

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const { theme, systemTheme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const toggleNavLinks = () => {
    setIsToggled(!isToggled)
  }

  const handleThemeChange = (val) => {
    setTheme(val)
  }

  const isActive = (path) => {
    return pathname === path
  }

  const isWhatWeDoActive = () => {
    return (
      whatWeDoLinks.some((link) => pathname === link.to) ||
      pathname === "/what-we-do"
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  // link text styling
  const getLinkStyle = () => {
    if (currentTheme === "dark") {
      return "text-white text-[15px] dark:text-white dark:hover:text-primary"
    } else {
      return isScrolled
        ? "text-gray-800 hover:text-primary"
        : "text-white hover:text-primary"
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-transform duration-300`}
    >
      <nav
        id="nav"
        className={`group w-full transition-all duration-300 ${
          isScrolled
            ? currentTheme === "dark"
              ? "bg-gray-950"
              : "bg-white"
            : "bg-transparent"
        } ${isScrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex items-center w-full justify-between md:px-0 lg:w-fit">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <img
                    src={
                      theme === "dark"
                        ? isScrolled
                          ? "/logos/Central-Scientific-Logo-dark.png"
                          : "/logos/Central-Scientific-Logo-white.png"
                        : isScrolled
                        ? "/logos/Central-Scientific-Logo.png"
                        : "/logos/Central-Scientific-Logo-white.png"
                    }
                    className="w-40 sm:w-44 rounded-lg"
                    alt="Central Scientific Logo"
                  />
                </div>
              </Link>
              <button
                aria-label="hamburger"
                id="hamburger"
                className="relative -mr-6 p-6 lg:hidden"
                onClick={toggleNavLinks}
              >
                <div
                  className={`m-auto h-0.5 w-5 rounded transition duration-300 ${
                    currentTheme === "dark"
                      ? "bg-white"
                      : isScrolled
                      ? "bg-gray-800"
                      : "bg-white"
                  } origin-top ${
                    isToggled ? "rotate-45 translate-y-1.5" : ""
                  } ${
                    isToggled && currentTheme !== "dark" ? "!bg-gray-800" : ""
                  }`}
                ></div>
                <div
                  className={`m-auto mt-2 h-0.5 w-5 rounded transition duration-300 ${
                    currentTheme === "dark"
                      ? "bg-white"
                      : isScrolled
                      ? "bg-gray-800"
                      : "bg-white"
                  } origin-bottom ${
                    isToggled ? "-rotate-45 -translate-y-1" : ""
                  } ${
                    isToggled && currentTheme !== "dark" ? "!bg-gray-800" : ""
                  }`}
                ></div>
              </button>
            </div>
            <div
              className={`fixed inset-0 h-screen w-screen origin-bottom bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-950/70 lg:hidden ${
                isToggled ? "scale-y-100 z-10" : "scale-y-0 hidden"
              }`}
            ></div>
            <div
              className={`absolute top-full left-0 w-full flex-col flex-wrap justify-end gap-6 rounded-3xl border-b border-gray-100 bg-white p-8 shadow-2xl transition-all duration-300 dark:border-b dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:relative lg:flex lg:w-fit lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent ${
                isToggled ? "opacity-100 z-20" : "hidden"
              }`}
            >
              <div className="w-full lg:w-auto lg:pr-4 lg:pt-0">
                <div
                  id="links-group"
                  className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm"
                >
                  {/* Who We Are link */}
                  <Link
                    href="/who-we-are"
                    className={`block text-[15px] transition md:px-4
                      ${
                        isActive("/who-we-are")
                          ? "font-bold scale-110 duration-75"
                          : "font-normal"
                      }
                      lg:${getLinkStyle()}
                      ${
                        currentTheme === "dark"
                          ? "lg:dark:text-white"
                          : "lg:dark:text-gray-200"
                      }
                      ${
                        currentTheme === "dark"
                          ? "text-white dark:text-white"
                          : "text-gray-800"
                      } lg:text-inherit`}
                    onClick={toggleNavLinks}
                  >
                    <span>Who We Are</span>
                  </Link>

                  {/* dropdown menu */}
                  <div className="hidden lg:block">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        asChild
                        className="focus:outline-none focus-visible:no-ring"
                      >
                        <button
                          className={`flex items-center transition md:px-4 text-[15px] 
                            ${
                              isWhatWeDoActive()
                                ? "font-bold scale-110 duration-75"
                                : "font-normal"
                            }
                            lg:${getLinkStyle()}
                            ${
                              currentTheme === "dark"
                                ? "text-white dark:text-white"
                                : isScrolled
                                ? "text-gray-800"
                                : "text-white"
                            } hover:text-primary`}
                        >
                          <span>What We Do</span>
                          <ChevronDown className="ml-1 size-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="min-w-[180px] bg-white dark:bg-gray-800 rounded-md shadow-lg p-1 z-50"
                        align="start"
                      >
                        {whatWeDoLinks.map((item, key) => (
                          <DropdownMenuItem
                            key={item.label}
                            active={isActive(item.to)} // Pass true/false based on active state
                            className="px-3 py-2 rounded-md" // Additional styling if needed
                            asChild
                          >
                            <Link href={item.to}>{item.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* What We Do dropdown */}
                  <div className="lg:hidden">
                    <button
                      className={`block transition mb-2 text-[15px]
                        ${
                          isWhatWeDoActive()
                            ? "font-bold scale-110 duration-75"
                            : "font-normal"
                        }
                        lg:${getLinkStyle()}
                        ${
                          currentTheme === "dark"
                            ? "text-white dark:text-white"
                            : "text-gray-800"
                        }`}
                      onClick={() => {
                        const submenu = document.getElementById(
                          "mobile-what-we-do-submenu"
                        )
                        if (submenu) {
                          submenu.classList.toggle("hidden")
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <span>What We Do</span>
                        <ChevronDown className="ml-1 size-4" />
                      </div>
                    </button>
                    <div
                      id="mobile-what-we-do-submenu"
                      className="hidden pl-4 mb-4"
                    >
                      {whatWeDoLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.to}
                          className={`block py-2 text-[15px]
                            ${
                              isActive(item.to)
                                ? "font-medium text-primary"
                                : "font-normal"
                            }
                            ${
                              currentTheme === "dark"
                                ? "text-white/80 dark:text-white/80"
                                : "text-gray-600"
                            }`}
                          onClick={toggleNavLinks}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* remaining links */}
                  {links.slice(1).map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={`block transition md:px-4 text-[15px]
                        ${
                          isActive(link.to)
                            ? "font-bold scale-110 duration-75"
                            : "font-normal"
                        }
                        lg:${getLinkStyle()}
                        ${
                          currentTheme === "dark"
                            ? "lg:dark:text-white"
                            : "lg:dark:text-gray-200"
                        }
                        ${
                          currentTheme === "dark"
                            ? "text-white dark:text-white"
                            : "text-gray-800"
                        } lg:text-inherit`}
                      onClick={toggleNavLinks}
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className={`font-medium rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${
                  currentTheme === "dark" ? "hidden" : "block"
                } ${
                  currentTheme === "dark"
                    ? "text-white lg:text-white"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-gray-800 lg:text-white lg:hover:text-gray-800"
                }`}
                onClick={() => handleThemeChange("dark")}
              >
                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                  <Moon className="size-4" />
                </span>
              </button>
              <button
                type="button"
                className={`block font-medium rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${
                  currentTheme === "dark" ? "block" : "hidden"
                }`}
                onClick={() => handleThemeChange("light")}
              >
                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                  <Sun className="size-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
