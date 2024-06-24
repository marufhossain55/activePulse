import React from 'react';
import { Link } from 'react-router-dom';

function TrainerCard({ trainer }) {
  return (
    <div>
      <img src={trainer.profileImage} alt={trainer.name} />
      <h2>{trainer.name}</h2>
      <p>Experience: {trainer.yearsOfExperience} years</p>
      <p>Available slots: {trainer.availableSlots}</p>
      <Link to={`/trainer/${trainer._id}`}>Know More</Link>
    </div>
  );
}

export default TrainerCard;
