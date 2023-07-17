// jshint esversion:6

// console.log(module);

//exported content will be send to other files where this module is accessed 
// module.exports="hello World";

// to export single function
// module.exports=getDate;

// to export multiple fxn

// module.exports.getDate=getDate;


// function getDate(){
// let today = new Date();
//     let currentDay = today.getDay();
//     // let day = "";

//     let options={
//         weekday :"long" ,  //long==full name of day or month
//         day:"numeric",
//         month:"long"
//     };
  

//     //to display details in string format
//     // let day=today.toLocaleDateString("en-US",options);

//     // return day;

//     return today.toLocaleDateString("en-US",options);
// }


// // exporting getDay fxn
// module.exports.getDay=getDay;

// function getDay(){
//     let today = new Date();
//         let currentDay = today.getDay();
//         // let day = "";
    
//         let options={
//             weekday :"long" ,  //long==full name of day or month
            
//         };
      
    
//         //to display details in string format
//         // let day=today.toLocaleDateString("en-US",options);
    
//         // return day;

//         return today.toLocaleDateString("en-US",options);
//     }

    // console.log(module.exports);




   
   
    // *********** other way of exporting functions*************


    
    exports.getDate=function(){

        
    // module.exports.getDate=function(){
      
        // module.exports.getDate = exports.getDate

    let today = new Date();
        let currentDay = today.getDay();
        // let day = "";
    
        let options={
            weekday :"long" ,  //long==full name of day or month
            day:"numeric",
            month:"long"
        };
      
    
        //to display details in string format
        // let day=today.toLocaleDateString("en-US",options);
    
        // return day;
    
        return today.toLocaleDateString("en-US",options);
    }
    
    
    // exporting getDay fxn
    module.exports.getDay=function (){
        let today = new Date();
            let currentDay = today.getDay();
            // let day = "";
        
            let options={
                weekday :"long" ,  //long==full name of day or month
                
            };
          
        
            //to display details in string format
            // let day=today.toLocaleDateString("en-US",options);
        
            // return day;
    
            return today.toLocaleDateString("en-US",options);
        } 