const mongoose = require("mongoose");

//creating schema
const propertySchema = new mongoose.Schema({
  property_id: mongoose.Schema.Types.ObjectId,
  no: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  bedroom: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  space: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  stateProvince: { type: String, required: true },
  postalCode: { type: String, required: true },
  commenceDate: { type: String, required: true },
  status: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

module.exports = mongoose.model("Property", propertySchema);