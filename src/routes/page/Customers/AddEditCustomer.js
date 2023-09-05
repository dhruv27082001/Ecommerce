import { Box } from '@mui/material';
import React, { useState } from 'react';
import InputComponent from '../../../components/InputComponent';
import ButtonComponent from '../../../components/ButtonComponent';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleCancel = () => {
    navigate('/customerList');
  };

  const handleSubmit = () => {
    // Handle form submission here, either adding or editing a customer
    if (id) {
      // Editing logic
      // Use the values and the id to update the customer
    } else {
      // Adding logic
      // Use the values to add a new customer
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <InputComponent
        name="Email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
        name="userName"
        label="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputComponent
        name="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputComponent
        name="customerName"
        label="CustomerName"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <InputComponent
        name="city"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <InputComponent
        name="phone"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div sx={{ maxWidth: 400, margin: '0 auto' }}>
        <ButtonComponent
          onClick={handleSubmit}
          title={id ? 'Update Customer' : 'Add Customer'}
          sx={{ marginTop: '1.5%' }}
        />
        <div>
          <ButtonComponent
            onClick={handleCancel}
            title="Cancel"
            sx={{ marginTop: '1.5%' }}
          />
        </div>
      </div>
    </Box>
  );
};

export default AddEditCustomer;
