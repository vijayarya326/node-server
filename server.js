const express = require('express');
const  hbs = require('hbs');

var app =express();
hbs.registerPartials(__dirname+'/views/partials');


hbs.registerHelper('currentYear', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
}); 
//Register Coustom Middleware
app.use((req, res, next)=>{ 
    var now = new Date().toDateString();
    console.log("Start Time : ", now );
    console.log("Method : ", req.method);
    console.log("URL : ",  req.url);
    next(); 
});


app.use(express.static( __dirname+"/public/"));
app.set('view engine', 'hbs');

//Maintenance Middleware
// app.use((req, res, next)=>{
//     res.render('maintenance.hbs')
// });

app.set('view engine', 'hbs');
app.use(express.static( __dirname+"/public/"));

app.get('/', (req, res)=>{
res.render('home.hbs',{
  pageTitle:"Home Page",
  welcomeMessage :"Welcome to the Home Page"
});
});

app.get("/about", (req, res)=>{
 // res.send("<h1>This is About Page</h1>")
    res.render('about.hbs',{
        pageTitle:"About Page"
    });
})
app.get("/bad", (req, res)=>{
  res.send({"errorMessage":"Unable to handle request"});
})
app.listen(3000, ()=>{
    console.log("Server Is Running on PORT: 3000");
});
