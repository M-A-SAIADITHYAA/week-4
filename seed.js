const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackathon-finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

// Sample hackathons
const sampleHackathons = [
  {
    title: "Global AI Hackathon 2024",
    description: "Join the world's largest AI hackathon and build innovative solutions using artificial intelligence.",
    startDate: new Date("2024-05-15"),
    endDate: new Date("2024-05-17"),
    location: "Virtual",
  },
  {
    title: "Blockchain Innovation Challenge",
    description: "Create decentralized applications and explore the future of blockchain technology.",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-03"),
    location: "San Francisco, CA",
  },
  {
    title: "Climate Tech Hackathon",
    description: "Develop solutions to combat climate change and promote sustainability.",
    startDate: new Date("2024-07-10"),
    endDate: new Date("2024-07-12"),
    location: "New York, NY",
  },
  {
    title: "Healthcare Innovation Summit",
    description: "Build applications to improve healthcare delivery and patient outcomes.",
    startDate: new Date("2024-08-05"),
    endDate: new Date("2024-08-07"),
    location: "Boston, MA",
  },
  {
    title: "FinTech Revolution",
    description: "Transform the financial industry with innovative technology solutions.",
    startDate: new Date("2024-09-20"),
    endDate: new Date("2024-09-22"),
    location: "London, UK",
  }
];

// Seed the database
async function seedDatabase() {
  try {
    // Clear existing hackathons
    await Hackathon.deleteMany({});
    console.log('Cleared existing hackathons');

    // Insert new hackathons
    await Hackathon.insertMany(sampleHackathons);
    console.log('Successfully seeded hackathons');

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 