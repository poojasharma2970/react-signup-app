const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();
const env = require('dotenv');
// const User = require('./models/userSchema');


//environment variables
env.config({ path: './config.env' });
require('./db/conn');

// // create application/json parser
// const jsonParser = bodyParser.json();
 
// // create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });


// convert .json to object
app.use(express.json());

// linking router file to make route easy
app.use(require('./router/auth'));

// Pages
app.get('/register', (req, res) => {
     res.send(`SignUp Form`);
});

app.get('/login', (req, res) => {
     res.send(`SignIn Form`);
});

// PORT Details
app.listen(process.env.PORT , () => {
     console.log(`Server is running on port ${process.env.PORT}`);
});