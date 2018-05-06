document.addEventListener("DOMContentLoaded", function() {
    var li = document.querySelectorAll(".chuyenslide li")
    var slides = document.querySelectorAll(".slides ul li")
     var thoigian = setInterval(function() { autoslide() },5000)
    for (var i = 0; i < li.length; i++) {

        li[i].onclick = function() {
        	 clearInterval(thoigian)
            for (var l = 0; l < li.length; l++) {
                li[l].classList.remove("slide-active")
            }
            this.classList.add("slide-active")
            var buttonActive = this;
            for (var location = 0; buttonActive = buttonActive.previousElementSibling; location++) {

            }
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active")
                slides[location].classList.add("active")
            }

        }
    }
  
 autoslide()
    function autoslide() {
       
      

            var presentSlide = document.querySelector(".slides ul li.active")

            for (var locationslide = 0; presentSlide = presentSlide.previousElementSibling; locationslide++) {
            }

             for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active")
                li[i].classList.remove("slide-active")
            }
            if(locationslide == slides.length - 1){
            	slides[0].classList.add("active")
            	li[0].classList.add("slide-active")
            }
            else{slides[locationslide+1].classList.add("active")
            	li[locationslide+1].classList.add("slide-active")
        }

       
    }
}, false)