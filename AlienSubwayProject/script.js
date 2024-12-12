document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-sound");
    const audio = new Audio("pics/hover-effect.mp3");

    playButton.addEventListener("click", () => {
        audio.play();
    });
});
// JavaScript to detect image visibility and add fade-in effect
window.addEventListener('scroll', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      image.classList.add('visible');
    }
  });
});
