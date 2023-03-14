"use strict";
//getting info from the classes in following path
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

//checking if there is any error executing the function 
function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/reviews: showing all reviews");
        }
        
    });
}

function addReview(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.userId, request.body.restaurantId, request.body.username, request.body.restaurant_name, 
        request.body.rating, request.body.review, request.body.likes, now.toString());
    reviewsDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/reviews: added review");
        }
    })
}

function updateReview(request, respond){
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.userId, request.body.restaurantId, request.body.username, request.body.restaurant_name, 
    request.body.rating, request.body.review, request.body.likes, now.toString());
    reviewsDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/reviews/id: updated review");
        }
    });
}

function deleteReview(request, respond){
    var reviewsID = request.params.id;
    reviewsDB.deleteReview(reviewsID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/reviews/id: deleted review");
        }
    });
}
module.exports = {getAllReviews, addReview, updateReview, deleteReview};