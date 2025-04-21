const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackathon-finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: [String],
  interestedHackathons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hackathon' }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Hackathon Schema
const hackathonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  location: String,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

// Message Schema
const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/api/register', [
  body('username').trim().isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.get('/api/hackathons', async (req, res) => {
  try {
    const hackathons = await Hackathon.find().populate('organizer', 'username');
    res.json(hackathons);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching hackathons' });
  }
});

app.post('/api/messages', async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;
    const message = new Message({ sender, receiver, content });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Error sending message' });
  }
});

app.get('/api/messages/:userId', async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.params.userId },
        { receiver: req.params.userId }
      ]
    }).populate('sender receiver', 'username');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

app.post('/api/hackathons', [
  body('title').trim().notEmpty(),
  body('description').trim(),
  body('startDate').isISO8601(),
  body('endDate').isISO8601(),
  body('location').trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const hackathon = new Hackathon(req.body);
    await hackathon.save();
    res.status(201).json(hackathon);
  } catch (error) {
    res.status(500).json({ error: 'Error creating hackathon' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 