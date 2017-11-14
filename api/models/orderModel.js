'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the order'
  },
  orderId: String,
  payment_currency: String,
  payment_amount: Number,
  payment_method: String,
  shipping_company:String,
  shipping_trackingNo:Number,
  
  product: {
    type: Schema.ObjectId,
    ref: 'Products'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Orders', OrderSchema);