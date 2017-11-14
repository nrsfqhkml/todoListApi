'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the customer'
  },
  order: String,
  category: {
    type: Schema.ObjectId,
    ref: 'Orders'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Customers', CustomerSchema);