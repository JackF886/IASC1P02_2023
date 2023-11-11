function add(){
    var n1= Number (document.getElementById("n1").value);
    console.log(n1);
    var n2= Number (document.getElementById("n2").value);
    console.log(n2);
    var total= n1+n2;
    console.log(total);

    document.getElementById("out").innerHTML=String(total);
}

function sub(){
    var n1= Number (document.getElementById("n1").value);
    console.log(n1);
    var n2= Number (document.getElementById("n2").value);
    console.log(n2);
    var total= n1-n2;
    console.log(total);

    document.getElementById("out").innerHTML=String(total);
}

function mul(){
    var n1= Number (document.getElementById("n1").value);
    console.log(n1);
    var n2= Number (document.getElementById("n2").value);
    console.log(n2);
    var total= n1*n2;
    console.log(total);

    document.getElementById("out").innerHTML=String(total);
}

function div(){
    var n1= Number (document.getElementById("n1").value);
    console.log(n1);
    var n2= Number (document.getElementById("n2").value);
    console.log(n2);
    var total= n1/n2;
    console.log(total);

    document.getElementById("out").innerHTML=String(total);
}