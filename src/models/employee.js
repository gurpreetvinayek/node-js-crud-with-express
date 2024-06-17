'use strict';
//var dbConn = require('./../../config/db.config');
const db = require('./../../config/db.config'); // Assuming your MySQL connection is exported from db.js

const User = {};

User.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};


User.getUserById = (id)=>{
    return new Promise((resolve, reject) => {
     db.query('SELECT * from users where id = ?',[id],(err,results)=>{
       if(err){
        return reject(err);
       }
       resolve(results)
     });
    });
}

User.create = (user)=>{
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users SET ?', user, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results.insertId);
        });
    });
}

module.exports = User;