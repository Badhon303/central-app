"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Globe,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";

function Footerdemo() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeChange = (val) => {
    setTheme(val);
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            {/* Logo */}
            <div className="mb-6">
              <img
                src={currentTheme == "dark" ? "/logos/Central-Scientific-Logo-dark.png" : "/logos/Central-Scientific-Logo.png"}
                alt="Central Scientific Company Logo"
                className="w-36"
              />
            </div>

            {/* Punchy Description */}
            <p className="mb-6 text-muted-foreground mr-20 sm:mr-0 sm:max-w-96">
              Connecting world-class pharmaceuticals to the world, efficiently
              and innovatively since 1990.
            </p>

            <a
              href="https://www.central-bd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:text-base cursor-pointer text-gray-600 dark:text-gray-200 hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              <p>www.central-bd.com</p>
            </a>

            <a
              href="mailto:info@central-bd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:text-base cursor-pointer text-gray-600 dark:text-gray-200 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <p>info@central-bd.com</p>
            </a>
          </div>

          <div className="md:ml-8">
            <h3 className="mb-4 text-lg font-semibold ">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="/"
                className="block transition-colors hover:text-primary"
              >
                Home
              </a>
              <a
                href="/about"
                className="block transition-colors hover:text-primary"
              >
                Who We Are
              </a>
              {/* <a
                href="/product"
                className="block transition-colors hover:text-primary"
              >
                Products
              </a> */}
              {/* <a
                href="/customers"
                className="block transition-colors hover:text-primary"
              >
                Customers
              </a> */}
              {/* <a
                href="/globalPartners"
                className="block transition-colors hover:text-primary"
              >
                Global Partners
              </a> */}
              <a
                href="/careers"
                className="block transition-colors hover:text-primary"
              >
                Careers
              </a>
              <a
                href="newsAndEvents"
                className="block transition-colors hover:text-primary"
              >
                News and Events
              </a>
              <a
                href="enquiry"
                className="block transition-colors hover:text-primary"
              >
                Any Question?
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Find Us At</h3>
            <div className="flex flex-col gap-4">
              <address className="space-y-2 text-sm not-italic">
                <h4 className="font-semibold">Registered Address</h4>
                <p>33/3 Shahid Nazrul Islam Road</p>
                <p>Dhaka - 1203, Bangladesh</p>
              </address>
              <address className="space-y-2 text-sm not-italic">
                <h4 className="font-semibold">Corporate Office</h4>
                <p>539/A Baridhara DOHS</p>
                <p>Dhaka - 1206, Bangladesh</p>
              </address>
            </div>
          </div>
          <div className="md:ml-8 relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white">
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white">
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white">
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                className="border-2"
                checked={currentTheme === "dark"}
                onCheckedChange={() =>
                  handleThemeChange(currentTheme === "dark" ? "light" : "dark")
                }
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 CSCO. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
