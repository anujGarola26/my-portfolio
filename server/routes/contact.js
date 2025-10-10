const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// In-memory storage for visitor count (you can use MongoDB later)
let visitorCount = 0;
let uniqueVisitors = new Set();

// Contact form route (existing)
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // Email transporter configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.',
    });
  }
});

// NEW: Visitor tracking route
router.post('/track-visitor', (req, res) => {
  const { visitorId } = req.body;
  
  // Track unique visitors using browser fingerprint
  if (!uniqueVisitors.has(visitorId)) {
    uniqueVisitors.add(visitorId);
    visitorCount++;
  }
  
  res.json({
    success: true,
    totalVisitors: visitorCount,
    uniqueVisitors: uniqueVisitors.size
  });
});

// NEW: Get visitor stats
router.get('/visitor-stats', (req, res) => {
  res.json({
    success: true,
    totalVisitors: visitorCount,
    uniqueVisitors: uniqueVisitors.size,
    countries: 52, // You can integrate with GeoIP API later
    projects: 3
  });
});

module.exports = router;
