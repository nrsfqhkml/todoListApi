'use strict';
module.exports = function(app) {
  var todoCategory = require('../controllers/categoryController');

  // todoList Routes
  app.route('/categories')
    .get(todoCategory.list_all_categories)
    .post(todoCategory.create_a_category);


  app.route('/categories/:categoryId')
    .get(todoCategory.read_a_category)
    .put(todoCategory.update_a_category)
    .delete(todoCategory.delete_a_category);
};