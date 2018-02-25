const express = require('express');
const  hbs = require('hbs');

var app =express();
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static( __dirname+"/public/"));
app.set('view engine', 'hbs');


app.get('/', (req, res)=>{
res.render('home.hbs',{
  pageTitle:"Home Page",
  currentYear: new Date().getFullYear(),
  welcomeMessage :"Welcome to the Home Page"
});
});

app.get("/about", (req, res)=>{
 // res.send("<h1>This is About Page</h1>")
    res.render('about.hbs',{
        pageTitle:"About Page", 
        currentYear: new Date().getFullYear()
    });
})
app.get("/bad", (req, res)=>{
  res.send({"errorMessage":"Unable to handle request"});
})
app.listen(3000, ()=>{
    console.log("Server Is Running on PORT: 3000");
});
