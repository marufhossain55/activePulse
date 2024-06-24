import React from 'react';

function TrainerInfo({ trainer }) {
  return (
    <div>
      <h1>{trainer.name}</h1>
      <img src={trainer.profileImage} alt={trainer.name} />
      <p>Experience: {trainer.yearsOfExperience} years</p>
      <p>Expertise: {trainer.expertise}</p>
    </div>
  );
}

export default TrainerInfo;
