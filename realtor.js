const express = require("express");
const mongoose = require("mongoose");
const Realtor = require("../backend/models/realtor");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://realuser:real1234@cluster0.f2vcvei.mongodb.net/realtorDB",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// const ry = new Realtor({
//   imgUrl:
//     "https://windsorrealestate.com/wp-content/uploads/2020/09/img6-new.jpg",
//   name: "Ryan",
//   email: "ryan@company.org",
//   phone_number: "2350009485",
//   rank: 2,
//   commission_rate: 0.02,
//   commission_amount: 679,
// });

// const ry2 = new Realtor({
//   imgUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQzQd5W7_2jJVvos1EfKC4V9m87N3hMY5wA&usqp=CAU",
//   name: "Ryan Yang",
//   email: "ryan@company.org",
//   phone_number: "2350009485",
//   rank: 2,
//   commission_rate: 0.02,
//   commission_amount: 679,
// });

// async function addRealtor() {
//   try {
//     await Realtor.insertMany([ry, ry2]);
//     console.log("Successfully created");
//   } catch (error) {
//     console.error("Error adding realtor:", error.message);
//   }
// }

// addRealtor();

const realtorRoute = require("./routes/realtor");

app.use("/realtors", realtorRoute);

app.listen(port, () => console.log("Server Started"));
