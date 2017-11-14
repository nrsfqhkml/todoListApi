'use strict';
module.exports = function(app) {
  var doOrder = require('../controllers/orderController');

  // todoList Routes
  app.route('/orders')
    .get(doOrder.list_all_orders)
    .post(doOrder.create_a_order);


  app.route('/orders/:orderId')
    .get(doOrder.read_a_order)
    .put(doOrder.update_a_order)
    .delete(doOrder.delete_a_order);
};