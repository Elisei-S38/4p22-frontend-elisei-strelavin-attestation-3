import './Header.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import  NavBar  from '../NavBar/NavBar';
import { Layout } from '../Layout/Layout';

const Header = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<NavBar/>} />
        </Route>
      </Routes>
    </>
  );
};

export default Header;