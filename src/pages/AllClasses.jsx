const AllClasses = () => {
  const axiosSecure = useAxiosSecure();
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const details = form.details.value;
    const instructor = form.instructor.value;
    const level = form.level.value;
    const info = { name, image, details, instructor, level };
    // console.log(info);
    try {
      const { data } = await axiosSecure.post('/addedClass', info);
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'class added',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      form.reset();
    } catch (err) {
      console.log('err msg', err);
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
            <label className="text-gray-700 dark:text-gray-200">image</label>
            <input
              name="image"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">details</label>
            <input
              name="details"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">
              instructor
            </label>
            <input
              name="instructor"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">level</label>
            <select
              name="level"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="beginner">beginner</option>
              <option
                value="intermediate
"
              >
                intermediate
              </option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add
          </button>
        </div>
      </form>
    </section>
};
export default AllClasses;
