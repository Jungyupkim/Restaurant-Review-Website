"use strict";

const res = require('express/lib/response');
var db = require('../db-connections');
const Review = require('./Review');
class RestaurantsDB{
    // this function will retreive all the information in restaurant table in the DB
    getAllRestaurants(callback){

        db.query("UPDATE restaurant_review.restaurant SET average_rating = ROUND(average_rating*2, 0)/2");
        var sql = "select * from restaurant_review.restaurant";
        db.query(sql, callback);

    } 
    getCuisine(restaurant, callback){
        var sql = ("select cuisines from restaurant_review.cuisine WHERE _id = ?")
        db.query(sql, [restaurant.getCuisineId()], callback)
    }
    calcAvg(restaurant, review, callback){
        var updateRatings = "UPDATE restaurant SET average_rating = (SELECT AVG(rating) FROM review WHERE restaurantId = ?) WHERE _id = ?";
        db.query(updateRatings, [review.getRestaurantId(), restaurant.getId()], callback)
    }
    
    // these functions will retrieve filtered restaurants with different conditions
    filterRestaurants_rating (restaurant, callback){

        db.query("UPDATE restaurant_review.restaurant SET average_rating = ROUND(average_rating*2, 0)/2");
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE _id IN (SELECT _id FROM restaurant_review.restaurant WHERE average_rating >= ?)";
        db.query(sql, [restaurant.getAvgRating()], callback);

    }

    filterRestaurants_cuisine (restaurant, callback){

        var sql = "SELECT * FROM restaurant_review.restaurant WHERE cuisineId = ?";
        db.query(sql, [restaurant.getCuisineId()], callback);
    }
    

    
}

module.exports = RestaurantsDB;
