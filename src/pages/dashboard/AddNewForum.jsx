// import useAuth from '../../hooks/useAuth';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

// function AddNewForum() {
//   const { user } = useAuth();
//   console.log(user);
//   const axiosSecure = useAxiosSecure();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const title = e.target.title.value;
//     const content = e.target.content.value;
//     const name = user?.displayName;
//     const email = user?.email;
//     const postInfo = { title, name, content, email };
//     console.log(postInfo);

//     const res = await axiosSecure.post('/forumData', postInfo);
//     console.log(res);
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Create New Forum Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="title"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="content"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Content
//           </label>
//           <textarea
//             id="content"
//             name="content"
//             rows="6"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddNewForum;

// import useAuth from '../../hooks/useAuth';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import Swal from 'sweetalert2';

// function AddNewForum() {
//   const { user } = useAuth();
//   console.log(user);
//   const axiosSecure = useAxiosSecure();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const title = e.target.title.value;
//     const content = e.target.content.value;
//     const name = user?.displayName;
//     const email = user?.email;
//     const postInfo = { title, name, content, email };
//     console.log(postInfo);

//     const res = await axiosSecure.post('/forumData', postInfo);
//     console.log(res.data.insertedId);

//     // Add SweetAlert notification for successful submission
//     if (res.data.insertedId) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Post Created!',
//         text: 'Your forum post has been successfully created.',
//         confirmButtonColor: '#3085d6',
//       });
//       e.target.reset(); // Optional: Reset the form after successful submission
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Create New Forum Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="title"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="content"
//             className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Content
//           </label>
//           <textarea
//             id="content"
//             name="content"
//             rows="6"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddNewForum;

import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

function AddNewForum() {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const name = user?.displayName;
    const email = user?.email;
    const postInfo = { title, name, content, email };
    console.log(postInfo);

    try {
      const res = await axiosSecure.post('/forumData', postInfo);
      console.log(res.data.insertedId);

      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Post Created!',
          text: 'Your forum post has been successfully created.',
          confirmButtonColor: '#3085d6',
        });
        e.target.reset(); // Optional: Reset the form after successful submission
      }
    } catch (error) {
      console.error('Error creating post:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Unable to create post.',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create New Forum Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AddNewForum;
