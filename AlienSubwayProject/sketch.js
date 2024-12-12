// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hoverSound = document.getElementById('hover-sound');
  const image = document.getElementById('main-image');

  image.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  image.addEventListener('mouseleave', () => {
    hoverSound.pause();
  });
});
