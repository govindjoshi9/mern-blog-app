const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const User = require('./models/User')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const salt = bcrypt.genSaltSync(10);
const secret = 'asfe34etet3456';


app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:HRoW3f14SSLyRyOq@cluster0.l5hx9bv.mongodb.net/?retryWrites=true&w=majority"
);


app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt),
    })
    res.json(userDoc);
    
  } catch (e) {
    console.log(e)
    res.status(400).json(e);
  }
  
})

app.post('/login', async(req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password)
  if (passOk) {
    //login
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token',token).json('ok');
    })
  }
  else {
    res.status(400).json('wrong credentials')
  }

})


app.listen(4000)
