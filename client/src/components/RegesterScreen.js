
import React, { useState, useEffect } from "react";
import axios from "axios";

import Loaderr from "../loaders/Loader";
import Error from "../loaders/Error";
import Success from "../loaders/Success";
import {  useNavigate } from "react-router-dom";

function RegisterScreen() {
  const Navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = {
    name,
    email,
    password,
    cpassword,
  };
  

  async function register() {
    // if (user.name ==="") {
    //   alert("all fields are required")
    //   return false;
    // }
    

    if (password === cpassword ) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      
      //console.log(user);
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const result = (await axios.post("http://localhost:5000/regester", user)).then((Navigate("/addBlog")));
        // console.log(result);
        setSuccess(result);
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    } else {
      alert("Password not matched");
    }
    // if (user==="") {alert("all fields are mandatory")
      
    // } else {alert("regester sucessfully")
      
    // }
  }

  return (
    <div className="form">
      <form onSubmit={register}>
      {loading && <Loaderr></Loaderr>}
      {error.length > 0 && <Error msg={error}></Error>}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {success.length > 0 && <Success msg={success}></Success>}
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              required
              className="form-control"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type= "email"
            required
             className="form-control"
              placeholder="Enter a Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="Password"
              required
               className="form-control"
              placeholder="Set Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              required
             className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button type="submit" className="btn btn-primary mt-3">
                Register
              </button>
            )}
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default RegisterScreen;