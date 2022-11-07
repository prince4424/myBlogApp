import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Posts = (props) => {
  const [myblogs, setMyblogs] = useState([])
  const navigate = useNavigate()

  const getApiBlogs = async () => {
    const res = await axios.get("http://localhost:5000/getBlogs");
    setMyblogs(res.data)
  }
  useEffect(() => {
    getApiBlogs();
  }, [])
  const fullDetails = (id) => {
    navigate(`/getBlogs/${id}`)
    // navigate(`/getById/${id}`)




    // var id = event.target.id;
    // var value = event.target.value;
    // console.log("Value of the button: ", value)
    // console.log("Id of the button: ", id)}
  }
  return (
    <div className="grid">
      <div className="blogs">

        <div>
          <h2 className="m-5">All Posts</h2>
          {myblogs.map((post) => {
            const { id, title, content, description } = post
            return <div className="blog" key={id}>
              <div className="row">
              <div className="col-md-3"></div>
<div className="col-md-6 ">
              <h4 className="m-3">{title.toUpperCase()}</h4>
           
              {/* <p>{content}</p>
              <p>{description}</p> */}
              <button className="button" onClick={(e) => { fullDetails(post._id) }}>Full Details</button>   </div>
              {/* <button onClick={(e)=>myblogs(e.target.id)}>Full Details</button> */}


              <div className="col-md-3"></div>

            </div>
            </div>

          })}
        </div>


      </div>
    </div>
  );
};

export default Posts;
