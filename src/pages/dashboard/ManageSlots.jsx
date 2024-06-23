// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// const ManageSlots = () => {
//   const axiosSecure = useAxiosSecure();
//   const [slots, setSlots] = useState([]);
//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const res = await axiosSecure.get('/getAllSlots', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access-token')}`,
//           },
//         });
//         setSlots(res.data);
//       } catch (error) {
//         console.error('Error fetching slots:', error);
//       }
//     };

//     fetchSlots();
//   }, [axiosSecure]);

//   const handleDeleteSlot = async (slotId) => {
//     const confirmed = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this slot!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     });

//     if (confirmed.isConfirmed) {
//       try {
//         const res = await axiosSecure.delete(`/deleteSlot/${slotId}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access-token')}`,
//           },
//         });
//         if (res.data.deletedCount === 1) {
//           Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Slot deleted successfully',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           setSlots(slots.filter((slot) => slot._id !== slotId));
//         }
//       } catch (error) {
//         console.error('Error deleting slot:', error);
//       }
//     }
//   };
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-center text-3xl font-bold mt-20">Manage Slots</h1>
//       <div className="mt-8">
//         <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Slot Name
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Slot Time
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Days
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Classes
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {slots?.map((slot) => (
//               <tr key={slot._id} className="hover:bg-gray-50 border-b">
//                 <td className="py-2 px-4">{slot?.slotName}</td>
//                 <td className="py-2 px-4">{slot?.slotTime}</td>
//                 <td className="py-2 px-4">{slot?.days?.join(', ')}</td>
//                 <td className="py-2 px-4">
//                   {slot?.classes
//                     ?.map((classItem) => classItem?.name)
//                     .join(', ')}
//                 </td>
//                 <td className="py-2 px-4">
//                   <button
//                     className="text-red-500 hover:text-red-700 focus:outline-none"
//                     onClick={() => handleDeleteSlot(slot._id)}
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path d="M6 18L18 6M6 6l12 12"></path>
//                     </svg>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default ManageSlots;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

// const ManageSlots = () => {
//   const axiosSecure = useAxiosSecure();
//   const [slots, setSlots] = useState([]);

//   useEffect(() => {
//     const fetchSlots = async () => {
//       try {
//         const res = await axiosSecure.get('/getAllSlots', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access-token')}`,
//           },
//         });
//         setSlots(res.data);
//       } catch (error) {
//         console.error('Error fetching slots:', error);
//       }
//     };

//     fetchSlots();
//   }, [axiosSecure]);

//   const handleDeleteSlot = async (slot) => {
//     console.log(slot);
//     const confirmed = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this slot!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     });

//     if (confirmed.isConfirmed) {
//       try {
//         const res = await axiosSecure.delete(`/deleteSlot/${slot._id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access-token')}`,
//           },
//         });
//         if (res.data.deletedCount === 1) {
//           Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Slot deleted successfully',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           setSlots(slots.filter((slot) => slot._id !== slotId));
//         }
//       } catch (error) {
//         console.error('Error deleting slot:', error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-center text-3xl font-bold mt-20">Manage Slots</h1>
//       <div className="mt-8">
//         <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Slot Name
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Slot Time
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Days
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Classes
//               </th>
//               <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {slots?.map((slot) => (
//               <tr key={slot?._id} className="hover:bg-gray-50 border-b">
//                 <td className="py-2 px-4">{slot?.slotName}</td>
//                 <td className="py-2 px-4">{slot?.slotTime}</td>
//                 <td className="py-2 px-4">{slot?.days?.join(', ')}</td>
//                 <td className="py-2 px-4">
//                   {slot?.classes?.map((classItem) => classItem).join(', ')}
//                 </td>
//                 <td className="py-2 px-4">
//                   <button
//                     className="text-red-500 hover:text-red-700 focus:outline-none"
//                     onClick={() => handleDeleteSlot(slot)}
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path d="M6 18L18 6M6 6l12 12"></path>
//                     </svg>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageSlots;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageSlots = () => {
  const axiosSecure = useAxiosSecure();
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await axiosSecure.get('/getAllSlots', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        });
        setSlots(res.data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, [axiosSecure]);

  const handleDeleteSlot = async (slot) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this slot!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/deleteSlot/${slot._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        });
        if (res.data.deletedCount === 1) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Slot deleted successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          // Update slots state after deletion
          const updatedSlots = slots.filter((s) => s._id !== slot._id);
          setSlots(updatedSlots);
        }
      } catch (error) {
        console.error('Error deleting slot:', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mt-20">Manage Slots</h1>
      <div className="mt-8">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
                Slot Name
              </th>
              <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
                Slot Time
              </th>
              <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
                Days
              </th>
              <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
                Classes
              </th>
              <th className="py-2 px-4 text-left uppercase font-semibold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {slots?.map((slot) => (
              <tr key={slot?._id} className="hover:bg-gray-50 border-b">
                <td className="py-2 px-4">{slot?.slotName}</td>
                <td className="py-2 px-4">{slot?.slotTime}</td>
                <td className="py-2 px-4">{slot?.days?.join(', ')}</td>
                <td className="py-2 px-4">
                  {slot?.classes?.map((classItem) => classItem).join(', ')}
                </td>
                <td className="py-2 px-4">
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleDeleteSlot(slot)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSlots;
