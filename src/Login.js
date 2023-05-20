import React from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { loginSuccess, loginRequest, loginFailure } from "./Action";
import axios from "axios";
import Register from "./Register";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Data, setData] = useState("");

  const [isShow, setisShow] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest());

    axios
      .post("https://api.bharuch-health.com/login", {
        email: "kothiyayogesh11@gmail.com",
        password: "1234567890",
      })
      .then((response) => {
        // Handle successful login
        dispatch(loginSuccess());
        setisShow(false);
        setData(response.data);
        console.log(response);
      })

      .catch((error) => {
        // Handle login error
        dispatch(loginFailure(error.message));
      });
  };

  return (
    <>
      {isShow ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      ) : (
        <Register />
      )}
    </>
  );
};

export default Login;
