"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  PhoneCall,
  MapPin,
  Send,
} from "lucide-react";
import { sendEnquiry } from "../../actions/sendEnquiry";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);

    const { data, error } = await sendEnquiry(formDataObj);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Enquiry sent successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm dark:border dark:border-gray-800 rounded-xl p-12 shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Contact <span className="text-primary">Our Team</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <PhoneCall className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                +1 (234) 567-8900
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">
                shoishob554@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                22b Elementary Street, New York, NY
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full"
              required
            />
          </div>
          <Input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            className="w-full"
            required
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={5}
            className="w-full"
            required
          />
          <Button type="submit" size="lg" className="w-full group bg-secondary hover:bg-secondary/90">
            Send Message
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  );
}
