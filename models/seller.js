const mongoose = require("mongoose");

//creating schema
const sellerSchema = new mongoose.Schema({
  seller_id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  email: { type: String, required: true },
  commenceDate: { type: String, required: true },
  phone_number: { type: String, required: true },
  propertyId: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Seller", sellerSchema);
