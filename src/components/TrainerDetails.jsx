import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';

import useAxiosPublic from '../hooks/useAxiosPublic.jsx';
import TrainerInfo from './TrainerInfo.jsx';
import AvailableSlots from './AvailableSlots.jsx';

function TrainerDetails() {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: trainer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['trainer', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/trainers/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <TrainerInfo trainer={trainer} />
      <AvailableSlots slots={trainer.availableSlots} trainerId={trainer._id} />
      <Link to="/become-trainer">Become a Trainer</Link>
    </div>
  );
}

export default TrainerDetails;
