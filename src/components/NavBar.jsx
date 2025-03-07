"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
  { to: "/about", label: "About" },
  { to: "/product", label: "Product" },
  { to: "/globalPartners", label: "Global Partners" },
  { to: "/customers", label: "Customers" },
  { to: "/newsAndEvents", label: "News And Events" },
  { to: "/regionalOffices", label: "Upcoming Regional Offices" },
  { to: "/careers", label: "Careers" },
  { to: "/enquiry", label: "Enquiry" },
];

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleNavLinks = () => {
    setIsToggled(!isToggled);
  };

  const handleThemeChange = (val) => {
    setTheme(val);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-transform duration-300`}
    >
      <nav
        id="nav"
        className={`group w-full transition-all duration-300 ${
          isScrolled
            ? currentTheme === "dark"
              ? "bg-gray-950 border-gray-800"
              : "bg-white border-gray-200"
            : "bg-transparent"
        } ${isScrolled ? "border shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <img
                    src="/logos/csco.jpg"
                    className="w-28 bg-white/30 rounded-lg"
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
              className={`absolute top-full left-0 w-full flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:relative lg:flex lg:w-fit lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent ${
                isToggled ? "opacity-100 z-20" : "hidden"
              }`}
            >
              <div className="w-full lg:w-auto lg:pr-4 lg:pt-0">
                <div
                  id="links-group"
                  className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm"
                >
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={`block transition md:px-4
                        lg:${
                          currentTheme === "dark"
                            ? "text-white hover:text-primary"
                            : isScrolled
                            ? "text-gray-800 hover:text-primary"
                            : "text-white hover:text-primary"
                        }
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
                    : "text-gray-800 lg:text-white"
                }`}
                onClick={() => handleThemeChange("dark")}
              >
                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
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
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}