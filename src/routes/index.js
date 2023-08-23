import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from '../components/Protected';
import Login from './page/Login';
import Error404 from './page/Error404';
import Dashboard from './page/Dashboard';
import Customers from './page/Customers';

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Protected component={Login} />} />
        <Route path="/" element={<Protected component={Dashboard} />} />
        <Route path="/cutsmoreList" element={<Protected component={Customers} />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage
