document.addEventListener("DOMContentLoaded", function() {
    var buttonNext = document.querySelector(".buttons a.right")
    var buttonPrev = document.querySelector(".buttons a.left")
    var slides = document.querySelectorAll(".slide")
    var state = 1;
    var slideContinue;
    function moveSlide(button) {
        if (state == 0) return;
        state = 0;
        var stateA = 0;
        var slideActive = document.querySelector(".present")
        for (var local = 0; slideActive = slideActive.previousElementSibling; local++) {}
        if (button == "next") {
            slideContinue = (local == slides.length - 1) ? slides[0] : slides[local + 1];
        } else if (button == "prev") {
            slideContinue = (local == 0) ? slides[slides.length - 1] : slides[local - 1];
        }
        slideContinue.classList.add((button == "next") ? "active" : "activePre" )
        slides[local].classList.add((button == "next") ? "hidden" : "hiddenPre" )
        slides[local].addEventListener("webkitAnimationEnd", function() {
            this.classList.remove("hidden")
            this.classList.remove("hiddenPre")
            this.classList.remove("present")
            stateA++;
            state = (stateA == 2) ? 1 : state   
        });
        slideContinue.addEventListener("webkitAnimationEnd", function() {
            this.classList.remove("active");
            this.classList.remove("activePre");
            this.classList.add("present")
            stateA++;
            state = (stateA == 2) ? 1 : state
        });
    }
    buttonNext.onclick = function() {
        moveSlide("next")
    }
    buttonPrev.onclick = function() {
        moveSlide("prev")
    }
}, false);