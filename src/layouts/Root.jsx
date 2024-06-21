import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar';

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login');
  return (
    <div className="font-RaleWay">
      <div>{noHeaderFooter || <NavBar />}</div>
      <Outlet />
    </div>
  );
};

export default Root;
