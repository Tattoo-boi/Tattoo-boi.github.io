// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', () => {
    const playSoundBtn = document.getElementById('play-sound');
    let audio = new Audio('pics/ambient-sound.mp3');

    playSoundBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playSoundBtn.textContent = 'Pause Ambient Sound';
        } else {
            audio.pause();
            playSoundBtn.textContent = 'Play Ambient Sound';
        }
    });
});
