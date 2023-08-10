const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Seller = require("./models/seller");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://realuser:real1234@cluster0.f2vcvei.mongodb.net/sellerDB",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// const ry = new Seller({
//   imgUrl:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQzQd5W7_2jJVvos1EfKC4V9m87N3hMY5wA&usqp=CAU",
//   name: "Ryan Yang",
//   email: "ryan@company.org",
//   commenceDate: "2014-12-24",
//   phone_number: "2350009485",
//   propertyId: "No.22028",
//   status: "Active",
// });

// const ry2 = new Seller({
//   imgUrl:
//     "https://windsorrealestate.com/wp-content/uploads/2020/09/img6-new.jpg",
//   name: "Ryan",
//   email: "ryan2@company.org",
//   commenceDate: "2014-3-13",
//   phone_number: "2350009485",
//   propertyId: "No.22028",
//   status: "Active",
// });

// async function addSeller() {
//   try {
//     await Seller.insertMany([ry, ry2]);
//     console.log("Successfully created");
//   } catch (error) {
//     console.error("Error adding seller:", error.message);
//   }
// }

// addSeller();

const sellerRouter = require("./routes/sellers");
const uploadImageRouter = require("./routes/upload");

app.use("/sellers", sellerRouter);
app.use("/upload", uploadImageRouter);

app.listen(port, () => console.log("Server Started"));
