import { useState } from "react";
import { Box, InputLabel, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  // const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [allBlogs, setAllBlogs] = useState([]);

  // const handleChange = (event) => {
  //   setInputs((prevValue) => ({
  //     ...prevValue,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const newEntry = {
    //   title: title,
    //   content: content,
    //   description: description,
    // };
    // setAllBlogs([...allBlogs, newEntry]);

    // console.log(newEntry)
    axios
      .post("http://localhost:5000/postBlogs", { title, content, description })
      .then((res) =>
       console.log(res)
      )
      .catch((error) => console.log(error));
      if({title,content,description}==""){
        alert("all fields are mandatory")

      }
      else{ alert("your blog is posted")}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={2}
          borderColor="secondary.main"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={5}
          display="flex"
          flexDirection={"column"}
          width={"70%"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="gray"
            variant="h3"
            textAlign={"center"}
          >
            A Day with Blog
          </Typography>
          <InputLabel sx={labelStyle}>Title</InputLabel>
          <TextField
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            margin="normal"
            variant="outlined"
          />
          <InputLabel sx={labelStyle}>Content</InputLabel>
          <TextField
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            margin="normal"
            variant="outlined"
          />
          <InputLabel sx={labelStyle}>Discription</InputLabel>
          <TextField
            name="discription"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            margin="normal"
            variant="outlined"
          />
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Submit Blog
          </Button>
        </Box>
      </form>
      {allBlogs.map((curElem) => {
        return (
          <div className="details">
            <p>{curElem.title} </p>
            <p>{curElem.content}</p>
            <p>{curElem.description}</p>

            {/* <Blogs title={curElem.title} blog={curElem.blog}/> */}
          </div>
        );
      })}
    </div>
  );
};

export default AddBlog;
