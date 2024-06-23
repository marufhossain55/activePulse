import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ActivityLogPage = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allAppliedTrainer, refetch } = useQuery({
    queryKey: ['allAppliedTrainer'],
    queryFn: async () => {
      const res = await axiosSecure.get('/appliedForTrainer');
      return res.data;
    },
  });
  console.log(allAppliedTrainer);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mt-14 mb-14">
        Activity Log
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">SN</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {allAppliedTrainer?.map((application, idx) => (
              <tr
                key={application._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{idx + 1}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>{application.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>{application.email}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span
                      className={`${
                        application.status === 'Pending'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                    >
                      {application.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    {application.status === 'Rejected' && (
                      <span className="border border-emerald-600 bg-emerald-400 px-4 py-2 rounded cursor-pointer">
                        <FaEye size={24} />
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ActivityLogPage;
