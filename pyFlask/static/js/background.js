document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.background-slideshow img');
    let current = 0;
  
    if (slides.length > 0) {
      slides[current].classList.add('active');
  
      setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
      }, 6000); // 6 seconds per image
    }
  });
  