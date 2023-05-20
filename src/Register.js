import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const headers = {
    "authorization":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjQ0MTBlODNjYjQ1YWE5MjRlMmM4NzRjIiwiZW1haWwiOiJrb3RoaXlheW9nZXNoMTFAZ21haWwuY29tIiwiaWF0IjoxNjg0NTY5NzUzLCJleHAiOjE2ODQ5MTUzNTMsImlzcyI6ImJoYXJ1Y2gtaGVhbHRoIn0.aPyvpin75NmRoX6qOtNii8t-bm-k45uICOT-yNZq6mM",
  };

  useEffect(() => {
    axios
      .post("https://api.bharuch-health.com/user/listAll", {
        headers: headers,
      })
      .then((response) => {
        // Handle successful login

        console.log(response);
      })

      .catch((error) => {
        // Handle login error
        console.log(error);
        // dispatch(loginFailure(error.message));
      });
  }, []);
  return <></>;
};

export default Register;
