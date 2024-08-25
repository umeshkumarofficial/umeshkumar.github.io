$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
});

document.getElementById("education-btn").addEventListener("click", function () {
  document.getElementById("education-content").style.display = "block";
  document.getElementById("about-content").style.display = "none";
  this.classList.add("active");
  document.getElementById("about-btn").classList.remove("active");
});

document.getElementById("about-btn").addEventListener("click", function () {
  document.getElementById("education-content").style.display = "none";
  document.getElementById("about-content").style.display = "block";
  this.classList.add("active");
  document.getElementById("education-btn").classList.remove("active");
});
