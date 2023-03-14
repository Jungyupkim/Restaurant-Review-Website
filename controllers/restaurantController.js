"use strict"
const RestaurantsDB = require('../models/RestaurantsDB');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

var restaurantsDB = new RestaurantsDB();

//checking if there is any err while calling the function in the web
function getAllRestaurants(request, respond){
    restaurantsDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
        console.log("/restaurants: showing all restaurants");
    });
}
function getCuisine(request, respond){
    var restaurant = new Restaurant(null, request.body.restaurant_name, request.body.cuisineId, request.body.average_rating, request.body.about, 
        request.body.address, request.body.menu, request.body.openingHours);
    restaurantsDB.getCuisine(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function calcAvg(request, respond){
    var restaurant = new Restaurant(request.body.id, request.body.restaurant_name, request.body.cuisineId, request.body.average_rating, request.body.about, 
        request.body.address, request.body.menu, request.body.openingHours);
    var now = new Date();
    var review = new Review(null, request.body.userId, request.body.restaurantId, request.body.username, request.body.restaurant_name, 
        request.body.rating, request.body.review, request.body.likes, now.toString());
    restaurantsDB.calcAvg(restaurant, review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function filterRestaurants_rating(request, respond){
    var restaurant = new Restaurant(null, request.body.restaurant_name, request.body.cuisineId, request.body.average_rating, request.body.about, 
        request.body.address, request.body.menu, request.body.openingHours);
    restaurantsDB.filterRestaurants_rating(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
        console.log("/filter/rating: showing restaurants");
    });

}
function filterRestaurants_cuisine(request, respond){
    var restaurant = new Restaurant(null, request.body.restaurant_name, request.body.cuisineId, request.body.average_rating, request.body.about, 
        request.body.address, request.body.menu, request.body.openingHours);
    restaurantsDB.filterRestaurants_cuisine(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            }
        console.log("/filter/cuisine: showing restaurants");
    });
}


module.exports = {getAllRestaurants, getCuisine, filterRestaurants_rating, filterRestaurants_cuisine, calcAvg};