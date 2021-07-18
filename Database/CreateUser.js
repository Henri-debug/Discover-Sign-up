const sequelize = require("sequelize");
const connection = require("./connection");

const Register = connection.define("Users_Registered",{

       

                  username:{
                      type:sequelize.STRING,
                      allowNull:false
                  },
                  fullname:{
                      type:sequelize.STRING,
                      allowNull:false
                  },
                  email:{
                      type:sequelize.STRING,
                      allowNull:false
                  },
                  password:{
                      type:sequelize.STRING,
                      allowNull:false
                  }
                  
});

Register.sync({force:false}).then(()=>{

                console.log("Database Connected");

}).catch((err)=>{
                console.log("Error:"+err);
});



module.exports = Register;