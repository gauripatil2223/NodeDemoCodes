// // const http = require('http');
// // const server= http.createServer(()=>{});
// // server.listen(5000);
// // console.log("Server listining on port 5000");
// var arr = [];
// function add(){
//     var a= document.getElementById("a").nodeValue;
//      arr.push(a);
// }
 function printUser(callback)
 {
    
    setTimeout(function(){
         console.log("I am Gauri Patil");
         callback();
    },3000);

}
 function printMy ()
{
    
        console.log("I am Software ENgineer");
 
}

printUser(printMy);

