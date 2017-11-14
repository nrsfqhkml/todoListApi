'use strict';
module.exports = function(app) {
  var doCustomer = require('../controllers/customerController');

  // todoList Routes
  app.route('/customers')
    .get(doCustomer.list_all_customers)
    .post(doCustomer.create_a_customer);


  app.route('/customers/:customerId')
    .get(doCustomer.read_a_customer)
    .put(doCustomer.update_a_customer)
    .delete(doCustomer.delete_a_customer);
};