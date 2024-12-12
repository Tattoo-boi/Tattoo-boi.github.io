document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-sound");
    const audio = new Audio("pics/hover-effect.mp3");

    playButton.addEventListener("click", () => {
        audio.play();
    });
});
