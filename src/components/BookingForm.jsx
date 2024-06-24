import React from 'react';

function BookingForm({ onSubmit, isLoading, error }) {
  return (
    <div>
      <button onClick={onSubmit} disabled={isLoading}>
        {isLoading ? 'Confirming...' : 'Confirm Booking'}
      </button>
      {error && <div>An error occurred: {error.message}</div>}
    </div>
  );
}

export default BookingForm;
