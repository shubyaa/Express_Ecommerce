const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  phone: Number,
  email_verification: Boolean,
  image_url: String,
  isLogin: Boolean,
  verifyMobile: Boolean,
  feedbacks: [Number],
  cart: [Number],
  orders: [Number],
  favourite_stores: [String],
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
