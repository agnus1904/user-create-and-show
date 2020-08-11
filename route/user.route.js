// user module

var express = require('express');
var router = express.Router();
var controller = require("../controllers/user.controller");

// multer
var multer  = require('multer');
var upload = multer({ dest: './public/images/' });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/:id", controller.get);

router.post("/create",
    upload.single('avatar'),
    controller.postCreate
);


module.exports = router;
