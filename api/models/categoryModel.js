'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the category'
  },
  owner: String,
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Categories', CategorySchema);