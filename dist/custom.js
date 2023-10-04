"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".accordion-button");

  // Show the content of the first item by default
  var firstContent = buttons[0].previousElementSibling;
  firstContent.classList.add("active");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var content = this.previousElementSibling;

      // Hide all content sections
      document.querySelectorAll(".accordion-content").forEach(function (item) {
        item.classList.remove("active");
      });

      // Show the content of the clicked item
      content.classList.toggle("active");
    });
  });
});
var carousel = document.querySelector('.carousel');
var items = document.querySelectorAll('.carousel-item');
var itemWidth = items[0].offsetWidth; // Largeur d'un élément
var numItems = items.length; // Nombre d'éléments
var visibleItems = 4; // Nombre d'éléments visibles à la fois
var totalWidth = itemWidth * numItems; // Largeur totale du carrousel
var currentIndex = 0;
function showItem(index) {
  var translateX = -(index * itemWidth) + 'px';
  carousel.style.transform = "translateX(".concat(translateX, ")");
}
function autoAdvance() {
  currentIndex = (currentIndex + 1) % (numItems - visibleItems + 1);

  // Si nous atteignons la fin du carrousel, réinitialisez la position à 0
  if (currentIndex === numItems - visibleItems) {
    currentIndex = 0;
    showItem(currentIndex);
    setTimeout(function () {
      currentIndex = 1;
      showItem(currentIndex);
    }, 0);
  } else {
    showItem(currentIndex);
  }
}

// Automatically advance to the next item every 3 seconds (adjust the interval as needed)
setInterval(autoAdvance, 3000);

// Initial display
showItem(currentIndex);