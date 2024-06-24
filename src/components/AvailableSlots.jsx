import React from 'react';
import { Link } from 'react-router-dom';

function AvailableSlots({ slots, trainerId }) {
  return (
    <div>
      <h2>Available Slots</h2>
      {slots.map((slot) => (
        <Link key={slot._id} to={`/book/${trainerId}/${slot._id}`}>
          {new Date(slot.datetime).toLocaleString()}
        </Link>
      ))}
    </div>
  );
}

export default AvailableSlots;
