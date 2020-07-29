var db = require("../db");
const shortid = require('shortid');

module.exports.index = function(req,res){
    res.render("users/index",{users: db.get("users").value()});
};

module.exports.create = function(req,res){
    res.render("users/create");
} ;

module.exports.get = function(req,res){
    var id = req.params.id;
    var user = db.get("users").find({id: id}).value();
    res.render("users/view", {user :user});
};

module.exports.postCreate =  function(req,res){
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("/users");
};