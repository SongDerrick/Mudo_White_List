const path = require("path"); // pathing

const express = require("express"); // requiring express.js
const bodyParser = require("body-parser"); // requiring body parser to get POST data
const expressHbs = require('express-handlebars'); // requiring handle bars

const adminData = require("./routes/admin"); // requring admin.js -> get / post requests handled

const shopRoutes = require("./routes/shop"); // requring shop.js -> get / post requests handled


const app = express(); // app = express();

//app.set('view engine', 'pug');
//app.set('views', 'views'); // templating with pug

app.engine('hbs',expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

// app.use("/", (req, res, next)=>{
//    console.log("This always execute");
//    next();
// });

app.use(bodyParser.urlencoded({extended: false})); 
// using body parser to get info from POST request
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.routes);

app.use(shopRoutes); // order matters

app.use("/", (req, res, next)=>{
    //res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
    res.status(404).render('404',{pageTitle: 'Page Not Found'})
});

app.listen(3000);