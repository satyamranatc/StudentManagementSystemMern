//  Create a Express Server
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()


const app = express()
const port = process.env.PORT || 8081

// !----------Models----------------------------------
import UserModel from './Models/User.js';
import StudentModel from './Models/Student.js';
// !-----------------MiddleWare-------------------------------
app.use(bodyParser.json());

// !----------DataBase Connection-------------------------
mongoose.connect(process.env.URI)
.then(() => console.log('Connected to MongoDB!'))
.catch(() => console.log('MongoDB Error: '));
// !-------------------------------------------------------



app.get('/api/data', (req, res) => {
  res.json([1,2,3,4])
})


app.get("/SetUser", (req, res) => {
  // Save a User In User Model;
  let UserName = "SRana"
  let Password = 123
  let NewUser = new UserModel({username:UserName, password:Password});
  NewUser.save()
  res.send("Added");
})

app.post('/api/login', async (req, res) => {

  let UserName = req.body.username
  let Password = req.body.password

  console.log(UserName,Password)

  let Data =  await UserModel.findOne({username: UserName, password: Password});
  console.log(Data)
  console.log(Data.username)
  console.log(typeof (Data.password))
  if(UserName == Data.username && Password == parseInt(Data.password))
  {
    res.json({"Success": true})
  }
  else
  {
    res.json({"Success": false})
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})