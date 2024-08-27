// Hide and Show Desktop Header

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// Mobile header
let toggleBtn = document.querySelector(".togglebtn");
let toggleBtn1 = document.querySelector(".tbtn1");
let toggleBtn2 = document.querySelector(".tbtn2");
let hamburger =document.querySelector(".hamburger");
let x = 1;
toggleBtn.addEventListener("click", () => {
  x++;
  if (x % 2 == 0) {
    toggleBtn1.classList.remove("d-block");
    toggleBtn1.classList.add("d-none");
    toggleBtn2.classList.remove("d-none");
    toggleBtn2.classList.add("d-block");
    hamburger.style.transform = "translate(0%)"
  } else {
    toggleBtn2.classList.remove("d-block");
    toggleBtn2.classList.add("d-none");
    toggleBtn1.classList.remove("d-none");
    toggleBtn1.classList.add("d-block");
    hamburger.style.transform = "translate(-100%)"
  }
});