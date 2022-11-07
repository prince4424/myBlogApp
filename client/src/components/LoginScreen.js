import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Loaderr from "../loaders/Loader";
import Error from "../loaders/Error";
import { Hidden } from "@mui/material";


function LoginScreen(props) {
  
  const {isLoggedIn, setIsLoggedin} = props;
  const Navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  async function Login() {
    setLoading(true);
    const user = {
      email,
      password,
    };
    //console.log(user);
    try {
      const result = (await axios.post("http://localhost:5000/login", user))
      // .then((Navigate("/addBlog")));

      console.log(result);
      localStorage.setItem("currentUser", JSON.stringify(result));
      localStorage.getItem("result")
      setIsLoggedin(true);
      Navigate("/addBlog")


    } catch (error) {
      console.log(error);
      setError("Invalid Credentials");
    }
    setLoading(false);

  }
  const logout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedin(false);
  };
  return (
    <div>
      {loading && <Loaderr></Loaderr>}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error.length > 0 && <Error msg={error}></Error>}
          <div className="bs">
            <h2>Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              //   value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Enter a Password"
              //   value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {loading ? (
              <div>Login...Please Wait...</div>
            ) : (
              <button className="btn btn-primary mt-3"

                onClick={Login} >
                Login
              </button>
            )}
            {/* <button className="logout" onClick={logout}>logout user</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;