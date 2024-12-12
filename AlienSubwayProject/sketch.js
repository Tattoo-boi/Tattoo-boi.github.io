function setup() {
    let canvas = createCanvas(windowWidth, 300);
    canvas.parent("hero");
    frameRate(30);
}

function draw() {
    background(0);
    fill(255);
    noStroke();
    let x = frameCount % width;

    // Subway animation (moving rectangle)
    rect(x, height / 2 - 50, 100, 100);
    fill(255, 0, 0);
    textSize(20);
    text("Subway Train Passing", x + 10, height / 2 - 60);
}
