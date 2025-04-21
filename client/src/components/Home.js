import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Hackathon Finder</h1>
      <p>Find and connect with hackathons that match your skills and interests.</p>
      <div className="features">
        <div className="feature-card">
          <h2>Browse Hackathons</h2>
          <p>Discover upcoming hackathons and find the perfect match for your skills.</p>
        </div>
        <div className="feature-card">
          <h2>Showcase Skills</h2>
          <p>Create your profile and highlight your technical expertise.</p>
        </div>
        <div className="feature-card">
          <h2>Connect with Others</h2>
          <p>Message other participants and form teams for hackathons.</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 