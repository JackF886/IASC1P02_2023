var age= Number (prompt("How old are you?"));

var d= new Date();
var y= d.getFullYear();
console.log(y);

document.getElementById("year").innerHTML=String(y-age);