import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 

const Layout = () => {
  return (
    <>
      <header className='header'>
        <div className="box-logo">
          <Link className="logo" to='/'>BOX-FILM.home</Link>
        </div>
      </header>
      <Outlet/>
    </>
  );
};

export {Layout};