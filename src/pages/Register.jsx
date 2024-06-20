import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, fullName, image } = data;
    if (password.length < 6) {
      return alert('use must 6 digit');
    }
    if (!/[A-Z]/.test(password)) {
      return alert('You Must use an uppercase in the password');
    }

    if (!/[a-z]/.test(password)) {
      return alert('You Must use a Lowercase in the password');
    }
    //create user and update profile
    createUser(email, password).then(() => {
      updateUserProfile(fullName, image).then(() => {
        // Navigate(from);
      });
      alert('registration successful');
    });
  };
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-center items-center gap-20">
      {/* <div className="lg:block hidden pt-8">
        <img className="h-72 " src={registerLogo} alt="" />
      </div> */}
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              sign up
            </a>
          </div>

          <div className="relative flex items-center mt-8">
            <div>
              <span className="absolute mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                name="name"
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="name"
                {...register('FullName', { required: true })}
              />
              {errors.FullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="relative flex items-center mt-6">
            <div className="flex-col items-center">
              <span className="absolute mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                name="email"
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="relative flex items-center mt-4">
            <div className="flex-col items-center">
              <span className="absolute mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </span>
              <input
                name="image"
                type="text"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="photo URL"
                {...register('image')}
              />
              {errors.image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="relative flex items-center mt-4">
            <div className="flex-col items-center">
              <span className="absolute mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                name="password"
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Register;
