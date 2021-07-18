const sequelize = require("sequelize");

const connection = new sequelize('Discover','admin','4750',{
              
           host:'localhost',
           dialect:'mysql'

});

module.exports = connection;