import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hackathons.css';

function Hackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hackathons');
        setHackathons(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hackathons:', error);
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="hackathons-container">
      <h1>Available Hackathons</h1>
      <div className="hackathons-grid">
        {hackathons.map((hackathon) => (
          <div key={hackathon._id} className="hackathon-card">
            <h2>{hackathon.title}</h2>
            <p>{hackathon.description}</p>
            <div className="hackathon-details">
              <p>Start Date: {new Date(hackathon.startDate).toLocaleDateString()}</p>
              <p>End Date: {new Date(hackathon.endDate).toLocaleDateString()}</p>
              <p>Location: {hackathon.location}</p>
              <p>Organizer: {hackathon.organizer?.username}</p>
            </div>
            <button className="interest-button">Show Interest</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hackathons; 