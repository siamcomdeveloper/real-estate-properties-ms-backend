const express = require("express");
const router = express.Router();
const Realtor = require("../models/realtor");

// Getting all
router.get("/", async (req, res) => {
  try {
    const realtors = await Realtor.find();
    res.json(realtors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one
// see the getRealtor method
router.get("/:id", getRealtor, (req, res) => {
  res.json(res.realtor);
});

// Creating one
router.post("/addNew", async (req, res) => {
  const realtor = new Realtor({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    email: req.body.email,
    phone_number: req.body.phone_number,
    rank: req.body.rank,
    commission_rate: req.body.commission_rate,
    commission_amount: req.body.commission_amount,
  });

  if (realtor.imgUrl == "") {
    realtor.imgUrl = "https://img.icons8.com/dusk/2x/customer-insight.png";
  }

  try {
    const newRealtor = await realtor.save();
    res.status(201).json(newRealtor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one(use patch only update what user passed in, so not PUT)
router.patch("/update/:id", getRealtor, async (req, res) => {
  if (req.body.imgUrl != null) {
    res.realtor.imgUrl = req.body.imgUrl;
  }
  if (req.body.name != null) {
    res.realtor.name = req.body.name;
  }
  if (req.body.email != null) {
    res.realtor.email = req.body.email;
  }
  if (req.body.phone_number != null) {
    res.realtor.phone_number = req.body.phone_number;
  }
  if (req.body.rank != null) {
    res.realtor.rank = req.body.rank;
  }
  if (req.body.commission_rate != null) {
    res.realtor.commission_rate = req.body.commission_rate;
  }
  if (req.body.commission_amount != null) {
    res.realtor.commission_amount = req.body.commission_amount;
  }

  try {
    const updatedRealtor = await res.realtor.save();
    res.json(updatedRealtor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/delete/:id", getRealtor, async (req, res) => {
  try {
    await res.realtor.deleteOne();
    res.json({ message: "Deleted realtor" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getRealtor(req, res, next) {
  let realtor;
  try {
    realtor = await Realtor.findById(req.params.id);
    if (realtor == null) {
      return res.status(404).json({ message: "Cannot find realtor" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.realtor = realtor;
  next();
}

module.exports = router;
