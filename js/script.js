const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a");

menuButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        mobileMenu.classList.add("hidden");
    });
});