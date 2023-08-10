const mongoose = require("mongoose");

//creating schema
const realtorSchema = new mongoose.Schema({
  realtor_id: mongoose.Schema.Types.ObjectId,
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  rank: { type: Number, required: true },
  commission_rate: { type: Number, required: true },
  commission_amount: { type: Number, required: true },
});

module.exports = mongoose.model("Realtor", realtorSchema);
