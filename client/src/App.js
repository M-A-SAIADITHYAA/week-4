import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hackathons from './components/Hackathons';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Register from './components/Register';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ThemeToggle />
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hackathons" element={<Hackathons />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 