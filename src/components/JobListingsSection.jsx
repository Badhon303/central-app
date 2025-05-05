"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";
import getJobs from "../../actions/getJobs";

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return "Just Now";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Just Now";

  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Lexical JSON parser
const renderLexicalContent = (lexicalData) => {
  if (!lexicalData?.root?.children) return null;

  return lexicalData.root.children.map((node, index) => {
    if (node.type === "paragraph") {
      return (
        <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
          {node.children?.map((child, i) => (
            <span key={i}>{child.text}</span>
          ))}
        </p>
      );
    } else if (node.type === "heading") {
      return (
        <h3
          key={index}
          className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3"
        >
          {node.children?.map((child, i) => (
            <span key={i}>{child.text}</span>
          ))}
        </h3>
      );
    } else if (node.type === "list") {
      return (
        <ul
          key={index}
          className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300"
        >
          {node.children?.map((item, i) => (
            <li key={i} className="mb-1">
              {item.children?.map((child, j) => (
                <span key={j}>{child.text}</span>
              ))}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  });
};

export default function JobListingsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const jobsData = await getJobs();
        setJobs(jobsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const toggleJobExpand = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  const filteredJobs =
    activeTab === "all"
      ? jobs
      : jobs.filter((job) => job.department?.toLowerCase() === activeTab);

  if (loading) {
    return (
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">
            <span className="text-gray-700 dark:text-white">
              Open Positions
            </span>
          </h3>
        </div>
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Loading jobs...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">
            <span className="text-gray-700 dark:text-white">
              Open Positions
            </span>
          </h3>
        </div>
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between items-center mb-8">
        <h3 className="text-3xl font-bold">
          <span className="text-gray-700 dark:text-white">Open Positions</span>
        </h3>
        {/* filter tabs */}
        <div className="flex space-x-2 bg-white/80 dark:bg-gray-800/80 p-1 rounded-lg shadow-sm overflow-x-auto">
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
            onClick={() => setActiveTab("engineering")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "engineering"
                ? "bg-primary text-white"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Engineering
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
        </div>
      </div>

      {/* job listings */}
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
              className="py-4 px-2 sm:p-6 cursor-pointer"
              onClick={() => toggleJobExpand(job.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="sm:text-xl text-base font-bold text-gray-800 dark:text-white">
                        {job.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {job.designation}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location || "Location not specified"}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-gray-500 dark:text-gray-400 mb-2 text-[10px] sm:text-sm">
                    {formatDate(job.createdAt)}
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-[10px] sm:text-sm p-1 text-primary border-primary dark:bg-primary-900/30 dark:text-primary dark:border-primary"
                    >
                      {job.jobType === "onsite"
                        ? "On Site"
                        : job.jobType || "Full Time"}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-[10px] sm:text-sm p-1 text-primary border-primary dark:bg-primary-900/30 dark:text-primary dark:border-primary"
                    >
                      {job.yearOfExperience || "0"} yrs exp
                    </Badge>
                  </div>
                </div>
              </div>

              {/* details - expanded view */}
              {expandedJob === job.id && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="prose dark:prose-invert max-w-none">
                    {job.details ? (
                      renderLexicalContent(job.details)
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        No job details available.
                      </p>
                    )}
                  </div>

                  {/* additional information */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                      <div>
                        <h4 className="font-medium">Education:</h4>
                        <p>{job.education || "Not specified"}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Experience:</h4>
                        <p>{job.yearOfExperience || "0"} years</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Application Deadline:</h4>
                        <p>
                          {job.deadline
                            ? new Date(job.deadline).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )
                            : "Not specified"}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Job Type:</h4>
                        <p>
                          {job.jobType === "onsite"
                            ? "On Site"
                            : job.jobType || "Full Time"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-end items-center">
                    <Button className="mt-6 w-full sm:w-auto">
                      Apply Now <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* no jobs found */}
      {filteredJobs.length === 0 && !loading && (
        <div className="text-center py-8 bg-white/80 dark:bg-gray-800/80 rounded-xl">
          <p className="text-gray-600 dark:text-gray-300 text-base">
            No open positions in this department at the moment.
          </p>
          <Button
            variant="outline"
            className="mt-8 border-primary"
            onClick={() => setActiveTab("all")}
          >
            View all positions
          </Button>
        </div>
      )}
    </div>
  );
}
