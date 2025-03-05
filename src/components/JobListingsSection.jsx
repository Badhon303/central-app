"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Briefcase, Building } from "lucide-react";

const jobListings = [
  {
    id: 1,
    company: "CSCO",
    title: "Digital Marketing Specialist",
    location: "Dhaka, Bangladesh",
    department: "Marketing",
    type: "Full Time",
    level: "Mid Level",
    description:
      "We are a team of founders, operators and angel investors who have built, scaled and successfully exited startups. We use our combined knowledge and experience to be a value-add to the founders we invest in.",
    postedDate: "Just Now",
  },
  {
    id: 2,
    company: "CSCO",
    title: "Tax Analysis Expert",
    location: "Chittagong, Bangladesh",
    department: "Finance",
    type: "Full Time",
    level: "Mid Level",
    description:
      "We're looking for someone with an eye of detail who enjoys a fast-moving startup with flexibility and speed. You will be working with external accountants to model tax calculations of various country.",
    postedDate: "Just Now",
  },
  {
    id: 3,
    company: "CSCO",
    title: "Customer Success Manager",
    location: "Dhaka, Bangladesh",
    department: "Customer Support",
    type: "Full Time",
    level: "Mid Level",
    description:
      "Position for our mid-market segment is a client facing role focused on unlocking significant value for our customers and prospects through transforming the technology that powers their lending processes.",
    postedDate: "05/09/2024",
  },
  {
    id: 4,
    company: "CSCO",
    title: "Product Manager",
    location: "Dhaka, Bangladesh",
    department: "Product",
    type: "Full Time",
    level: "Mid Level",
    description:
      "Important is looking for a hands-on product manager to drive award-winning products from concept to creation.",
    postedDate: "05/09/2024",
  },
];

export default function JobListingsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobExpand = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  const filteredJobs =
    activeTab === "all"
      ? jobListings
      : jobListings.filter((job) => job.department.toLowerCase() === activeTab);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold">
          <span className="text-gray-700 dark:text-white">
            Open Positions
          </span>
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
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {job.title}
                    </h4>
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
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {job.postedDate}
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                    >
                      {job.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                    >
                      {job.level}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Job description */}
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
  );
}
