import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/home/Home';
import Login from '../pages/shared/Login';
import Register from '../pages/Register';
import AllTrainer from '../pages/AllTrainer';
import AllClasses from '../pages/AllClasses';
import ErrorPage from '../pages/ErrorPage';
import Forums from '../pages/Forums';

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
]);
