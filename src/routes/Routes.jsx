import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/home/Home';
import Login from '../pages/shared/Login';
import Register from '../pages/Register';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
    ],
  },
]);
