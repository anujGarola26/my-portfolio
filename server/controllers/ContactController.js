const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    console.log('✅ Contact saved to database:', contact);

    // Send email (OPTIONAL - only if credentials are set)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
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
            <p><strong>Message:</strong> ${message}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully');
      } catch (emailError) {
        console.error('⚠️ Email sending failed:', emailError.message);
        // Don't fail the request if email fails
      }
    } else {
      console.log('⚠️ Email not configured - skipping email notification');
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
      data: contact,
    });

  } catch (error) {
    console.error('❌ Error in submitContact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: error.message
    });
  }
};
