const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");

// Getting all
router.get("/", async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one
// see the getSeller method
router.get("/:id", getSeller, (req, res) => {
  res.json(res.seller);
});

// Creating one
router.post("/addNew", async (req, res) => {
  const seller = new Seller({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    email: req.body.email,
    commenceDate: req.body.commenceDate,
    phone_number: req.body.phone_number,
    propertyId: req.body.propertyId,
    status: req.body.status,
  });

  if (seller.imgUrl == "") {
    seller.imgUrl = "https://img.icons8.com/dusk/2x/customer-insight.png";
  }

  try {
    const newSeller = await seller.save();
    res.status(201).json(newSeller);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one(use patch only update what user passed in, so not PUT)
router.patch("/update/:id", getSeller, async (req, res) => {
  if (req.body.imgUrl != null) {
    res.seller.imgUrl = req.body.imgUrl;
  }
  if (req.body.name != null) {
    res.seller.name = req.body.name;
  }
  if (req.body.email != null) {
    res.seller.email = req.body.email;
  }
  if (req.body.phone_number != null) {
    res.seller.phone_number = req.body.phone_number;
  }
  if (req.body.commenceDate != null) {
    res.seller.commenceDate = req.body.commenceDate;
  }
  if (req.body.propertyId != null) {
    res.seller.propertyId = req.body.propertyId;
  }
  if (req.body.status != null) {
    res.seller.status = req.body.status;
  }

  try {
    const updatedSeller = await res.seller.save();
    res.json(updatedSeller);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/delete/:id", getSeller, async (req, res) => {
  try {
    await res.seller.deleteOne();
    res.json({ message: "Deleted seller" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSeller(req, res, next) {
  let seller;
  try {
    seller = await Seller.findById(req.params.id);
    if (seller == null) {
      return res.status(404).json({ message: "Cannot find seller" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.seller = seller;
  next();
}

module.exports = router;
