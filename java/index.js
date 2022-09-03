console.log('hello');
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let orange = document.getElementById("orange");
let purple = document.getElementById("purple");
let btn = document.getElementById("dropbtn");

red.addEventListener("click", function(e){document.body.style.backgroundColor = "red"});
blue.addEventListener("click", function(){document.body.style.backgroundColor = "blue"});
green.addEventListener("click", function(){document.body.style.backgroundColor = "green"});
orange.addEventListener("click", function(){document.body.style.backgroundColor = "orange"});
purple.addEventListener("click", function(){document.body.style.backgroundColor = "purple"});


/* (TEST)green.addEventListener("click", function(){this.parentElement.style.display = "none"});
document.getElementById("green").reset();

*/


