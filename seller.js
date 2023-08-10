const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

const Seller = require("./models/seller");

mongoose.connect(
  `${process.env.DATABASE_URI}`,
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const s1 = new Seller({
  "imgUrl": "https://windsorrealestate.com/wp-content/uploads/2020/09/img6-new.jpg",
  "name": "Siam Ngan.",
  "email": "ryan2@company.org",
  "commenceDate": "2014-3-13",
  "phone_number": "555-222-3333",
  "propertyId": "6",
  "status": "Pending",
});

const s2 = new Seller({
  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQzQd5W7_2jJVvos1EfKC4V9m87N3hMY5wA&usqp=CAU",
  "name": "Quan Ryan",
  "email": "ryan@company.org",
  "commenceDate": "2014-12-24",
  "phone_number": "555-888-9999",
  "propertyId": "5",
  "status": "Pending",
});

const s3 = new Seller({
  "imgUrl": "https://real-estate-properties-ms-backend.onrender.com/images/seller2.jpg",
  "name": "Yang Ryan",
  "email": "ryan2@company.org",
  "commenceDate": "2014-3-13",
  "phone_number": "555-666-7777",
  "propertyId": "1",
  "status": "Active",
});

const s4 = new Seller({
  "imgUrl": "https://real-estate-properties-ms-backend.onrender.com/images/seller.jpg",
  "name": "Ryan Yang",
  "email": "ryan@company.org",
  "commenceDate": "2014-12-24",
  "phone_number": "555-123-4567",
  "propertyId": "2",
  "status": "Pending",
});

const s5 = new Seller({
  "imgUrl": "https://windsorrealestate.com/wp-content/uploads/2020/09/img6-new.jpg",
  "name": "Quan N.",
  "email": "ryan2@company.org",
  "commenceDate": "2014-3-13",
  "phone_number": "555-666-7777",
  "propertyId": "4",
  "status": "Sold",
});

const s6 = new Seller({
  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQzQd5W7_2jJVvos1EfKC4V9m87N3hMY5wA&usqp=CAU",
  "name": "Ryan Yang",
  "email": "ryan@company.org",
  "commenceDate": "2014-12-24",
  "phone_number": "555-222-1111",
  "propertyId": "3",
  "status": "Active",
});

const s7 = new Seller({
  "imgUrl": "https://real-estate-properties-ms-backend.onrender.com/images/seller2.jpg",
  "name": "Siam Ngan.",
  "email": "ryan2@company.org",
  "commenceDate": "2014-3-13",
  "phone_number": "555-222-7189",
  "propertyId": "7",
  "status": "Active",
});

const s8 = new Seller({
  "name": "Test Seller",
  "imgUrl": "https://img.icons8.com/dusk/2x/customer-insight.png",
  "email": "ab210222@yahoo.com.tw",
  "commenceDate": "2023-08-23",
  "phone_number": "+886988270916",
  "propertyId": "1234",
  "status": "Active",
});

async function addSeller() {
  try {
    await Seller.insertMany([s1, s2, s3, s4, s5, s6, s7, s8]);
    console.log("Successfully created");
  } catch (error) {
    console.error("Error adding seller:", error.message);
  }
}

addSeller();

app.listen(port, () => console.log("Server Started"));
