import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login');
  return (
    <div className="font-RaleWay">
      <div>{noHeaderFooter || <NavBar />}</div>
      <div className="container mx-auto min-h-[calc(100vh-330px)]">
        <Outlet />
      </div>
      <div>{noHeaderFooter || <Footer />}</div>
    </div>
  );
};

export default Root;
