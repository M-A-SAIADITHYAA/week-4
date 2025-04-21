# Hackathon Finder

A platform for finding hackathons and connecting with other developers. Users can showcase their skills, list hackathons they're interested in, and message other users.

## Features

- User registration and authentication
- Browse and search hackathons
- Show interest in hackathons
- User profiles with skills listing
- Real-time messaging between users
- Responsive design

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd hackathon-finder
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/hackathon-finder
JWT_SECRET=your-secret-key
PORT=5000
```

5. Start the backend server:
```bash
npm start
```

6. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
hackathon-finder/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── App.js
│       └── index.js
├── server.js              # Express backend
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 