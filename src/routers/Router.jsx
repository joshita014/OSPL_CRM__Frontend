import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


const Router = () => {
    return (
      
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          {/* Add more routes if needed */}
          </Routes>
      
    );
  };
  
  export default Router;
  
