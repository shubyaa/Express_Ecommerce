const { default: mongoose } = require("mongoose");

const AddressModel = mongoose.Schema({
  user_id: String,
  address_type: String,
  street: String,
  city: String,
  state: String,
  zipcode: Number,
});

var Addresses = mongoose.model("Address", AddressModel);
module.exports = Addresses;
