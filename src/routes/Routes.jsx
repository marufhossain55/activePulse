import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/home/Home';
import Login from '../pages/shared/Login';
import Register from '../pages/Register';
import AllTrainer from '../pages/AllTrainer';
import AllClasses from '../pages/AllClasses';
import ErrorPage from '../pages/ErrorPage';
import Forums from '../pages/Forums';
import DashBoard from '../layouts/DashBoard';
import AllTrainers from '../pages/dashboard/AllTrainers';
import ManageSlots from '../pages/dashboard/ManageSlots';
import AppliedTrainer from '../pages/dashboard/AppliedTrainer';
import Balance from '../pages/dashboard/Balance';
import AddNewClass from '../pages/dashboard/AddNewClass';
import AddNewSlot from '../pages/dashboard/AddNewSlot';
import ActivityLogPage from '../pages/dashboard/ActivityLogPage';
import Profile from '../pages/dashboard/Profile';
import RecommendedClasses from '../pages/dashboard/RecommendedClasses';
import AllNewsletterSubscribers from '../pages/dashboard/AllNewsletterSubscribers';
import AddNewForum from '../pages/dashboard/AddNewForum';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      { path: 'register', element: <Register /> },
      {
        path: 'allTrainer',
        element: <AllTrainer />,
      },
      {
        path: 'allClasses',
        element: <AllClasses />,
      },
      {
        path: 'forums',
        element: <Forums />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'allNewsletterSubscribers',
        element: <AllNewsletterSubscribers />,
      },

      { path: 'allTrainers', element: <AllTrainers /> },

      {
        path: 'appliedTrainer',
        element: <AppliedTrainer />,
      },
      {
        path: 'balance',
        element: <Balance />,
      },
      {
        path: 'addNewClass',
        element: <AddNewClass />,
      },
      {
        path: 'manageSlots',
        element: <ManageSlots />,
      },
      {
        path: 'addNewSlot',
        element: <AddNewSlot />,
      },
      {
        path: 'addNewForum',
        element: <AddNewForum />,
      },
      {
        path: 'activityLogPage',
        element: <ActivityLogPage />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'recommendedClasses',
        element: <RecommendedClasses />,
      },
    ],
  },
]);
