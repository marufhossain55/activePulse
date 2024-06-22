import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllNewsletterSubscribers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: newsletterSubscribers } = useQuery({
    queryKey: ['newsletterSubscribers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/subcribeNewsLetter', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      });
      return res.data;
    },
  });
  console.log(newsletterSubscribers);
  return (
    // <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    //   <h2 className="text-2xl font-bold  text-gray-800 text-center mb-16">
    //     Newsletter Subscribers
    //   </h2>
    //   <div className="overflow-x-auto bg-white rounded-lg shadow">
    //     <table className="min-w-full divide-y divide-gray-200">
    //       <thead className="bg-gray-50">
    //         <tr>
    //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //             SN
    //           </th>
    //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //             Name
    //           </th>
    //           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //             Email
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody className="bg-white divide-y divide-gray-200">
    //         {newsletterSubscribers?.map((subscriber, index) => (
    //           <tr
    //             key={subscriber._id}
    //             className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
    //           >
    //             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    //               {index + 1}
    //             </td>
    //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //               {subscriber.name}
    //             </td>
    //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //               <a
    //                 href={`mailto:${subscriber.email}`}
    //                 className="text-indigo-600 hover:text-indigo-900"
    //               >
    //                 {subscriber.email}
    //               </a>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    //   <p className="mt-4 text-sm text-gray-600">
    //     Total subscribers: {newsletterSubscribers?.length}
    //   </p>
    // </div>
    <div>
      <h1 className="text-center text-3xl font-bold mt-20">All Subscriberss</h1>
      <div className="container mx-auto p-6">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">SN</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {newsletterSubscribers?.map((Subscribers, idx) => (
              <tr
                key={Subscribers._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{idx + 1}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>{Subscribers.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>{Subscribers.email}</span>
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
export default AllNewsletterSubscribers;
