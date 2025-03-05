import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use the verified sender in Resend
        to: 'shoishob554@gmail.com', // Your personal email
        reply_to: email, // Set the reply-to to the sender's email
        subject: subject,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Email send error:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}