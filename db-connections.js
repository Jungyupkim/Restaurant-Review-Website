var mysql = require('mysql2');
var connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user:'root',
    password: 'CDEV',
    database: 'restaurant_review'

});

connection.connect(err => { //test out connection
    if(err) throw err;
    console.log('Connected To DB')
});
module.exports = connection;