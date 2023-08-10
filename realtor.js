const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

const Realtor = require("../backend/models/realtor");

mongoose.connect(
  `${process.env.DATABASE_URI}`,
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const r1 = new Realtor({
  name: "Bob Anderson",
  imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/realtor.jpg",
  email: "bob.anderson@example.com",
  phone_number: "555-123-4567",
  rank: 2,
  commission_rate: 0.02,
  commission_amount: 2500,
});

const r2 = new Realtor({
  name: "Daniel Miller",
  imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/realtor2.jpg",
  email: "daniel.miller@example.com",
  phone_number: "555-222-3333",
  rank: 4,
  commission_rate: 0.015,
  commission_amount: 2000,
});

const r3 = new Realtor({
  name: "Olivia Brown",
  imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/realtor.jpg",
  email: "olivia.brown@example.com",
  phone_number: "555-888-9999",
  rank: 5,
  commission_rate: 0.018,
  commission_amount: 2200,
});

const r4 = new Realtor({
  name: "Sophia Martinez",
  imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/realtor2.jpg",
  email: "sophia.martinez@example.com",
  phone_number: "555-666-7777",
  rank: 7,
  commission_rate: 0.012,
  commission_amount: 1800,
});

const r5 = new Realtor({
  name: "Noah Johnson",
  imgUrl: "https://www.warholandwest.com/wp-content/uploads/2019/06/corporate-headshots-chicago-photographer.jpg",
  email: "noah.johnson@example.com",
  phone_number: "555-555-7777",
  rank: 8,
  commission_rate: 0.019,
  commission_amount: 2600,
});

const r6 = new Realtor({
  name: "Emma Anderson",
  imgUrl: "https://production-uploads.fastly.propertybase.com/assets/uploads/agent/photo/61543/bc116c7d0e526f28cf61063b9c0036af.jpg?width=767&optimize=low&auto=webp",
  email: "emma.anderson@example.com",
  phone_number: "555-222-7777",
  rank: 9,
  commission_rate: 0.023,
  commission_amount: 2900,
});

const r7 = new Realtor({
  name: "Aiden Williams",
  imgUrl: "https://www.warholandwest.com/wp-content/uploads/2019/06/corporate-headshots-chicago-photographer.jpg",
  email: "aiden.williams@example.com",
  phone_number: "555-444-7777",
  rank: 10,
  commission_rate: 0.014,
  commission_amount: 2100,
});

const r8 = new Realtor({
  name: "Mike Johnson",
  imgUrl: "https://real-estate-properties-ms-backend.onrender.com/images/realtor.jpg",
  email: "mike.johnson@example.com",
  phone_number: "555-123-4567",
  rank: 11,
  commission_rate: 0.015,
  commission_amount: 3000,
});

async function addRealtor() {
  try {
    await Realtor.insertMany([r1, r2, r3, r4, r5, r6, r7, r8]);
    console.log("Successfully created");
  } catch (error) {
    console.error("Error adding realtor:", error.message);
  }
}

addRealtor();

app.listen(port, () => console.log("Server Started"));
