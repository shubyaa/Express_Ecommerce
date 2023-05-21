const { default: mongoose } = require("mongoose");

const CartModel = mongoose.Schema({
  items_id: [Number],
  user_id: Number,
  item_count: Number,
  total_cart_value: Number,
});

var Cart = mongoose.model("Cart", CartModel);
module.exports = Cart;

