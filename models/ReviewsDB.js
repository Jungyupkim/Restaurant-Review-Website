"use strict";
/// sql queries related to reviews in restaurant_reviewDB in sql (CRUD functions)

var db = require('../db-connections');
class ReviewsDB {
    // this function will retrieve all the information in the review table
    getAllReviews(callback) {
        var sql = "SELECT * from restaurant_review.review";
        db.query(sql, callback);
    }

    // this function will add new review into the review table
    addReview(review, callback) {
        var sql = "INSERT INTO review (userId, restaurantId, username, restaurant_name, rating, review, datePosted) VALUES (?, ?, ?, ?, ?, ?, ?)";
        //the question marks represent placeholders for the values of each field.
        db.query(sql, [review.getUserId(), review.getRestaurantId(), review.getUsername(), review.getRestaurant_name().trim(), review.getRating(),
        review.getReview(), review.getDatePosted()], callback);
        //the parameters here consist of an array of values for each of the fields in the review table. the values are gotten from the Review object.
        
    }

    // this function will ovewrite/update on the preious info that existed in the review table
    updateReview(review, callback) {

        var sql = "UPDATE review SET review = ?, rating = ?, username = ?, datePosted = ? WHERE _id = ?";

        return db.query(sql, [review.getReview(), review.getRating(), review.getUsername(),
        review.getDatePosted(), review.getId()], callback);
    }

    // this function will delete certain infor in the review table
    deleteReview(reviewID, callback) {

        var sql = "DELETE from review WHERE _id = ?";

        return db.query(sql, [reviewID], callback);

    }

}

module.exports = ReviewsDB;
