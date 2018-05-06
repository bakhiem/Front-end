var button = document.querySelectorAll(".button li")
var ul = document.querySelector(".content ul")
for (var i = 0; i < button.length; i++) {

    button[i].onclick = function() {
        for (var k = 0; k < button.length; k++) {
            button[k].classList.remove("active")
        }
        this.classList.add("active")
        var active1 = document.querySelector(".active")
        for (var location = 0; active1 = active1.previousElementSibling; location++) {

        }
        for (var l = 0; l < button.length; l++) {
        	ul.classList.remove("so" + l)
        }
        ul.classList.add("so" + location)
    }

}