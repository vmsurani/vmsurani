import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "./Actions/AuthActions";
import { useHistory } from "react-router-dom";
import Users from "./Components/Users";
// import { Typography, TextField, Button, Container, Box } from '@material-ui';
import { Typography, TextField, Button, Container, Box } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();

  //   const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [isShow, setisShow] = useState(true);

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(login(data.email, data.password));
      //   const response = await dispatch(login("kothiyayogesh11@gmail.com", "1234567890"));

      const { token } = response.data;
      localStorage.setItem("token", token);
      //   history.push('/users');
      console.log(response);
      setisShow(false);
    } catch (error) {
      setError("Invalid email or password");
      setisShow(false);
    }
  };

  return (
    <>
      {isShow ? (
        <Container maxWidth="sm">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <Box width="100%">
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Email"
                  {...register("email", { required: true })}
                  error={errors.email}
                  helperText={errors.email && "Email is required"}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  {...register("password", { required: true })}
                  error={errors.password}
                  helperText={errors.password && "Password is required"}
                  fullWidth
                  margin="normal"
                />
                {error && (
                  <Typography color="error" align="center" gutterBottom>
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      ) : (
        <Users />
      )}
    </>
  );
};

export default Login;
