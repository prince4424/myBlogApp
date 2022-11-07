import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Naviagtionbar from "./components/navbar";
import AddBlog from "./components/homeBlog";
import Posts from "./components/posts";
import RegisterScreen from "./components/RegesterScreen";
import LoginScreen from "./components/LoginScreen";

import { Single_post } from "./components/Single_post";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedin] = useState(false)
  useEffect(() => {
    if (window.localStorage.getItem("currentUser")) {
      setIsLoggedin(true)
    } else {
      setIsLoggedin(false)
    }
  }, [])
  return (
    <>



      <BrowserRouter>
        <Naviagtionbar isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedin}/>
        <Routes>
          <Route exact path='/' element={< Posts />} />
          <Route exact path="/addBlog" element={<AddBlog />} />

          <Route path="/getBlogs/:id" element={<Single_post state={"yash"} />} />
          <Route exact path="/signup" element={<RegisterScreen />} />
          <Route exact path="/Login" element={<LoginScreen isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedin}/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
