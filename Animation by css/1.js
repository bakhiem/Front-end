var n1 = document.getElementById("button")
// n1.addEventListener('click',function() {
//   console.log("ajhih")
// });
var big = document.querySelector(".big")
var state = 0;
n1.onclick = function() {
    if (state == 0) {
        big.classList.add("rotate")
        state = 1;
    } else {
        big.classList.remove("rotate")
        state = 0;
    }

}