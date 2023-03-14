"use strict";
/// sql queries related to user_profile in restaurant_reviewDB in sql (CRUD functions)


var db = require('../db-connections');
const { response } = require('express');
class UsersDB{

    logIn(user, callback){
        var sql = "SELECT * FROM user_profile WHERE _id = ? AND password = ?"; 
        db.query(sql, [user.getId(), user.getPassword()], callback)
    }
    // retrieving all the information of the users in the user_profile table
    getAllUsers(callback){ 
        var sql = "SELECT * from restaurant_review.user_profile"; 
        // "SELECT *" selects all the information in the designated table/DB
        db.query(sql, callback);
    }

    verifyUsername(user, callback){
        var sql = "SELECT * from restaurant_review.user_profile WHERE username = ?";
        db.query(sql,[user.getUsername()], callback);
    }
    
    // adding new user into the user_profile table
    addUser(user, callback){ 
        var sql = "INSERT INTO user_profile (email, username, first_name, last_name, gender, password, address, mobile_number) VALUES (?,?,?,?,?,?,?,?)";
        // "INSERT INTO ___" function keys in specific data into the designated table
        db.query(sql, [user.getEmail(), user.getUsername(), user.getFirst_name(), user.getLast_name(), user.getGender(), user.getPassword(), user.getAddress(), user.getMobile_number()], callback);

    }
    
    // updating/chaning information of the user in the table
    updateUser(user, callback){ 
        var sql = "UPDATE user_profile SET email=?, username=?, first_name=?, last_name=?, gender=?, password=?, address=?, mobile_number=? WHERE _id = ?"; 
        // "UPDATE" function will overwrite the info into certain columns  
        return db.query(sql, [user.getEmail(), user.getUsername(), user.getFirst_name(), user.getLast_name(), user.getGender(), user.getPassword(), user.getAddress(), user.getMobile_number(), user.getId()], callback);
    }

    
    // deleting information of the user in the table
    deleteUser(user, callback){
        var sql = "DELETE from user_profile WHERE _id = ?"; 
        // "DELETE" function will delete the info in certain columns/tables/etc
        return db.query(sql, [user.getId(),], callback);
    }

}
module.exports = UsersDB;
