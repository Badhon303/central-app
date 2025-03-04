"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ArrowRight, Briefcase, Users, Building, ChevronRight } from "lucide-react";

// Job listings data
const jobListings = [
  {
    id: 1,
    company: "CSCO",
    title: "Digital Marketing Specialist",
    location: "Dhaka, Bangladesh",
    department: "Marketing",
    type: "Full Time",
    level: "Mid Level",
    description: "We are a team of founders, operators and angel investors who have built, scaled and successfully exited startups. We use our combined knowledge and experience to be a value-add to the founders we invest in.",
    postedDate: "Just Now"
  },
  {
    id: 2,
    company: "CSCO",
    title: "Tax Analysis Expert",
    location: "Chittagong, Bangladesh",
    department: "Finance",
    type: "Full Time",
    level: "Mid Level",
    description: "We're looking for someone with an eye of detail who enjoys a fast-moving startup with flexibility and speed. You will be working with external accountants to model tax calculations of various country.",
    postedDate: "Just Now"
  },
  {
    id: 3,
    company: "CSCO",
    title: "Customer Success Manager",
    location: "Dhaka, Bangladesh",
    department: "Customer Support",
    type: "Full Time",
    level: "Mid Level",
    description: "Position for our mid-market segment is a client facing role focused on unlocking significant value for our customers and prospects through transforming the technology that powers their lending processes.",
    postedDate: "05/09/2024"
  },
  {
    id: 4,
    company: "CSCO",
    title: "Product Manager",
    location: "Dhaka, Bangladesh",
    department: "Product",
    type: "Full Time",
    level: "Mid Level",
    description: "Important is looking for a hands-on product manager to drive award-winning products from concept to creation.",
    postedDate: "05/09/2024"
  }
];

// Team images
const teamImages = [
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
];

const CareersSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobExpand = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  const filteredJobs = activeTab === "all" 
    ? jobListings 
    : jobListings.filter(job => job.department.toLowerCase() === activeTab);

  return (
    <div className="relative py-16 md:py-24" id="careers">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Join Our <span className="text-primary dark:text-white">Team</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's transforming the pharmaceutical industry with innovation, integrity, and excellence.
          </p>
        </div>

        {/* Join CSCO Section - Inspired by the first reference image */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Images collage */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-2 h-full">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={teamImages[0]} 
                      alt="CSCO Team" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <Image 
                      src={teamImages[1]} 
                      alt="CSCO Office" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden col-span-2">
                    <Image 
                      src={teamImages[2]} 
                      alt="CSCO Collaboration" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-blue-700 dark:to-indigo-800 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Launch your career with CSCO
                </h3>
                <p className="text-white/90 text-lg mb-8">
                  We believe great businesses treat their employees like people, not ID numbers — and that starts right here in our offices. From hands-on training to our vibrant work environment and truly supportive community, CSCO is the best place to kickstart your career.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-md font-medium">
                    Apply today
                  </Button>
                </div>
                <div className="mt-8 text-white/80">
                  <p className="text-xl font-medium">
                    We're looking for amazing talent to join CSCO in 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings Section - Inspired by the second reference image */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">
              <span className="text-gray-700 dark:text-white">Open </span>
              <span className="text-primary dark:text-primary-foreground">Positions</span>
            </h3>
            
            {/* Department filter tabs */}
            <div className="hidden md:flex space-x-2 bg-white/80 dark:bg-gray-800/80 p-1 rounded-lg shadow-sm">
              <button 
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "all" 
                    ? "bg-primary text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab("marketing")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "marketing" 
                    ? "bg-primary text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Marketing
              </button>
              <button 
                onClick={() => setActiveTab("finance")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "finance" 
                    ? "bg-primary text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Finance
              </button>
              <button 
                onClick={() => setActiveTab("product")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "product" 
                    ? "bg-primary text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Product
              </button>
            </div>
          </div>

          {/* Mobile filter dropdown */}
          <div className="md:hidden mb-6">
            <select 
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="all">All Departments</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
              <option value="product">Product</option>
            </select>
          </div>

          {/* Job listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJobExpand(job.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          <Briefcase size={20} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h4>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Building size={16} className="mr-1" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.postedDate}</div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                          {job.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job description - only visible when expanded */}
                  {expandedJob === job.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {job.description}
                      </p>
                      <Button className="mt-2">
                        Apply Now <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* No jobs found message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-white/80 dark:bg-gray-800/80 rounded-xl">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No open positions in this department at the moment.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveTab("all")}
              >
                View all positions
              </Button>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">
              <span className="text-gray-700 dark:text-white">Why Join </span>
              <span className="text-primary dark:text-primary-foreground">CSCO?</span>
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer more than just a job. Join us and be part of a team that values innovation, growth, and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Competitive Compensation",
                description: "We offer industry-leading salaries and comprehensive benefits packages.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              },
              {
                title: "Professional Development",
                description: "Continuous learning opportunities and career advancement paths.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working arrangements and generous time-off policies.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              },
              {
                title: "Inclusive Culture",
                description: "A diverse and supportive environment where everyone belongs.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              },
              {
                title: "Health & Wellness",
                description: "Comprehensive health benefits and wellness programs.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              },
              {
                title: "Innovation Focus",
                description: "Work on cutting-edge projects that make a real difference.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareersSection;