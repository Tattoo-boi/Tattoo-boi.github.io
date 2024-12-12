// p5.js animation for aliens
function setup() {
    let canvas = createCanvas(windowWidth, 300);
    canvas.parent('alienCanvas');
    background(0);
}

function draw() {
    noStroke();
    fill(random(100, 255), random(100, 255), random(100, 255));
    ellipse(random(width), random(height), random(10, 50));
}
