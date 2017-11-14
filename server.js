var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

var Task = require('./api/models/todoListModel'); //created model loading here
var Category = require('./api/models/categoryModel');
var Product = require('./api/models/productModel');
var Order = require('./api/models/orderModel');
var Customer = require('./api/models/customerModel');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useMongoClient: true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var todoRoutes = require('./api/routes/todoListRoutes'); //importing route
var categoryRoutes = require('./api/routes/categoryRoutes');
var productRoutes = require('./api/routes/productRoutes');
var orderRoutes = require('./api/routes/orderRoutes');
var customerRoutes = require('./api/routes/customerRoutes');
todoRoutes(app); //register the route
categoryRoutes(app);
productRoutes(app);
orderRoutes(app);
customerRoutes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});