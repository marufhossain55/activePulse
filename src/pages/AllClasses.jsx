// const AllClasses = () => {
//   return <div>AllClasses</div>;
// };
// export default AllClasses;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import useAxiosPublic from '../hooks/useAxiosPublic';

// const CLASSES_PER_PAGE = 6;

// const AllClasses = () => {
//   const axiosPublic = useAxiosPublic();
//   const [classes, setClasses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         setLoading(true);
//         const response = await axiosPublic.get('/addedClass');
//         setClasses(response.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch classes. Please try again later.');
//         console.error('Error fetching classes:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClasses();
//   }, []);

//   const indexOfLastClass = currentPage * CLASSES_PER_PAGE;
//   const indexOfFirstClass = indexOfLastClass - CLASSES_PER_PAGE;
//   const currentClasses = classes.slice(indexOfFirstClass, indexOfLastClass);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">All Classes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {currentClasses.map((classItem) => (
//           <div
//             key={classItem.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <img
//               src={classItem.image}
//               alt={classItem.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-2">{classItem.name}</h2>
//               <p className="text-gray-600 mb-4">{classItem.description}</p>
//               <div className="mb-4">
//                 <h3 className="font-semibold mb-2">Additional Details:</h3>
//                 <ul className="list-disc list-inside">
//                   {classItem.details.map((detail, index) => (
//                     <li key={index}>{detail}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2">Trainers:</h3>
//                 <div className="flex flex-wrap -mx-1">
//                   {classItem.trainers.slice(0, 5).map((trainer) => (
//                     <Link
//                       key={trainer.id}
//                       to={`/trainer/${trainer.id}`}
//                       className="mx-1 mb-2"
//                     >
//                       <img
//                         src={trainer.image}
//                         alt={trainer.name}
//                         className="w-10 h-10 rounded-full object-cover"
//                         title={trainer.name}
//                       />
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 flex justify-center">
//         {Array.from(
//           { length: Math.ceil(classes.length / CLASSES_PER_PAGE) },
//           (_, i) => (
//             <button
//               key={i}
//               onClick={() => paginate(i + 1)}
//               className={`mx-1 px-3 py-1 rounded ${
//                 currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {i + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllClasses;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const CLASSES_PER_PAGE = 6;

const AllClasses = () => {
  const axiosPublic = useAxiosPublic();
  const [classes, setClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get('/addedClass');
        setClasses(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch classes. Please try again later.');
        console.error('Error fetching classes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const indexOfLastClass = currentPage * CLASSES_PER_PAGE;
  const indexOfFirstClass = indexOfLastClass - CLASSES_PER_PAGE;

  const filteredClasses = classes.filter((classItem) =>
    classItem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentClasses = filteredClasses.slice(
    indexOfFirstClass,
    indexOfLastClass
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Classes</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search classes by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentClasses.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{classItem.name}</h2>
              <p className="text-gray-600 mb-4">{classItem.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Additional Details:</h3>
                <ul className="list-disc list-inside">
                  {classItem.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Trainers:</h3>
                <div className="flex flex-wrap -mx-1">
                  {classItem.trainers.slice(0, 5).map((trainer) => (
                    <Link
                      key={trainer.id}
                      to={`/trainer/${trainer.id}`}
                      className="mx-1 mb-2"
                    >
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-10 h-10 rounded-full object-cover"
                        title={trainer.name}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {Array.from(
          { length: Math.ceil(filteredClasses.length / CLASSES_PER_PAGE) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AllClasses;
