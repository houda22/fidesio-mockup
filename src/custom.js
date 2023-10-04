document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");
  
    // Show the content of the first item by default
    const firstContent = buttons[0].previousElementSibling;
    firstContent.classList.add("active");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const content = this.previousElementSibling;
  
        // Hide all content sections
        document.querySelectorAll(".accordion-content").forEach(function (item) {
          item.classList.remove("active");
        });
  
        // Show the content of the clicked item
        content.classList.toggle("active");
      });
    });
  });
  
  
  
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  
  const itemWidth = items[0].offsetWidth; // Largeur d'un élément
  const numItems = items.length; // Nombre d'éléments
  const visibleItems = 4; // Nombre d'éléments visibles à la fois
  const totalWidth = itemWidth * numItems; // Largeur totale du carrousel
  let currentIndex = 0;
  
  function showItem(index) {
      const translateX = -(index * itemWidth) + 'px';
      carousel.style.transform = `translateX(${translateX})`;
  }
  
  function autoAdvance() {
      currentIndex = (currentIndex + 1) % (numItems - visibleItems + 1);
  
      // Si nous atteignons la fin du carrousel, réinitialisez la position à 0
      if (currentIndex === numItems - visibleItems) {
          currentIndex = 0;
          showItem(currentIndex);
          setTimeout(() => {
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
  
  
  