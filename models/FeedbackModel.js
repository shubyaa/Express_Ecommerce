const { default: mongoose } = require("mongoose");

const FeedbackModel = mongoose.Schema({
  user_id: Number,
  description: Text,
  rating: Number,
  
});

var Feedback = mongoose.model("Adress", FeedbackModel);
module.exports = Feedback;
