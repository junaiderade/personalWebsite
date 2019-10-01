//REQUIRED
//--------------------------------
var express=require("express"),
app= express(),
bodyParser=require("body-parser"),
methodOverride=require("method-override");



//OTHER
//--------------------------
app.use(express.static("public"));


//HOME PAGE ROUTE
//---------------------------------
app.get("/", function(req, res){ //takes u to the index (home page)
    
    res.render("newHome.ejs");
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



app.listen(process.env.PORT || 3000, process.env.IP,  
    function(){console.log("server has started\n");} 
    );
