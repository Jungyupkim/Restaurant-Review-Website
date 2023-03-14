"use strict";
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');

var usersDB = new UsersDB();

//checking if there is any err while calling functions in the web
function logIn (request, respond){
    var user = new User(request.body._id, request.body.email, request.body.username, request.body.first_name, request.body.last_name, request.body.gender, 
        request.body.password, request.body.address, request.body.mobile_number, request.body.fav_restaurant);
    usersDB.logIn(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            if (result.length>0){
                console.log("/users: welcome :D");
            }
            else{
                console.error("/users: invalid username and(or) password!")
            }
            
            
        }
    });
}
function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/users: showing all users");
        }
    });
}

function verifyUsername(request, respond){
    var user = new User(null, request.body.email, request.body.username, request.body.first_name, request.body.last_name, request.body.gender, 
        request.body.password, request.body.address, request.body.mobile_number, request.body.fav_restaurant);
    usersDB.verifyUsername(user, function(error, result){
        if(error){
            respond.json(error); 
        }
        else{
            respond.json(result);
        }
    })
}

function addUser(request, respond){
    var user = new User(null, request.body.email, request.body.username, request.body.first_name, request.body.last_name, request.body.gender, 
        request.body.password, request.body.address, request.body.mobile_number, request.body.fav_restaurant);
    usersDB.addUser(user, function(error, result){
        if(error){
            respond.json(error); 
        }
        else{
            respond.json(result);
            console.log("/user: added new user")
        }
    })
}

function updateUser(request, respond){
    var user = new User(parseInt(request.params.id), request.body.email, request.body.username, request.body.first_name, request.body.last_name, request.body.gender, 
        request.body.password, request.body.address, request.body.mobile_number, request.body.fav_restaurant);
    usersDB.updateUser(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/user/id: Updated user profile")
        }
    });
}

function deleteUser(request, respond){
    var user = new User(parseInt(request.params.id), request.body.email, request.body.username, request.body.first_name, request.body.last_name, request.body.gender, 
        request.body.password, request.body.address, request.body.mobile_number, request.body.fav_restaurant);
    usersDB.deleteUser(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
            console.log("/user: deleted the user")
        }
    });
}
module.exports = {logIn, getAllUsers, verifyUsername, addUser, updateUser, deleteUser};