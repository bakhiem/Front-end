var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var slide = document.getElementById("con")
n2.onclick = function(){
	slide.classList.add("left1")
	this.classList.add("hidden")
	n1.classList.remove("hidden")
}
n1.onclick = function(){
	slide.classList.remove("left1")
	n2.classList.remove("hidden")
	this.classList.add("hidden")
}
