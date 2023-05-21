const express = require("express");
const AddressModel = require("../models/AddressModel");

//Define the Route
const addressRoute = express.Router();

addressRoute.get("/", async (req, res) => {
  try {
    const data = await AddressModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

addressRoute.post("/add", async (req, res) => {
  // {
  //   "user_id": "req.body.user_id",
  //   "address_type": "req.body.address_type",
  //   "street": "req.body.street",
  //   "city": "req.body.city",
  //   "state": "req.body.state",
  //   "zipcode": 410107
  // }
  try {
    const addressExists = await AddressModel.findOne({
      user_id: req.body.user_id,
      address_type: req.body.address_type,
    });

    if (addressExists) {
      res
        .status(403)
        .json({ message: "Address of this type for this user already exists" });
    } else {
      const data = new AddressModel({
        user_id: req.body.user_id,
        address_type: req.body.address_type,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
      });

      await data.save();
      res.status(200).json({ message: "Address added" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

// Delete Address
addressRoute.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const addressExits = AddressModel.findOne({ id: id });
  if (addressExits) {
    await AddressModel.findByIdAndRemove(id);
    res.status(200).json({ message: "Address deleted" });
  } else {
    res.status(500).json({ message: "Address Not found" });
  }
});

//Update Address
addressRoute.put("/update", async (req, res) => {});

module.exports = addressRoute;
