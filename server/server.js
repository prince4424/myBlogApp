const express = require("express");
const app = express();
const cors = require("cors")
const mongoose= require("mongoose");
const Blogg = require("./models/blogSchema");
const UserModel = require("./models/User");
require('dotenv/config');

app.use(express.json());
app.use(cors())
// app.use("/api/user", router);




const PORT = process.env.PORT || 7000;
// regester a user
app.post("/regester",async (req, res)=>{
  const Regester = req.body;
  const newRegester = new UserModel(Regester);
  await newRegester.save();
  res.json(Regester);
})

   //POST all BLOG 
 
app.post("/postBlogs",async  (req, res)=>{

  const Blog= req.body;
const newBlog= new Blogg(Blog);
await newBlog.save();
res.json(Blog);
  })
  //GET ALL BLOGS REQUEST
  app.get('/getBlogs',async (req, res) => {
   await Blogg.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))}
);
//DETETE blog  REQUEST
app.delete('/deleteBlogs/:id',async (req, res) => {
    await Blogg.findOneAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))}
   
  );
  // SINGLE POST REQUEST
  app.get('/getById/:id',async (req, res) => {
    await Blogg.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))}
  );
  // LOGIN REQUEST
  // app.post("/login", async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await UserModel.findOne({ email: email, password: password });
  //     if (user) {
  //       const temp = {
  //         name: user.name,
  //         email: user.email,
  //         _id: user._id,
  //       };
  //       res.send(temp);
  //     } else {
  //       return res.status(400).json({ message: "Login Failed" });
  //     }
  //   } catch (error) {
  //     return res.status(400).json({ message: error });
  //   }
  // });
  
  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.status(200).json({
            message: "login successful",
            token: "thisissecrettokenbro",
            email: email,
            status:200
          });
        } else {
          res.status(401).json({
            message: "YOU ENTERED A WRONG PASSWORD!",
            status:401
          });
        }
      } else {
        res.status(404).json({ message: "USER NOT FOUND!" ,
        status:404});
      }
    });
  });
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((data) =>
        app.listen(process.env.PORT, () => {
            console.log(`my server is starting at ${PORT}`)
        })
    )
    .catch((Error) => {
        console.log("DB_connection failed", Error)
    })
   