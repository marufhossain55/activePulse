import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  const isAdmin = true;
  return (
    <div className="flex container mx-auto">
      <div className="w-64 min-h-screen bg-emerald-500 p-4">
        <ul className="text-green-100 space-y-2">
          <li>
            <NavLink
              to="allTrainers"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              All Trainers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="appliedTrainer"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Applied Trainer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="balance"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Balance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addNewClass"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Add New Class
            </NavLink>
          </li>
          <li>
            <NavLink
              to="manageSlots"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Manage Slots
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addNewSlot"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Add New Slot
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addNewForum"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Add New Forum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="activityLogPage"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Activity Log Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="profile"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="recommendedClasses"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Recommended Classes
            </NavLink>
          </li>
          <div class="border-t border-gray-300 w-full my-4"></div>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-4 hover:bg-green-500 hover:text-white rounded transition duration-300"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default DashBoard;
