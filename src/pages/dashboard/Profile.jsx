import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div class="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 mx-auto mt-16">
      <div class="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
        <img
          src={user?.photoURL}
          alt={user?.photoURL}
          class="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500"
        />
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <h2 class="text-2xl font-semibold">{user?.displayName}</h2>
          <span class="text-sm text-gray-400 dark:text-gray-600">Member</span>
        </div>
        <div class="space-y-1">
          <span class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              aria-label="Email address"
              class="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
              ></path>
            </svg>
            <span class="text-gray-400 dark:text-gray-600">{user?.email}</span>
          </span>
          <span class="flex items-center space-x-2">
            <span class="text-gray-400 dark:text-gray-600">{`last login: ${user.metadata.lastSignInTime}`}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
