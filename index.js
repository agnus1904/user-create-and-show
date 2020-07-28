const express = require('express');
const app = express();
const port = 3000;

var a = [
    "abc",
    "abd",
    "abe"
];

app.set('views', './views');
app.set('view engine', 'pug');
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', (req, res) => res.render("index"));

app.get("/users", function(req,res){
    res.render("users/index",{lists: a});
});

app.listen(port, () => 
console.log(`Example app listening at http://localhost:${port}`));