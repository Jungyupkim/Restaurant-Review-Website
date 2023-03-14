"use strict";
//Creating a new class to retreive and store information into user_profile in SQL DB
class User {
constructor(id, email, username, first_name, last_name, gender, password, address, mobile_number, fav_restaurant)
//creating a constructor for each fields in the user_profile
{
this.id = id;
this.email = email;
this.username = username;
this.first_name = first_name;
this.last_name = last_name;
this.gender = gender;
this.password = password;
this.address = address;
this.mobile_number = mobile_number;
this.fav_restaurant = fav_restaurant;
}
//get methods
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getUsername(){
        return this.username;
    }
    getFirst_name(){
        return this.first_name;
    }
    getLast_name(){
        return this.last_name;
    }
    getGender(){
        return this.gender;
    }
    getPassword(){
        return this.password;
    }
    getAddress(){
        return this.address;
    }
    getMobile_number(){
        return this.mobile_number;
    }
    getFav_restaurant(){
        return this.fav_restaurant;
    }
   
//set methods (to update the info in "users")
    setId(id){
        this.id = id;
    }
    setEmail(email){
        this.email = email;
    }
    setUsername(username){
        this.username = username;
    }
    setFirst_name(first_name){
        this.first_name = first_name;
    }
    setLast_name(last_name){
        this.last_name = last_name;
    }
    setGender(gender){
        this.gender = gender;
    }
    setPassword(password){
        this.password = password;
    }
    setAddress(address){
        this.address = address;
    }
    setMobile_number(mobile_number){
        this.mobile_number = mobile_number;
    }
    setFav(fav_restaurant){
        this.fav_restaurant = fav_restaurant;
    }
}

module.exports = User;