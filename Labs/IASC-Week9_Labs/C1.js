var start= new Date();

function stopTime(){
    var end= new Date();
    var time= (end.getTime()-start.getTime())/1000;
    alert("You have been on the page for: "+time+" seconds")
}