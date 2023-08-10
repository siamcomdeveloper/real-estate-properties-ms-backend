require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

const Property = require("./models/property");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  `${process.env.DATABASE_URI}`,
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// //creating schema
// const propertySchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     bedroom: Number,
//     bathroom: Number,
//     space: Number,
//     address: String,
//     city: String,
//     stateProvince: String,
//     postalCode: String,
//     commenceDate: String,
//     status: Number,
//     imgUrl: String
// });

// defining model
// const Property = mongoose.model("Property", propertySchema);

// creating
const p1 = new Property({
    name: "91 ALLIUM PLACE, ORLANDO FL 32827",
    no: 1,
    price: 2590693,
    bedroom: 4,
    bathroom: 2,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 1,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property.jpg"
});

const p2 = new Property({
    name: "92 ALLIUM PLACE, ORLANDO FL 32827",
    no: 2,
    price: 1590693,
    bedroom: 2,
    bathroom: 1,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 2,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property2.jpg"
});

const p3 = new Property({
    name: "93 ALLIUM PLACE, ORLANDO FL 32827",
    no: 3,
    price: 390693,
    bedroom: 5,
    bathroom: 4,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 1,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property.jpg"
});

const p4 = new Property({
    name: "94 ALLIUM PLACE, ORLANDO FL 32827",
    no: 4,
    price: 490693,
    bedroom: 2,
    bathroom: 2,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 3,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property2.jpg"
});

const p5 = new Property({
    name: "95 ALLIUM PLACE, ORLANDO FL 32827",
    no: 5,
    price: 590693,
    bedroom: 4,
    bathroom: 2,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 2,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property.jpg"
});
 
const p6 = new Property({
    name: "96 ALLIUM PLACE, ORLANDO FL 32827",
    no: 6,
    price: 690693,
    bedroom: 1,
    bathroom: 1,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 2,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property2.jpg"
});

const p7 = new Property({
    name: "97 ALLIUM PLACE, ORLANDO FL 32827",
    no: 7,
    price: 1790693,
    bedroom: 4,
    bathroom: 2,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 1,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property.jpg"
});

const p8 = new Property({
    name: "98 ALLIUM PLACE, ORLANDO FL 32827",
    no: 8,
    price: 890693,
    bedroom: 3,
    bathroom: 1,
    space: 2090.00,
    address: "10205 Floral Sen",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V9V1V9",
    commenceDate: "2023-08-11",
    status: 3,
    imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/property2.jpg"
});

Property.insertMany([p1, p2, p3, p4, p5, p6, p7, p8]);

app.listen(port)
console.log(`App running ${process.env.DOMAIN_NAME_BACKEND}`);