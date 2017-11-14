'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  description: String,
  price: Number,
  image: {
    type: String,
    required: 'Image is require'
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Categories'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Products', ProductSchema);