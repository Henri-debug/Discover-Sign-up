const express = require("express");
const app = express();
const connection = require("./Database/connection");
const Register = require("./Database/CreateUser");




//Connection
connection.authenticate().then(()=>{
    console.log("Connection Success")
}).catch((err)=>{
    console.log("Error Connection:"+err);
})

//Uses
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//View
app.set('view engine','ejs');

//static
app.use(express.static('public'));

//favicon
app.use('/favicon.ico',express.static('./Public/images/favicon.ico'));

// Routes

app.get('/',function(req,res){
       res.render('Index');
});


app.post('/register',function(req,res){
        const {fullname,username,password,email} = req.body;

        Register.create({
              
             username:username,
             fullname:fullname,
             password:password,
             email:email

        }).then(()=>{
            res.redirect('/');
        }).catch((err)=>{
            console.log("Error Create Register:"+err);
        });




});






app.listen(8080, ()=>{
       console.log("Server Online");
});