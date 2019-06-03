//REQUIRED
//--------------------------------
var express=require("express"),
app= express(),
bodyParser=require("body-parser"),
port = 3000;
methodOverride=require("method-override");



//OTHER
//--------------------------
app.use(express.static("public"));


//HOME PAGE ROUTE
//---------------------------------
app.get("/", function(req, res){ //takes u to the index (home page)
    
    res.render("home.ejs");
});

//RESUME
//---------------------------------
app.get("/resume", function(req, res){ //takes u to the index (home page)
    
    res.render("resume.ejs");
});

//PORTFOLIO
//-----------------------------
app.get("/portfolio", function(req, res){ //takes u to the index (home page)
    
    res.render("portfolio.ejs");
});

//CONTACT
//-----------------------------
app.get("/contact", function(req, res){ //takes u to the index (home page)
    
    res.render("contact.ejs");
});



app.listen(port, () => console.log('working')
);
