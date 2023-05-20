import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { addUser,updateUser } from '../Actions/UserActions';
import { Typography, TextField, Button, Container, Box } from '@mui/material';

const Users = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const users = useSelector(state => state.users);
  const [editUserId, setEditUserId] = useState(null); 

  const onSubmit = (data) => {
    console.log(data)
    if (editUserId) {
      dispatch(updateUser({ ...data, _id: editUserId }));
    } else {
      dispatch(addUser(data));
    }
    reset();
    setEditUserId(null);
  };

  const handleEdit = (user) => {
    setEditUserId(user._id);
    reset(user);
  };

  useEffect(() => {
    reset();
    setEditUserId(null);
  }, [users]);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>User Management</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="First Name"
            {...register('first_name', { required: true })}
            error={errors.first_name}
            helperText={errors.first_name && 'First Name is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Middle Name"
            {...register('middle_name')}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            {...register('last_name', { required: true })}
            error={errors.last_name}
            helperText={errors.last_name && 'Last Name is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            {...register('email', { required: true })}
            error={errors.email}
            helperText={errors.email && 'Email is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile"
            {...register('mobile', { required: true })}
            error={errors.mobile}
            helperText={errors.mobile && 'Mobile is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            {...register('password', { required: true })}
            error={errors.password}
            helperText={errors.password && 'Password is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Role"
            {...register('role', { required: true })}
            error={errors.role}
            helperText={errors.role && 'Role is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="PHCID"
            {...register('phcid', { required: true })}
            error={errors.phcid}
            helperText={errors.phcid && 'PHCID is required'}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {editUserId ? 'Update User' : 'Add User'}
          </Button>
        </form>
        {/* <Box mt={4}>
          <Typography variant="h5" gutterBottom>User List</Typography>
          {users.map((user) => (
            <Box key={user._id} display="flex" justifyContent="space-between" alignItems="center">
              <Typography>{user.first_name} {user.last_name}</Typography>
              <Button variant="outlined" color="primary" onClick={() => handleEdit(user)}>Edit</Button>
            </Box>
          ))}
        </Box> */}
      </Box>
    </Container>
  );
}

export default Users;
