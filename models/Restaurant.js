"use strict";
//Creating a new class to retreive and store information into restaurant in SQL DB
class Restaurant {
constructor(id,restaurant_name, cuisineId, average_rating, about, address, menu, openingHours )
//creating a constructor for each fields in the restaurant
{
this.id = id;
this.restaurant_name = restaurant_name;
this.cuisineId = cuisineId;
this.average_rating = average_rating;
this.about = about;
this.address = address;
this.menu = menu;
this.openingHours = openingHours;
}
//get methods
    getId(){
        return this.id;
    }
    getRestaurant(){
        return this.restaurant_name;
    }
    getCuisineId(){
        return this.cuisineId;
    }
    getAvgRating(){
        return this.average_rating;
    }
    getAbout(){
        return this.about;
    }
    getAddress(){
        return this.address;
    }
    getMenu(){
        return this.menu;
    }
    getOpeningHours(){
        return this.openingHours;
    }
}

module.exports = Restaurant;