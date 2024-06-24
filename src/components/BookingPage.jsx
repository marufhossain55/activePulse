import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic.jsx';
import SlotDetails from './SlotDetails.jsx';
import BookingForm from './BookingForm.jsx';

function BookingPage() {
  const { trainerId, slotId } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: slot,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['slot', trainerId, slotId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/slots/${trainerId}/${slotId}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: () => {
      return useAxiosPublic.post(`/api/book/${trainerId}/${slotId}`);
    },
    onSuccess: (data) => {
      console.log('Booking confirmed:', data);
      // Handle success (e.g., show a success message, redirect)
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Book a Session</h1>
      <SlotDetails slot={slot} />
      <BookingForm
        onSubmit={() => mutation.mutate()}
        isLoading={mutation.isLoading}
        error={mutation.error}
      />
    </div>
  );
}

export default BookingPage;
