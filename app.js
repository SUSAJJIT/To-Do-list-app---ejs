// npm i express
// npm i body-parser
// npm i ejs
// npm i mongoose
// node app.js -----command to run app.js file in localhost
//jshint esversion:6

//EJS==Embeded javascript

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const ejsLint = require("ejs-lint");

// to access local module
const date= require(__dirname + "/date.js");

// will only print--[Function: getDate],don't call fxn "getDate"
// console.log(date);

// call fxn [date()] , print -- Tuesday, March 7
// console.log(date());

// app initilisation
const app = express();

// to use "public" folder for static elements
app.use(express.static("public"));




//to define "item" globally 

// store single item with replacement

// var item ="";

// store multilpe items
var items= ["Buy Food","cook food","eat food"];

var workItems=[];




app.set('view engine', 'ejs');  //tells our app to use ejs as our view engine
// ejsLint(text, options);

// to grab value of different parameter from all files
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {

    //to check day is weekend or not

    // var today = new Date();
    // var currentDay = today.getDay();
    // // var day = "";

    // var options={
    //     weekday :"long" ,  //long==full name of day or month
    //     day:"numeric",
    //     month:"long"
    // };
  

    // //to display details in string format
    // var day=today.toLocaleDateString("en-US",options);

    // res.render("list",{       //to render from list.ejs file
    //     kindOfDay:day
    // });

    //to display day name using switch case

    // switch (currentDay) {
    //     case 0: 
    //     day="sunday";

    //         break;

    //     case 1: 
    //     day="Monday";

    //         break;

    //     case 2: 
    //     day="Tuesday";

    //         break;
    //     case 3: 
    //     day="wednesday";

    //         break;
    //     case 4: 
    //     day="thursday";

    //         break;
    //     case 5: 
    //     day="friday";

    //         break;

    //     case 6: 
    //     day="saturday";

    //         break;
    //     default:
    //         console.log("Error : current day ="+ currentDay);
    //         break;
    // }

        // if (currentDay == 6 || currentDay == 0) {
    //     // day = "weekend";
    //     res.send("yay! its weekend");

    //     // res.render("list",{kindOfDay:day});
    // } else {
    //     // day = "weekday";
    //     res.send("i have to work")
    // }

     //    res.send();
 
        //  when module contain single function
        // or we want to run all fxn inside module
        // let day=date();

        // for calling specific fxn{getdate()} inside module name "date"
        let day=date.getDate();
        // let day=date.getDay();


     //to render from list.ejs file

    res.render("list",{       
        listTitle:day,

        // passing variable "item"

        // newListItem:item,
          
        //passing an array 
        newListItem:items  
    });


     app.post("/",function(req,res){
        // to post the value of "newItme" from list.ejs to homepage
    //    var item = req.body.newItem;
       
        
    //    var item = req.body.newListItem;
       
       let item=req.body.newItem;
       if(req.body.list=="work"){
        
        workItems.push(item);
        res.redirect("/work")
       }else{

        items.push(item);
        res.redirect("/");
       }
       
    //    console.log(req.body);
    //     console.log(item);
        
        
        // to get data from server to webpage(error)
        // res.render("list",{newListItem:item});

                
        // to get data from server to webpage wiil give error bcz "item" 
        // is defined only for "post method" block 
        // fixed error by declaring "item" as global variable(no value assigned)
        

        //replaces last item with current,don't keep/add all items
        res.redirect("/")



     });

     app.get("/work",function(req,res){
        res.render("list",{listTitle:"work list",newListItem:workItems})

     });

     app.post("/work",function(req,res){

        //  console.log(req.body);
       
        // let item=req.body.newItem;
        // workItems.push(item);
        res.redirect("/work");
     })

     app.get("/about",function(req,res){
        res.render("about");

     });
     

    
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
