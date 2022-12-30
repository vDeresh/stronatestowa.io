window.onscroll = function() {
var scrollTop = document.documentElement.scrollTop;

if (scrollTop > 66) {
  document.querySelector("nav").style.top = "6px";
  document.querySelector("nav").style.left = "6px";
  document.querySelector("nav").style.right = "6px";
  document.querySelector("nav").style.borderRadius = "50px";
  document.querySelector("nav img").style.borderRadius = "48px";
  document.querySelector("nav img").style.marginLeft = "20px";

} else {
  document.querySelector("nav").style.top = "0";
  document.querySelector("nav").style.left = "0";
  document.querySelector("nav").style.right = "0";
  document.querySelector("nav").style.borderRadius = "0px";
  document.querySelector("nav img").style.borderRadius = "0px";
  document.querySelector("nav img").style.marginLeft = "10px";
}
};

/* var links = document.querySelectorAll("nav a");
links.forEach(function(link) {

  link.addEventListener("click", function(event) {

    event.preventDefault();

    var href = this.getAttribute("href");

    document.body.classList.add("fade-out");

    setTimeout(function() {
      window.location = href;
    }, 500);
  });
}); */

document.querySelector('a[href="#section-1"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#section-1').scrollIntoView({
    behavior: 'smooth'
  });
  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function(link) {
    link.classList.remove("ostr");
  });
  this.classList.add("ostr");
});

var previousScroll = 0;

window.onscroll = function() {
  var currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    // Przewijanie w dół
    document.querySelector("nav").style.top = "-50px";
  } else {
    // Przewijanie w górę
    document.querySelector("nav").style.top = "0";
  }

  previousScroll = currentScroll;
}