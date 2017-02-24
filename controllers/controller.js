var express = require("express");




// Import the model (burger.js) to use its database functions.
var db = require("../models");

//export all routes into server.js
module.exports = function(app){



//  app.get("/login", function(req, res) {

//     res.sendFile(path.join(__dirname + "/../public/login.html"));
// });  

app.get("/", function(req, res){
  db.burgerSequelize.findAll({
    // include: [db.costumer]
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
      updatedAt: req.body.created_at

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
              // costumerId: user.id
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


// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var burgerObj = {
//       burgers: data
//     };
//     console.log(burgerObj);
//     res.render("index", burgerObj);
//   });
// });

// router.post("/", function(req, res) {
//   burger.insertOne([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, false
//   ], function() {
//     res.redirect("/");
//   });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });
