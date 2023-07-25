const mongoose = require('mongoose');

//creating schema
const sellerSchema = new mongoose.Schema({
  seller_id: mongoose.Schema.Types.ObjectId,
  imgUrl: {type: String},
  name: {type: String, required: true },
  email: {type: String, required: true },
  phone_number: {type: String, required: true },
  rank: {type: Number, required: true },
  commission_rate: {type: Number, required: true },
  commission_amount: {type: Number, required: true },
});

module.exports = mongoose.model('Seller', sellerSchema)