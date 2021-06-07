const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// DB connection
require('../db/conn');
const User = require('../models/userSchema');


// Response for browser
router.get('/', (req, res) => {
    res.send(`Hello world!`);
});


// SignUp route
router.post('/register', async (req, res) => {

     const { firstName, lastName, contactNumber, email, password, cPassword } = req.body;
 
     if( !firstName || !lastName || !contactNumber || !email || !password || !cPassword ) {
          return res.status(422).json({ error: `Please fill required fields` });
     }

     try {
          
          const userExist = await User.findOne({ email: email });
          
          if(userExist) {
               return res.status(422).json({ error: `Email already exist` });
          } else if(password != cPassword ) {
               return res.status(422).json({ error: `Password doesn't match` });
          } else {
               
               const user = new User({ firstName, lastName, contactNumber, email, password, cPassword });
               
               await user.save();
     
               res.status(201).json({ message: `Registered Successfully` });
          }

     } catch(err) { 
          console.log(err);
     }

});


// SignIn route
router.post('/login', async (req, res) => {
     try {
          let token;
          const { email, password } = req.body;

          if(!email || !password) {
               return res.status(400).json({ error: `Please fill required details` });
          }

          const userSignin = await User.findOne({ email:email });

          if (userSignin) {
               const isMatch = await bcrypt.compare(password, userSignin.password);

               token = await userLogin.generateAuthToken();

               res.cookie('jwtoken', token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
               });

               if (!isMatch) {
                    res.status(400).json({ error: `Sorry that password isn't correct` });
               } else {
                    res.json({ message: `Login Successfull` });
               }
          } else {
               res.status(400).json({ message: `Account doesn't exist. Please check your details.` });
          }

     } catch (err) {
          console.log(err);
     }
});

module.exports = router;
