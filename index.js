const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const Queue = require('bull');

app.use(express.json());
app.use(cors());

// Redis connection
const emailQueue = new Queue('emailQueue', {
  redis: {
    host: 'rediss://red-cs7ntsij1k6c73fk9qc0:he3tWxb8WRKnTuQ2IC3RLecK0AA7Igsz@oregon-redis.render.com:6379', // Change to your Redis host
    port: 6379
  },
});

// Mail transporter configuration
const transport = nodemailer.createTransport({
  host: 'mail.ireoluwayimika.online',
  port: 465,
  secure: true, // Use true for 465, false for other ports
  auth: {
    user: 'invites@ireoluwayimika.online',
    pass: 'BOBson246**', // Use environment variables for security
  },
});

// Process jobs in the queue
emailQueue.process(async (job) => {
  const { email } = job.data;

  const mailOptions = {
    from: 'invites@ireoluwayimika.online', // Sender address
    to: email,
    subject: "You're Invited to The IreoluwaYimika Experience",
    html: `<h1>Welcome!</h1><p>You're invited to experience something amazing.</p>`,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error);
    throw error;
  }
});

// Health check for Redis
app.get('/api/redis-health', async (req, res) => {
  try {
    // Perform a simple Redis operation
    await emailQueue.client.set('health-check', 'OK');
    const value = await emailQueue.client.get('health-check');
    
    if (value === 'OK') {
      res.status(200).json({ message: 'Redis is working' });
    } else {
      res.status(500).json({ message: 'Redis is not responding correctly' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Redis connection failed', error: error.message });
  }
});

// POST Request to send mail
app.post('/api/send', async (req, res) => {
  const { email } = req.body;


  try {
    await emailQueue.add({ email });
    res.status(200).json({ message: 'Email job added to the queue' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add email job to the queue', error: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
