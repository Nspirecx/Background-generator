var h3 = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gr");

console.log(h3);
console.log(c1);
console.log(c2);

function SG()  {
	body.style.background = "linear-gradient(to right, "+ c1.value + ", " + c2.value + ")";
}

c1.addEventListener("input", SG)

c2.addEventListener("input", SG)
