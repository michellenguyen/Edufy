//requiring files
const express = require("express");
const app = express();
const path = require("path");
const db = require("../models");

//creating different routes for special events. along with that we are using the models directory (sequelize)
module.exports = function(app){

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public", "index.html"));
  });

  //Page for testing out file sending. Will organize after we figure out if/how we want to separate backend files. --YASHA
  //Nodemailer for email notifications, and cookie npm package. --YASHA
  app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public', 'SampleUpload.html'))
  })
  app.get('/view', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public', 'VueAttempt.html' ))
  })
  app.post('/upload1', function(req, res) {

    upload = req.files.transcript;
    console.log(upload.name)
    if (!req.files) {
      res.send('No files were uploaded');
      return;
    }
    upload.mv(path.join(__dirname + '/../private/uploadFiles/' + upload.name), function (err) {
      if (err) {res.status(500).send(err)}
      else {res.send('File uploaded!')}
    })
  })

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public", "signup.html"));
  });

  app.post("/signup", function(req, res) {
    db.users.create(req.body).then(function(){
      res.redirect("/");
    });
  });

  //signing into the user. Haven't done much after they sign in correctly yet.
  app.post("/signing", function(req, res) {
    db.users.count({ where: { username: req.body.userName } })
      .then(count => {
        if (count === 0) {
          console.log("not a real user");
        } else {
          db.users.findOne({ where: {username: req.body.userName} }).then(function(result) {
            if(req.body.password !== result.pass){
              console.log("not your password");
            } else {
              console.log("Welcome " + req.body.userName);
            }
          })
        }
    });
  });



	//more stuff will be added
}
