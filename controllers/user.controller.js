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
    req.body.avatar = req.file.path.split("/").slice(1).join("/");
    var errors = [];
    if(!req.body.name){
        errors.push("Name must be input");
    }
    if(!req.body.phone){
        errors.push("Number phone must be input");
    }
    if(!req.body.email){
        errors.push("Email must be input");
    }
    if(!req.body.password){
        errors.push("Password must be input");
    }
    if(errors.length){
        res.render("users/create",{
            errors: errors,
            valid: req.body
        });
        return;
    }
    
    db.get("users").push(req.body).write();
    res.redirect("/users");
};