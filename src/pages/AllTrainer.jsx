import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import useAxiosPublic from '../hooks/useAxiosPublic';
import TrainerCard from '../components/TrainerCard';

const AllTrainer = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: publicAllTrainers,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['publicAllTrainers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/api/trainers');
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Our Trainers</h1>
      {publicAllTrainers?.map((trainer) => (
        <TrainerCard key={trainer._id} trainer={trainer} />
      ))}
      <Link to="/become-trainer">Become a Trainer</Link>
    </div>
  );
};

export default AllTrainer;
