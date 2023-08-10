require('dotenv').config();
const router = require('express').Router();
const Property = require("../models/property");

// Getting all
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one
// see the getProperty method
router.get("/:id", getProperty, (req, res) => {
  res.json(res.property);
});

// Creating one
router.post("/addNew", async (req, res) => {
  const count = await Property.countDocuments({});
  console.log( "Number of property:", count );
  console.log( "req.body:", req.body );

  const property = new Property({
    name: req.body.name,
    no: count+1,
    price: req.body.price,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    space: req.body.space,
    address: req.body.address,
    city: req.body.city,
    stateProvince: req.body.stateProvince,
    postalCode: req.body.postalCode,
    commenceDate: req.body.commenceDate,
    status: req.body.status,
    imgUrl: req.body.imgUrl
  });

  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one(use patch only update what user passed in, so not PUT)
router.patch("/update/:id", getProperty, async (req, res) => {
  
  if (req.body.name != null) {
    res.property.name = req.body.name;
  }
  if (req.body.price != null) {
    res.property.price = req.body.price;
  }
  if (req.body.bedroom != null) {
    res.property.bedroom = req.body.bedroom;
  }
  if (req.body.bathroom != null) {
    res.property.bathroom = req.body.bathroom;
  }
  if (req.body.space != null) {
    res.property.space = req.body.space;
  }

  if (req.body.address != null) {
    res.property.address = req.body.address;
  }
  if (req.body.city != null) {
    res.property.city = req.body.city;
  }
  if (req.body.stateProvince != null) {
    res.property.stateProvince = req.body.stateProvince;
  }
  if (req.body.postalCode != null) {
    res.property.postalCode = req.body.postalCode;
  }

  if (req.body.commenceDate != null) {
    res.property.commenceDate = req.body.commenceDate;
  }
  if (req.body.status != null) {
    res.property.status = req.body.status;
  }
  if (req.body.imgUrl != null) {
    res.property.imgUrl = req.body.imgUrl;
  }

  try {
    const updatedProperty = await res.property.save();
    res.json(updatedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/delete/:id", getProperty, async (req, res) => {
  try {
    await res.property.deleteOne();
    res.json({ message: "Deleted property" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProperty(req, res, next) {
  let property;
  try {
    property = await Property.findById(req.params.id);
    if (property == null) {
      return res.status(404).json({ message: "Cannot find property" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.property = property;
  next();
}

module.exports = router;
