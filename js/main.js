window.onscroll = function() {
var scrollTop = document.documentElement.scrollTop;

if (scrollTop > 66) {
  document.querySelector("nav").style.top = "6px";
  document.querySelector("nav").style.left = "6px";
  document.querySelector("nav").style.right = "6px";
  document.querySelector("nav").style.borderRadius = "20px";
  document.querySelector("nav img").style.borderRadius = "16px";

} else {
  document.querySelector("nav").style.top = "0";
  document.querySelector("nav").style.left = "0";
  document.querySelector("nav").style.right = "0";
  document.querySelector("nav").style.borderRadius = "0px";
  document.querySelector("nav img").style.borderRadius = "0px";
}
};

var links = document.querySelectorAll("nav a");
links.forEach(function(link) {

  link.addEventListener("click", function(event) {

    event.preventDefault();

    var href = this.getAttribute("href");

    document.body.classList.add("fade-out");

    setTimeout(function() {
      window.location = href;
    }, 500);
  });
});