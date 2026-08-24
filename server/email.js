import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5175;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465, // true for 465, false for other ports
    auth: { user, pass }
  });
}

app.post('/send-email', async (req, res) => {
  const { name, email, message, page, ua, timestamp } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  const transporter = getTransporter();
  const toEmail = process.env.EMAIL_TO || process.env.SMTP_USER;

  if (!transporter || !toEmail) {
    console.error('SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and EMAIL_TO');
    return res.status(500).json({ error: 'SMTP not configured on server. Please set environment variables.' });
  }

  const subject = `Portfolio Contact: ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nPage: ${page || ''}\nUserAgent: ${ua || ''}\nTimestamp: ${timestamp || ''}\n\nMessage:\n${message}`;

  try {
    const info = await transporter.sendMail({ from: `"Portfolio" <${process.env.SMTP_USER}>`, to: toEmail, subject, text });
    console.log('Email sent', info.messageId);
    return res.json({ ok: true, id: info.messageId });
  } catch (e) {
    console.error('sendMail error', e);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post('/track-view', async (req, res) => {
  const { path, title, ua, timestamp } = req.body || {};
  const transporter = getTransporter();
  const toEmail = process.env.EMAIL_TO || process.env.SMTP_USER;

  if (!transporter || !toEmail) {
    console.error('SMTP configuration missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and EMAIL_TO');
    return res.status(500).json({ error: 'SMTP not configured on server.' });
  }

  const subject = `Portfolio Visit: ${path || '/'}`;
  const text = `Someone visited your portfolio.\n\nPage: ${path || '/'}\nTitle: ${title || ''}\nUserAgent: ${ua || ''}\nTimestamp: ${timestamp || ''}`;

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject,
      text
    });
    console.log('View notification sent', info.messageId);
    return res.json({ ok: true, id: info.messageId });
  } catch (e) {
    console.error('track-view mail error', e);
    return res.status(500).json({ error: 'Failed to send view notification' });
  }
});

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
});
