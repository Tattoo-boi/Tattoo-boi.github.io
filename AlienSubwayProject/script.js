// Hover sound effect
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('main-image');
  const hoverSound = document.getElementById('hover-sound');
  const ambientSound = document.getElementById('ambient-sound');

  // Play hover sound
  image.addEventListener('mouseover', () => {
    hoverSound.play();
  });

  image.addEventListener('mouseout', () => {
    hoverSound.pause();
    hoverSound.currentTime = 0; // Reset sound
  });

  // Dynamic placeholder replacement
  const placeholder = document.querySelector('.placeholder');

  placeholder.addEventListener('click', () => {
    placeholder.innerHTML = `
      <img src="pics/photoshop-creation.jpg" alt="New Image" style="width: 100%; border-radius: 10px;">
    `;
    placeholder.style.border = 'none';
  });

  // Start ambient sound
  ambientSound.volume = 0.5; // Set volume to 50%
});
