import express from 'express'
// import cors from 'cors';
import path from 'path'
import mdb from 'mongoose'
import User from './models/users.js'
import Animeschem from './models/anime.js'
import dotenv from "dotenv"

import { __dirname } from './utils.js';
import cors from 'cors';

const allowedOrigins = ['https://frontend-vercel-two-phi.vercel.app/'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


var app=express()
const PORT=3001
// app.use(cors());
app.use(express.json());
dotenv.config()
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'reactbackend')));

mdb.connect(process.env.MONGO_URL).then(()=>{
console.log("Mongodb connected successfully");

})
.catch(()=>{
    console.log("MongodbNot connected");
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');})

    app.get('/page2',(req,res)=>{
        res.sendFile(path.join(__dirname,"/index2.html"))
    })
app.get('/json',(req,res)=>{
    res.json({
        message: "Hello, this is your JSON response!",
        status: "success"
    });
})
// app.post('/signup',async(req,res)=>{
//      console.log(req.body);
//     var{firstName,lastName,clg,email}=req.body
//      console.log(firstName,lastName,clg,email);
    
//     try{
//         const newUser = new User({
//             firstName:firstName,
//             lastName:lastName,
//             clg:clg,
//             email:email
//           });
//         awaitnewUser.save()
//         console.log("User added Successfully");
//         res.status(200).send("User Added successfully");
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send("An error occurred while adding the user");
//     }
  
// })
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const eu = await User.findOne({ email });
        console.log(eu);

        if (eu) {
            if (eu.password !== password) {
                res.json({ message: "Login Failed", isLoggedIn: false });
            } else {
                res.json({ message: "Login Success", isLoggedIn: true });
            }
        } else {
            res.json({ message: "Login Failed", isLoggedIn: false });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while logging in");
    }
});

app.post('/signup', async (req, res) => {
   // const { firstName, lastName, clg, email } = req.body;
  
    //console.log("Received data:", req.body); // To debug and check incoming data
  
    try {
    //   const newUser = new User({
    //     firstName,
    //     lastName,
    //     clg,
    //     email
    //   });
    const newUser=new User(req.body)
    console.log(req.body.password);
    
  
      await newUser.save();
      console.log("User added Successfully");
  
      res.status(200).send("User Added successfully");
    } catch (err) {
      console.error("Error adding user:", err);
      res.status(500).send("An error occurred while adding the user");
    }
  });
  
app.post('/anime',(req,res)=>{
    console.log(req.body);
   var{animename,type,rating}=req.body
    console.log(animename,type,rating);
   
   try{
       const newAnime = new Animeschem({
        animename:animename,
        type:type,
        rating:rating
         });
         newAnime.save()
       console.log("Anime added Successfully");
       res.status(200).send("Anime Added successfully");
   }
   catch(err){
       console.log(err);
       return res.status(500).send("An error occurred while adding the user");
   }
 
})
app.get("/login",()=>{

})
//development server - react ,production server - backend
app.listen(PORT,()=>{
    console.log(`server started \n URL: http://localhost:${PORT}/`);  
})