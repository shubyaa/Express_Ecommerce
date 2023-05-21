const { default: mongoose } = require("mongoose");


const OrdersModel = mongoose.Schema({
    order_id : Number,
    user_id : String,
    ordered_date : Date,
    delivery_date : Date,
    status : String,
    products : [String],
    bill_generated: String,
    total_amount : Number,
    delivery_charges : Numbers

})




var Orders = mongoose.model('Orders', OrdersModel);
module.exports = Orders;
