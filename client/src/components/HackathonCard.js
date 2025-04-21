import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HackathonCard.css';

const HackathonCard = ({ hackathon }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="hackathon-card">
      <div className="hackathon-card-header">
        <h3>{hackathon.title}</h3>
        <span className="location-badge">
          <i className="fas fa-map-marker-alt"></i> {hackathon.location}
        </span>
      </div>
      
      <div className="hackathon-card-dates">
        <div className="date-item">
          <i className="fas fa-calendar-alt"></i>
          <span>Start: {formatDate(hackathon.startDate)}</span>
        </div>
        <div className="date-item">
          <i className="fas fa-calendar-check"></i>
          <span>End: {formatDate(hackathon.endDate)}</span>
        </div>
      </div>

      <p className="hackathon-description">{hackathon.description}</p>

      <div className="hackathon-card-footer">
        <div className="participants-count">
          <i className="fas fa-users"></i>
          <span>{hackathon.participants?.length || 0} participants</span>
        </div>
        <Link to={`/hackathons/${hackathon._id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HackathonCard; 