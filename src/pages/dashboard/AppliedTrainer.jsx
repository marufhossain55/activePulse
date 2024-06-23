import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEye, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AppliedTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const { data: applications } = useQuery({
    queryKey: ['application'],
    queryFn: async () => {
      const res = await axiosSecure.get('/applyForTrainer', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      });
      return res.data;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const openModal = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
  };

  const confirmTrainer = async (selectedApplication) => {
    console.log(selectedApplication.email);
    try {
      const res = await axiosSecure.post(
        `/confirmTrainer/${selectedApplication.email}`
      );
      console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'trainer accepted',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      closeModal();
      // Optionally, refetch applications or update the state
    } catch (error) {
      console.error('Error confirming trainer:', error);
    }
  };

  const rejectTrainer = async (id) => {
    try {
      await axiosSecure.post(`/reject-trainer/${id}`);
      closeModal();
      // Optionally, refetch applications or update the state
    } catch (error) {
      console.error('Error rejecting trainer:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-20">Applied Trainer</h1>
      <div className="container mx-auto p-6">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">SN</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {applications?.map((application, idx) => (
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
                      className="border border-emerald-600 bg-emerald-400 px-4 py-2 rounded cursor-pointer"
                      onClick={() => openModal(application)}
                    >
                      <FaEye size={24} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-lg relative transform transition-transform duration-300 ease-in-out scale-95">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-2">
              {selectedApplication.name}
            </h2>
            <p className="text-gray-600 mb-4">{selectedApplication.email}</p>
            {/* Add other application details here if needed */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => confirmTrainer(selectedApplication)}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
              >
                Confirm
              </button>
              <button
                onClick={() => rejectTrainer(selectedApplication._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedTrainer;
