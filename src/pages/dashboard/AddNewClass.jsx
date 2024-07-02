// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

// const AddNewClass = () => {
//   const axiosSecure = useAxiosSecure();
//   const handleFromSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const image = form.image.value;
//     const details = form.details.value;
//     const instructor = form.instructor.value;
//     const level = form.level.value;
//     const info = { name, image, details, instructor, level };
//     // console.log(info);
//     try {
//       const { data } = await axiosSecure.post('/addedClass', info);
//       console.log(data);
//       if (data.insertedId) {
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'class added',
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//       form.reset();
//     } catch (err) {
//       console.log('err msg', err);
//     }
//   };
//   return (
//     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
//       <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
//         Add a new class
//       </h2>

//       <form onSubmit={handleFromSubmit}>
//         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//           <div>
//             <label className="text-gray-700 dark:text-gray-200">Name</label>
//             <input
//               name="name"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
//             />
//           </div>
//           <div>
//             <label className="text-gray-700 dark:text-gray-200">image</label>
//             <input
//               name="image"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
//             />
//           </div>
//           <div>
//             <label className="text-gray-700 dark:text-gray-200">details</label>
//             <input
//               name="details"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
//             />
//           </div>
//           <div>
//             <label className="text-gray-700 dark:text-gray-200">
//               instructor
//             </label>
//             <input
//               name="instructor"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
//             />
//           </div>

//           <div>
//             <label className="text-gray-700 dark:text-gray-200">level</label>
//             <select
//               name="level"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
//             >
//               <option value="beginner">beginner</option>
//               <option
//                 value="intermediate
// "
//               >
//                 intermediate
//               </option>
//               <option value="Advanced">Advanced</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex justify-end mt-6">
//           <button
//             type="submit"
//             className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };
// export default AddNewClass;

import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddNewClass = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(['']);
  const [trainers, setTrainers] = useState([
    { id: Date.now(), name: '', image: '' },
  ]);

  const handleDetailsChange = (index, value) => {
    const newDetails = [...details];
    newDetails[index] = value;
    setDetails(newDetails);
  };

  const addDetailField = () => {
    setDetails([...details, '']);
  };

  const handleTrainerChange = (index, field, value) => {
    const newTrainers = [...trainers];
    newTrainers[index][field] = value;
    setTrainers(newTrainers);
  };

  const addTrainerField = () => {
    setTrainers([...trainers, { id: Date.now(), name: '', image: '' }]);
  };

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;

    if (
      !name ||
      !description ||
      !image ||
      details.some((detail) => !detail) ||
      trainers.some((trainer) => !trainer.name || !trainer.image)
    ) {
      Swal.fire('Error', 'Please fill all fields', 'error');
      setLoading(false);
      return;
    }

    const classInfo = {
      name,
      description,
      image,
      details: details.filter((detail) => detail.trim() !== ''),
      trainers: trainers.map(({ id, ...rest }) => rest), // Remove the temporary id
    };

    try {
      const { data } = await axiosSecure.post('/addedClass', classInfo);
      if (data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        setDetails(['']);
        setTrainers([{ id: Date.now(), name: '', image: '' }]);
      }
    } catch (err) {
      console.error('Error adding class:', err);
      Swal.fire('Error', 'Failed to add class. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add a new class
      </h2>

      <form onSubmit={handleFromSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200">Name</label>
            <input
              name="name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-gray-700 dark:text-gray-200">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            ></textarea>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-gray-700 dark:text-gray-200">Details</label>
          {details.map((detail, index) => (
            <div key={index} className="flex mt-2">
              <input
                type="text"
                value={detail}
                onChange={(e) => handleDetailsChange(index, e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {index === details.length - 1 && (
                <button
                  type="button"
                  onClick={addDetailField}
                  className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="text-gray-700 dark:text-gray-200">Trainers</label>
          {trainers.map((trainer, index) => (
            <div key={trainer.id} className="grid grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                placeholder="Trainer Name"
                value={trainer.name}
                onChange={(e) =>
                  handleTrainerChange(index, 'name', e.target.value)
                }
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <input
                type="text"
                placeholder="Trainer Image URL"
                value={trainer.image}
                onChange={(e) =>
                  handleTrainerChange(index, 'image', e.target.value)
                }
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTrainerField}
            className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Add Trainer
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:bg-gray-400"
          >
            {loading ? 'Adding...' : 'Add Class'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNewClass;
