let d = new Date();
var name = prompt("Please type your name here");
alert("Salutations, " + name + ". The time and day is " + d + ". Welcome!");

function showCoord(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}