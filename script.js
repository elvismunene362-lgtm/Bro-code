//console.log(`HEY ESTHER`);
//window.alert(`This is an alert`);
//document.getElementById("MCP").textContent=`POPOS is FAST`;
//let age =10;
//console.log(`you are ${age} years old.`);
/*let fullname = "Elvis Munene";
let age = 19;
let isStudent =true;
document.getElementById("p1").textContent = `My name is ${fullname}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Am i a student? ${isStudent}`;*/
/*let userName;
document.getElementById("mysubmit").onclick = function(){
    userName = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `hello ${userName}`
}*/
/*const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}*/
const decr = document.getElementById("decr");
const reset = document.getElementById("reset");
const incr= document.getElementById("incr");
const countLA = document.getElementById("countLA");
let count =0;
incr.onclick = function(){
    count++;
    countLA.textContent = count;
}
decr.onclick = function(){
    count--;
    countLA.textContent = count;
}
reset.onclick = function(){
    count=0;
    countLA.textContent = count;
}