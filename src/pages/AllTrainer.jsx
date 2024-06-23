const AllTrainer = () => {
  const { data: allTrainers, refetch } = useQuery({
    queryKey: ['allTrainers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allTrainers');
      return res.data;
    },
  });

  const handleDeleteTrainer = async (trainer) => {
    // console.log(trainer);
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "This will change the trainer's role to member!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change role!',
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/allTrainers/${trainer._id}`);
        if (res.data.modifiedCount > 0) {
          await refetch();
          Swal.fire({
            title: 'Role Changed!',
            text: 'The trainer has been changed to a member.',
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'No Changes',
            text: 'The trainer role was not changed.',
            icon: 'info',
          });
        }
      }
    } catch (error) {
      console.error('Error changing trainer role:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while changing the trainer role.',
        icon: 'error',
      });
    }
  };

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
              <th className="py-3 px-6 text-left">Action</th>
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
                <td className="py-3 px-6 text-left">
                  <button
                    onClick={() => handleDeleteTrainer(trainer)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Change to Member
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
};
export default AllTrainer;
