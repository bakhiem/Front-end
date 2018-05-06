document.addEventListener("DOMContentLoaded",function(){
	var button = document.getElementsByClassName("button")
	var button2 = document.getElementsByClassName("button2")
	var black = document.getElementsByClassName("backgr-black")
	var menuLeft = document.getElementsByClassName("menu-left")
	var content = document.getElementsByClassName("noidung")
	black[0].onclick= function(){
		this.classList.remove("show")
		menuLeft[0].classList.add("move-left")
		content[0].classList.remove("move-right")
		content[0].classList.remove("open-door")
	}
	button[0].onclick = function(){
		menuLeft[0].classList.remove("move-left")
		black[0].classList.add("show")
		content[0].classList.add("move-right")
	}
	button2[0].onclick = function(){
		menuLeft[0].classList.remove("move-left")
		black[0].classList.add("show")
		content[0].classList.add("open-door")
	}
},false)