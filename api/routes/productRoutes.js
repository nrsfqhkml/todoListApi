'use strict';
module.exports = function(app) {
  var doProduct = require('../controllers/productController');

  // todoList Routes
  app.route('/products')
    .get(doProduct.list_all_products)
    .post(doProduct.create_a_product);


  app.route('/products/:productId')
    .get(doProduct.read_a_product)
    .put(doProduct.update_a_product)
    .delete(doProduct.delete_a_product);
};