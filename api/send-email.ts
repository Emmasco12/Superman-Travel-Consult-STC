import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from "nodemailer";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, region, destination } = req.body;

  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT?.trim() || "465");

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ 
      error: "Server email configuration is missing. Please set SMTP_USER and SMTP_PASS in your Vercel environment variables." 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: `"STC Website" <${smtpUser}>`,
      to: process.env.RECEIVER_EMAIL?.trim() || "supportquicksellgh@gmail.com",
      subject: `New Consultation Request: ${firstName} ${lastName}`,
      text: `
        New Consultation Request Details:
        ---------------------------------
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Region: ${region}
        
        Destination Description:
        ${destination}
      `,
      html: `
        <h3>New Consultation Request Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Region:</strong> ${region}</p>
        <br/>
        <p><strong>Destination Description:</strong></p>
        <p>${destination}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Vercel Function Error:", error);
    return res.status(500).json({ 
      error: "Failed to send email.",
      details: error instanceof Error ? error.message : String(error)
    });
  }
}
