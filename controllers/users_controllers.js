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
  
  //Page for testing out file sending
  app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname +'/../public', 'SampleUpload.html'))
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
  //end test
  app.post("/signing", function(req, res) {
    db.users.count({ where: { username: req.body.userName } })
      .then(count => {
        if (count === 0) {
          console.log("fake");
        } else {
          console.log("true");
        }
    });
  });



	//more stuff will be added
}