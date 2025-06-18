"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_KEY);

export const sendEnquiry = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // server-side validation
  if (!validateString(name, 100)) {
    return {
      error: "Invalid name",
    };
  }
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(subject, 200)) {
    return {
      error: "Invalid subject",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "shoishob554@gmail.com",
      subject: subject,
      reply_to: email,
      react: (
        <div>
          <h1>New Enquiry Submission</h1>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>
      ),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};