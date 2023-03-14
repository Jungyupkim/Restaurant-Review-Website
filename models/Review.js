"use strict";
// Creating a new class to retreive and store information into review table in SQL DB

class Review {
constructor(id, userId, restaurantId, username, restaurant_name, rating, review, likes, datePosted)
{
this.id = id;
this.userId = userId;
this.restaurantId = restaurantId;
this.username = username;
this.restaurant_name = restaurant_name;
this.rating = rating;
this.review = review;
this.likes = likes;
this.datePosted = datePosted;
}
//get methods (to retrieve info. either from the db, or letting user to input data)
    getId(){
        return this.id;
    }
    getUserId(){
        return this.userId;
    }
    getRestaurantId(){
        return this.restaurantId;
    }
    getUsername(){
        return this.username;
    }
    getRestaurant_name(){
        return this.restaurant_name
    }
    getRating(){
        return this.rating;
    }
    getReview(){
        return this.review;
    }
    getLikes(){
        return this.likes
    }
    getDatePosted(){
        return this.datePosted;
    }
//set methods (to update the info in "reviews")
    setUserId(userId){
        this.userId = userId;
    }
    setRestaurantId(restaurantId){
        this.restaurantId = restaurantId;
    }
    setUsername(username){
        this.username = username;
    }
    setMovie(restaurant_name){
        this.restaurant_name = restaurant_name;
    }
    setRating(rating){
        this.rating = rating;
    }
    setReview(review){
        this.review = review;
    }
    setLikes(likes){
        this.likes = likes;
    }
    setDatePosted(datePosted){
        this.datePosted = datePosted;
    }
}

module.exports = Review;