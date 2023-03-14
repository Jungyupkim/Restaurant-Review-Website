var express = require("express");
const { use } = require("express/lib/application");
const res = require("express/lib/response");

var restaurantController = require('./controllers/restaurantController');
var reviewController = require('./controllers/reviewController');
var userController = require('./controllers/userController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());// json() is a method inbuilt in express to recognise the incoming request object from the
// in time to come we will need to accept new or edited comments from user
app.route('/login').post(userController.logIn); // activate the logIn method if the route is GET(method) /logIn

app.route('/restaurants').get(restaurantController.getAllRestaurants); // activate the getAllRestaurants method if the route is GET(metthod) /restaurants
app.route('/restaurants/cuisine').post(restaurantController.getCuisine);
app.route('/restaurants/filter/ratings').get(restaurantController.filterRestaurants_rating); // activate the filterRestaurants_rating if the route is GET(method) /restaurants/filter/ratings
app.route('/restaurants/filter/cuisine').get(restaurantController.filterRestaurants_cuisine); // activate the filterRestaurants_rating if the route is GET(method) /restaurants/filter/cuisine
app.route('/calcavg').post(restaurantController.calcAvg);

app.route('/reviews').get(reviewController.getAllReviews); // activate the getAllReviews method if the route is GET(method) /reviews
app.route('/reviews').post(reviewController.addReview); // activate the addReviews method if the route is POST(method) /reviews
app.route('/reviews/:id').put(reviewController.updateReview); // activate the updateReviews method if the route is put(method) /reviews/:id
app.route('/reviews/:id').delete(reviewController.deleteReview); // activate the deleteReview method if the route is DELETE(method) /reviews/:id

app.route('/users').get(userController.getAllUsers); // activate the getAllUsers method if the route is GET(method) /users
app.route('/verify').post(userController.verifyUsername);
app.route('/users').post(userController.addUser); // activate the addUser method if the route is POST(method) /users
app.route('/users/:id').put(userController.updateUser); // activate the updateUser method if the route is PUT(method) / users/:id
app.route('/users/:id').delete(userController.deleteUser); // activate the deleteUser method if the route is DELETE(method) /users/:id

app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming
console.log("web server running @ http://127.0.0.1:8080"); //output to console
