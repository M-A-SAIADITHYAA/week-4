import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-section">
        <h2>Skills</h2>
        <div className="skills-input">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill"
          />
          <button onClick={handleAddSkill}>Add</button>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
              <button onClick={() => handleRemoveSkill(skill)}>×</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile; 