var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/dbtest');

var personSchema = mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String
});

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  

var users = mongoose.model("users", personSchema);


app.get('/getuser', function (req, res) {
    users.find(function (err, response) {
        res.json(response);
    });
});


// app.post('/login', function (req, res, next) {

//     // you might like to do a database look-up or something more scalable here
//     if (req.body.username && req.body.username === 'username' && req.body.password && req.body.password === 'password') {
//         req.session.authenticated = true;
//         res.redirect('/secure');
//     } else {
//         req.flash('error', 'Username and password are incorrect');
//         res.redirect('/login');
//     }

// });




app.get('/find', function (req, users) {
    users.findOne(function (err, response) {
        res.json(response);
    });
});


app.put('/updater', function (req, res) {
    users.update({ user: "jen" }, { pass: "1123" }, function (err, response) {
        console.log(response);
    });
});

// app.put('/update_id', function (req, res) {
//     users.findByIdAndUpdate({ _id: "5a7d1e397a2f2e792ca139f4" }, { pass: "44566" }, function (err, response) {
//         if (err) res.json({ message: "Error in updating person with id " + req.params.id });
//         res.json(response);
//     });
// });

// // theo user
// app.put('/update_user', function (req, res) {
//     users.update({ user: "jen" }, { pass: "00000" }, function (err, response) {
//         if (err) res.json({ message: "Error in updating person with id " + req.params.id });
//         res.json(response);
//     });
// });


app.put('/update/:id', function (req, res) {
    users.findByIdAndUpdate(req.params.id, req.body, function (err, response) {
        if (err) res.json({ message: "Error in updating person with id " + req.params.id });
        res.json(response);
    });
});



app.delete('/delete/:id', function (req, res) {
    users.findByIdAndRemove(req.params.id, function (err, response) {
        if (err) res.json({ message: "Error in deleting record id " + req.params.id });
        else res.json({ message: "Person with id " + req.params.id + " removed." });
    });
});



app.post('/insert', function(req, res){
    console.log("????",req.body)
    var personInfo = req.body; //Get the parsed information
   
    if(!personInfo.username || !personInfo.email || !personInfo.phone || !personInfo.password){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new users({
          username: personInfo.username,
          email: personInfo.email,
          phone: personInfo.phone,
          password: personInfo.password
          
       });
         
       newPerson.save(function(err, users){
        //   if(err)
        //      res.render('show_message', {message: "Database error", type: "error"});
        //   else
        //      res.render('show_message', {
        //         message: "New person added", type: "success", person: personInfo});
        res.send(users)
    });
    }
 });

app.listen(3001);