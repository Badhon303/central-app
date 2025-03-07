"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { sendEnquiry } from "../../actions/sendEnquiry";

export default function FAQSection() {
  const [uniqueQuestionData, setUniqueQuestionData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const faqs = [
    {
      id: "service-scope",
      question: "What services do we provide?",
      answer:
        "We offer comprehensive pharmaceutical supply chain solutions, including advanced logistics, raw material sourcing, and innovative distribution strategies tailored to meet global healthcare needs.",
    },
    {
      id: "quality-assurance",
      question: "How do we ensure product quality?",
      answer:
        "Our quality assurance process involves rigorous multi-stage quality control, state-of-the-art tracking systems, and strategic partnerships with top-tier manufacturers to maintain the highest standards in pharmaceutical distribution.",
    },
    {
      id: "global-reach",
      question: "What is our global capability?",
      answer:
        "With an extensive international network, we seamlessly connect manufacturers and healthcare providers across continents, ensuring efficient and reliable pharmaceutical supply solutions worldwide.",
    },
    {
      id: "customization",
      question: "Do you offer customized solutions?",
      answer:
        "Absolutely. We pride ourselves on creating tailored supply chain strategies that address the unique challenges and requirements of each client, ensuring optimal efficiency and performance.",
    },
  ];

  const handleUniqueQuestionSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", uniqueQuestionData.name);
    formDataObj.append("email", uniqueQuestionData.email);
    formDataObj.append("subject", "Unique Question Submission");
    formDataObj.append("message", uniqueQuestionData.question);

    const { data, error } = await sendEnquiry(formDataObj);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Question sent successfully!");
    setUniqueQuestionData({ name: '', email: '', question: '' });
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Frequently <span className="text-primary">Asked Questions</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto z-50">
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <AccordionTrigger className="hover:no-underline text-left group">
                <div className="flex items-center space-x-4">
                  <HelpCircle
                    className={`h-6 w-6 text-secondary/70 transition-all duration-300`}
                  />
                  <span className="text-lg font-medium text-gray-800 dark:text-white group-hover:text-secondary transition-colors">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-10 py-4">
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {faq.answer}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg" className="group border-secondary">
              Have a Unique Question?
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ask Your Specific Question</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUniqueQuestionSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={uniqueQuestionData.name}
                onChange={(e) => setUniqueQuestionData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={uniqueQuestionData.email}
                onChange={(e) => setUniqueQuestionData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
              <Textarea
                placeholder="Your Specific Question"
                rows={4}
                value={uniqueQuestionData.question}
                onChange={(e) => setUniqueQuestionData(prev => ({ ...prev, question: e.target.value }))}
                required
              />
              <Button type="submit" className="w-full">
                Submit Question <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}