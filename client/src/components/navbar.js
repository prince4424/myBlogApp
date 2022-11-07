
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { logoutUser } from '../helper/logout'

const Navbar = ({isLoggedIn,setIsLoggedin}) => {



  return (
    <div><nav class="navbar navbar-expand-lg  bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">A Day With Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon bg-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"> <Link to="/" >All Blogs</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"> <Link to="/addBlog">  Post a Blog</Link></a>
            </li>
            {isLoggedIn == true?
              <li class="nav-item" onClick={(E) => {
                logoutUser()
                setIsLoggedin(false)
              }}>
                <a class="nav-link"> <Link to="/login">LogOut </Link></a>
              </li>
              :
              <li class="nav-item">
                <a class="nav-link"> <Link to="/login">Login/Signup </Link></a>
              </li>
            }

          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar