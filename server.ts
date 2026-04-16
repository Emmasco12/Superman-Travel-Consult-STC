import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending email
  app.post("/api/send-email", async (req, res) => {
    const { firstName, lastName, email, phone, region, destination } = req.body;

    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT?.trim() || "465");
    const receiverEmail = process.env.RECEIVER_EMAIL?.trim();

    // Check if configuration exists
    if (!smtpUser || !smtpPass || !receiverEmail) {
      const missing = [];
      if (!smtpUser) missing.push("SMTP_USER");
      if (!smtpPass) missing.push("SMTP_PASS");
      if (!receiverEmail) missing.push("RECEIVER_EMAIL");
      
      console.error(`Email configuration missing: ${missing.join(", ")}`);
      return res.status(500).json({ 
        error: `Server email configuration is missing: ${missing.join(", ")}. Please set these in the Settings menu.` 
      });
    }

    try {
      console.log(`Attempting to send email via ${smtpHost}:${smtpPort}`);

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Verify connection configuration
      await transporter.verify();
      console.log("SMTP connection verified successfully");

      const mailOptions = {
        from: `"STC Website" <${smtpUser}>`,
        to: receiverEmail,
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

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Detailed Error sending email:", error);
      res.status(500).json({ 
        error: "Failed to send email.",
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
