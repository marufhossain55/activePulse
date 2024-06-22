import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllTrainers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allTrainers } = useQuery({
    queryKey: ['allTrainers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allTrainers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      });
      return res.data;
    },
  });
  console.log(allTrainers);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-20">All Trainers</h1>
      <div className="container mx-auto p-6">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">SN</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {allTrainers?.map((trainer, idx) => (
              <tr
                key={trainer._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{idx + 1}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>{trainer.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>{trainer.email}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                    {trainer.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllTrainers;
