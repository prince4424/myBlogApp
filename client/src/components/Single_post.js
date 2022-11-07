import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Single_post = (props) => {
console.log(props)
  const { id } = useParams()
  const [post, setPost] = useState({
    desc: "",
    title: "",
    content: ""
  })
  useEffect(() => {
    getPostById()
  }, [id])
  const getPostById = async () => {
    const res = await axios.get("http://localhost:5000/getById/" + id);
    console.log("res", res)
    // debugger
    if (res && res.status === 200) {

      setPost((post) => {
        return {
          ...post,
          desc: res.data.description,
          content: res.data.content,
          title: res.data.title
        }
      })
    }
  }

  
  return (
    <div className='blog m-5 p-4'>
      <h2>{post.title.toUpperCase()}</h2>
      <p>{post.desc}</p>
      <p>{post.content}</p>
    </div>
  )
}
