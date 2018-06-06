var h3 = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gr");

console.log(h3);
console.log(c1);
console.log(c2);

c1.addEventListener("input", function() {
	body.style.background = "linear-gradient(to right, "+ c1.value + ", " + c2.value + ")";

})

c2.addEventListener("input", function() {
	body.style.background = "linear-gradient(to right, "+ c1.value + ", " + c2.value + ")";

})
