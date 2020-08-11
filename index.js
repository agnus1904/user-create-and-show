// express js
require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;
var cookieParser = require('cookie-parser');

// require module route
var userRoutes = require("./route/user.route");
var authRoutes = require("./route/auth.route");
var productRoutes = require("./route/product.route");


var authMiddleware = require("./middlewares/auth.middleware");

// use pug engine
app.set('views', './views');
app.set('view engine', 'pug');

//use req.body in express js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRECT));
app.use(express.static("public"));

// home page
app.get('/', (req, res) => res.render("index"));

// user page
app.use("/users", authMiddleware.requireAuth ,userRoutes);
app.use("/products", productRoutes);
app.use("/auth", authRoutes);

// start server with port
app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`));