const express = require('express');
const mongoose = require('mongoose')
const Seller = require('../backend/models/seller')
const app = express()
app.use(express.json());

mongoose.connect("mongodb+srv://realuser:real1234@cluster0.f2vcvei.mongodb.net/sellerDB", {
 useNewUrlParser: true });

const db = mongoose.connection
db.on('error',  (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const ry = new Seller({
 imgUrl: "https://pixabay.com/get/35bbf209e13e39d2_640.jpg", 
 name: "Ryan",
 email: "ryan@company.org",
 phone_number: "2350009485",
 rank: 2,
 commission_rate: 0.02,
 commission_amount: 679,
});

const ry2 = new Seller({
  imgUrl: "https://pixabay.com/get/35bbf209e13e39d2_640.jpg", 
  name: "Ryan2",
  email: "ryan@company.org",
  phone_number: "2350009485",
  rank: 2,
  commission_rate: 0.02,
  commission_amount: 679,
 });
 

async function addSeller() {
  try {
    await Seller.insertMany([ry,ry2]);
    console.log('Successfully created')
  } catch(error){
    console.error('Error adding seller:', error.message);
  }
}

addSeller();

app.listen(3000, () => console.log('Server Started'))