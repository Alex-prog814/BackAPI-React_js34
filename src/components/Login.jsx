import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, cleanErrorState, cleanStatusState } from '../store/userSlice';  
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { loading, status, error } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanErrorState());
    dispatch(cleanStatusState());
  }, []);

  return (
    <>
      {error ? (
        <>
          <h2>Something went wrong!</h2>
          <h2>{ error }</h2>
          <Button variant="outlined" size="medium" onClick={() => dispatch(cleanErrorState())}>Try again!</Button>
        </>
      ) : (
        <>
          {status ? (
            <>
              <h2>{ status }</h2>
              <Button variant="outlined" size="medium" onClick={() => navigate('/')}>Go home!</Button>
            </>
          ) : (
            <>
              {loading ? (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                <Box sx={{
                  width: '100%',
                  height: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}>
                  <h2>Login Form</h2>
                  <TextField onChange={(e) => setUser({ ...user, username: e.target.value })} sx={{ width: '30%' }} label="Username" variant="outlined" required />
                  <TextField onChange={(e) => setUser({ ...user, password: e.target.value })} sx={{ width: '30%' }} label="Password" variant="outlined" required />
                  <Button variant="outlined" size="medium" onClick={() => dispatch(loginUser(user))}>Login</Button>
                </Box>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Login;