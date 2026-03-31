slideIndex = 1
let touchStartX = 0;
let touchEndX = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  // Minimum distance to count as swipe
  if (Math.abs(swipeDistance) < 50) return;

  if (swipeDistance < 0) {
    // Swipe left → next slide
    plusSlides(1);
  } else {
    // Swipe right → previous slide
    plusSlides(-1);
  }
}

function addEvents() {
  let burger = document.getElementById("menu-image");
  let overlay = document.getElementById("overlayMenu");
  let slider = document.querySelector(".slideshow-container");

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });


  burger.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });

}

function main() {
  showSlides(slideIndex);
  addEvents();
}

window.addEventListener("DOMContentLoaded", main);