import React from 'react';
import HeaderComponent from '../../../components/HeaderComponent';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector(state => state.product.user);
  console.log("user:",user);
  return (
    <>
      <HeaderComponent title={`Welcome ${user?.username}!`}/>
    </>
  )
}

export default Dashboard
