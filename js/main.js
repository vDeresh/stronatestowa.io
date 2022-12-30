document.addEventListener('scroll', function() {
  var portfolioSection = document.querySelector('#portfolio');
  var portfolioRect = portfolioSection.getBoundingClientRect();
  var portfolioTop = portfolioRect.top;
  var portfolioBottom = portfolioRect.bottom;
  var navLinks = document.querySelectorAll('nav a');
  if (portfolioTop >= 0 && portfolioBottom <= window.innerHeight) {
    navLinks.forEach(function(link) {
      link.classList.remove('ostr');
    });
    document.querySelector('a[href="#portfolio"]').classList.add('ostr');
  } else {
    navLinks.forEach(function(link) {
      link.classList.remove('ostr');
    });
    document.querySelector('a[href="#stronaglowna"]').classList.add('ostr');
  }
});

window.onscroll = function() {
var scrollTop = document.documentElement.scrollTop;

if (window.matchMedia("(max-width: 1080px) and (max-height: 2400px)").matches) {

  if (scrollTop > 66) {
  document.querySelector("nav").style.top = "18px";
  document.querySelector("nav").style.left = "18px";
  document.querySelector("nav").style.right = "18px";
  document.querySelector("nav").style.borderRadius = "140px";
} else {
  document.querySelector("nav").style.top = "0";
  document.querySelector("nav").style.left = "0";
  document.querySelector("nav").style.right = "0";
  document.querySelector("nav").style.borderRadius = "0px";
}
}
else {
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

/* var previousScroll = 0;

window.onscroll = function() {
  var currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    // Przewijanie w dół
    document.querySelector("nav").style.top = "-116px";
  } else {
    // Przewijanie w górę
    document.querySelector("nav").style.top = "0";
  }

  previousScroll = currentScroll;
}; */