// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import TrainerCard from '../components/allTrainers/TrainerCard';

// import useAxiosPublic from '../hooks/useAxiosPublic';
// import TrainerCard from '../components/TrainerCard';

// const AllTrainer = () => {
//   const axiosPublic = useAxiosPublic();

//   const {
//     data: publicAllTrainers,
//     refetch,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ['publicAllTrainers'],
//     queryFn: async () => {
//       const res = await axiosPublic.get('/api/trainers');
//       return res.data;
//     },
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>An error occurred: {error.message}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         Our Trainers
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {publicAllTrainers?.map((trainer) => (
//           <TrainerCard key={trainer._id} trainer={trainer} />
//         ))}
//       </div>
//       <div className="mt-12 text-center">
//         <Link
//           to="/become-trainer"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
//         >
//           Become a Trainer
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllTrainer;
const AllTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const { data: trainers, refetch } = useQuery({
    queryKey: ['trainers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/trainers');
      return res.data;
    },
  });
  // console.log(trainers);
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
      {trainers?.map((trainer) => (
        <TrainerCard trainer={trainer} />
      ))}
    </div>
  );
};
export default AllTrainer;
