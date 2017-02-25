var express = require("express");




// Import the model (burger.js) to use its database functions.
var db = require("../models");

//export all routes into server.js
module.exports = function(app){




app.get("/", function(req, res){
  db.burgerSequelize.findAll({
    include: [db.costumer]
  }).then(function(data){
    console.log(data);
      var burgerObj = {
          burgers: data
        };
      console.log(burgerObj);
      res.render("index", burgerObj);

  });

});

app.post("/", function(req, res){

   db.burgerSequelize.create({
      burger_name: req.body.burger_name,
      devoured: false,
      createdAt: req.body.created_at,
      updatedAt: req.body.created_at,
      // costumerId: 1

   }).then(function(){
      
     res.redirect("/");

  }).catch(function(err){
    // console.log(err);
  });


});

app.put("/:id", function(req, res){

  db.costumer.create({
    costumerName : req.body.costumerName
  }).then(function(user){

        db.burgerSequelize.update({
              
              devoured: req.body.devoured,
              updatedAt: req.body.created_at,
              costumerId: user.id
            }, {
              where: {
                id: req.params.id
              }

          }).then(function(data){

              res.redirect("/");

        });


  })

  


})



}

