import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w64 min-h-full bg-green-500">
        <ul className="menu">
          <li>
            <NavLink to="allTrainers">All Trainers</NavLink>
          </li>
          <li>
            <NavLink to="appliedTrainer">Applied Trainer</NavLink>
          </li>

          <li>
            <NavLink to="balance">Balance</NavLink>
          </li>
          <li>
            <NavLink to="addNewClass">Add New Class</NavLink>
          </li>
          <li>
            <NavLink to="manageSlots">Manage Slots</NavLink>
          </li>
          <li>
            <NavLink to="addNewSlot">Add New Slot</NavLink>
          </li>
          <li>
            <NavLink to="addNewForum">Add New Forum</NavLink>
          </li>
          <li>
            <NavLink to="activityLogPage">Activity Log Page</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="recommendedClasses">Recommended Classes</NavLink>
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
