// express js
const express = require('express');
const app = express();
const port = 3000;

// require module route
var userRoutes = require("./route/user.route");

// use pug engine
app.set('views', './views');
app.set('view engine', 'pug');

//use req.body in express js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', (req, res) => res.render("index"));

// user page
app.use("/users",userRoutes);

// start server with port
app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`));