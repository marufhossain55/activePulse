// import React, { useState } from 'react';
// import Select from 'react-select';
// import useAuth from '../../hooks/useAuth';
// import useAxiosPublic from '../../hooks/useAxiosPublic';

// const days = [
//   { value: 'sun', label: 'Sunday' },
//   { value: 'mon', label: 'Monday' },
//   { value: 'tue', label: 'Tuesday' },
//   { value: 'wed', label: 'Wednesday' },
//   { value: 'thu', label: 'Thursday' },
//   { value: 'fri', label: 'Friday' },
//   { value: 'sat', label: 'Saturday' },
// ];

// const fitnessSkills = [
//   'Weight Training',
//   'Cardio',
//   'Yoga',
//   'Pilates',
//   'CrossFit',
//   'HIIT',
//   'Cycling',
//   'Swimming',
//   'Nutrition Coaching',
//   'Martial Arts',
// ];
// const BecomeATrainer = () => {
//   const axiosPublic = useAxiosPublic();
//   const { user } = useAuth();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: user.email,
//     age: '',
//     profileImage: '',
//     skills: [],
//     availableDays: [],
//     availableTime: '',
//     otherInfo: '',
//     status: 'pending',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSkillChange = (e) => {
//     const skill = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       skills: e.target.checked
//         ? [...prev.skills, skill]
//         : prev.skills.filter((s) => s !== skill),
//     }));
//   };

//   const handleDaysChange = (selectedOptions) => {
//     setFormData({ ...formData, availableDays: selectedOptions });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Here you would typically send the formData to your backend
//     console.log(formData);
//     try {
//       const response = await axiosPublic.post('/appliedForTrainer', formData);
//       console.log('Application submitted successfully:', response.data);
//       // Handle success (e.g., show a success message, reset form, redirect)
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       // Handle error (e.g., show error message to user)
//     }
//     // Reset form or show success message
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>

//       <div className="mb-4">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           readOnly
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="age"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Age
//         </label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formData.age}
//           onChange={handleInputChange}
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="profileImage"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Profile Image URL
//         </label>
//         <input
//           type="text"
//           id="profileImage"
//           name="profileImage"
//           value={formData.profileImage}
//           onChange={handleInputChange}
//           placeholder="Enter image URL"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>

//       <div className="mb-4">
//         <span className="block text-sm font-medium text-gray-700 mb-2">
//           Fitness Skills
//         </span>
//         <div className="grid grid-cols-2 gap-2">
//           {fitnessSkills.map((skill) => (
//             <label key={skill} className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 value={skill}
//                 checked={formData.skills.includes(skill)}
//                 onChange={handleSkillChange}
//                 className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//               <span className="ml-2 text-sm">{skill}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="availableDays"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Available Days
//         </label>
//         <Select
//           isMulti
//           name="availableDays"
//           options={days}
//           className="basic-multi-select"
//           classNamePrefix="select"
//           value={formData.availableDays}
//           onChange={handleDaysChange}
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="availableTime"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Available Time
//         </label>
//         <input
//           type="text"
//           id="availableTime"
//           name="availableTime"
//           value={formData.availableTime}
//           onChange={handleInputChange}
//           placeholder="e.g., 9 AM - 5 PM"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>

//       <div className="mb-4">
//         <label
//           htmlFor="otherInfo"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Other Info
//         </label>
//         <textarea
//           id="otherInfo"
//           name="otherInfo"
//           value={formData.otherInfo}
//           onChange={handleInputChange}
//           rows="3"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         ></textarea>
//       </div>

//       <div className="mt-6">
//         <button
//           type="submit"
//           className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Apply
//         </button>
//       </div>
//     </form>
//   );
// };
// export default BecomeATrainer;
import React, { useState } from 'react';
import Select from 'react-select';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const days = [
  { value: 'sun', label: 'Sunday' },
  { value: 'mon', label: 'Monday' },
  { value: 'tue', label: 'Tuesday' },
  { value: 'wed', label: 'Wednesday' },
  { value: 'thu', label: 'Thursday' },
  { value: 'fri', label: 'Friday' },
  { value: 'sat', label: 'Saturday' },
];

const fitnessSkills = [
  'Weight Training',
  'Cardio',
  'Yoga',
  'Pilates',
  'CrossFit',
  'HIIT',
  'Cycling',
  'Swimming',
  'Nutrition Coaching',
  'Martial Arts',
];

const BecomeATrainer = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: user.email,
    age: '',
    profileImage: '',
    skills: [],
    availableDays: [],
    availableTime: '',
    otherInfo: '',
    status: 'pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setFormData((prev) => ({
      ...prev,
      skills: e.target.checked
        ? [...prev.skills, skill]
        : prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleDaysChange = (selectedOptions) => {
    setFormData({ ...formData, availableDays: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPublic.post('/appliedForTrainer', formData);
      console.log('Application submitted successfully:', response.data);

      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        text: 'Your trainer application has been successfully submitted.',
        confirmButtonColor: '#3085d6',
      });

      setFormData({
        name: '',
        email: user.email,
        age: '',
        profileImage: '',
        skills: [],
        availableDays: [],
        availableTime: '',
        otherInfo: '',
        status: 'pending',
      });
    } catch (error) {
      console.error('Error submitting application:', error);

      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your application. Please try again.',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="profileImage"
          className="block text-sm font-medium text-gray-700"
        >
          Profile Image URL
        </label>
        <input
          type="text"
          id="profileImage"
          name="profileImage"
          value={formData.profileImage}
          onChange={handleInputChange}
          placeholder="Enter image URL"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Fitness Skills
        </span>
        <div className="grid grid-cols-2 gap-2">
          {fitnessSkills.map((skill) => (
            <label key={skill} className="inline-flex items-center">
              <input
                type="checkbox"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleSkillChange}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="availableDays"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Available Days
        </label>
        <Select
          isMulti
          name="availableDays"
          options={days}
          className="basic-multi-select"
          classNamePrefix="select"
          value={formData.availableDays}
          onChange={handleDaysChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="availableTime"
          className="block text-sm font-medium text-gray-700"
        >
          Available Time
        </label>
        <input
          type="text"
          id="availableTime"
          name="availableTime"
          value={formData.availableTime}
          onChange={handleInputChange}
          placeholder="e.g., 9 AM - 5 PM"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="otherInfo"
          className="block text-sm font-medium text-gray-700"
        >
          Other Info
        </label>
        <textarea
          id="otherInfo"
          name="otherInfo"
          value={formData.otherInfo}
          onChange={handleInputChange}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default BecomeATrainer;
