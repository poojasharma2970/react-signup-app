const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Schema
const userSchema = new mongoose.Schema({
     firstName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 30,
     },
     lastName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 30,
     },
     contactNumber: { 
          type: String,
          required: true,
          unique: true,
     },
     email: {
          type: String,
          required: true,
          trim: true,
          unique: true,
          lowercase: true,
     },
     password: {
          type: String,
          required: true,
     },
     cPassword: {
          type: String,
          required: true,
     },
     tokens: [
          {
               token: {
                    type: String,
                    required: true,
               }
          }
     ]
}, { timestamps: true });


// Hash password
userSchema.pre('save', async function (next) {
     if(this.isModified('password')) {
          this.password = await bcrypt.hashSync(this.password, 16);
          this.cPassword = await bcrypt.hashSync(this.cPassword, 16);
     }
     next();
});


// Token generation
userSchema.methods.generateAuthToken = async function () {
     try {
          let token = jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
          // second token refers to let token
          this.tokens = this.tokens.concat({ token: token });
          await this.save();
          return token;
     } catch (err) {
          console.log(err);
     }
}

// New collection in monogodb
const User = mongoose.model('USER', userSchema);

module.exports = User;