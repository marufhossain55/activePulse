import React from 'react';

function SlotDetails({ slot }) {
  return (
    <div>
      <p>Trainer: {slot.trainerName}</p>
      <p>Date and Time: {new Date(slot.datetime).toLocaleString()}</p>
    </div>
  );
}

export default SlotDetails;
