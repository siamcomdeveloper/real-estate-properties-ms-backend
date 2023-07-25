const express = require('express');
const mongoose = require('mongoose')
const app = express()

// mongoose.connect("mongodb://localhost:27017/usersDB2", {
//  useNewUrlParser: true,
// });

mongoose.connect("mongodb+srv://realuser:real1234@cluster0.f2vcvei.mongodb.net/", {
 useNewUrlParser: true,
});

//creating schema
const userSchema = new mongoose.Schema({
 name: String,
 email: String,
 fav_pizza: String,
 space_invaders: Number,
});
// defining model
const User = mongoose.model("User", userSchema);
//User has to be with capital first letter. mongo will make that small and plural

// the model name: "User" => "users"
// creating
const pj = new User({
 name: "PJ",
 email: "pj@company.org",
 fav_pizza: "Pepperoni",
 space_invaders: 826488,
});
const trish = new User({
 name: "Trish",
 email: "trish@company.org",
 fav_pizza: "Spicy Veg",
 space_invaders: 674588,
});
const paddy = new User({
 name: "Paddy",
 email: "paddy@company.org",
 fav_pizza: "Ham",
 space_invaders: 998988,
});
const bob = new User({
 name: "Bob",
 email: "bob@company.org",
 fav_pizza: "Onion",
 space_invaders: 657745,});
 const alice = new User({
  name: "Alice",
  email: "alice@company.org",
  fav_pizza: "Everything",
  space_invaders: 929848,
 });

 User.insertMany([pj, trish, paddy, bob, alice], function (err) {
  if (err) {
  console.log(err);
  } else {
  console.log("successfully created db");
  }
 });
  app.listen(3000)
 console.log('App running http://localhost:3000')