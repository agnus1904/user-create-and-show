const express = require('express');
const app = express();
const port = 3000;

var userRoutes = require("./route/user.route");
// use pug engine
app.set('views', './views');
app.set('view engine', 'pug');

//use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render("index"));

app.use("/users",userRoutes);

app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`));