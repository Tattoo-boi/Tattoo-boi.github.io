function setup() {
  let canvas = createCanvas(300, 300);
  canvas.parent('.placeholder'); // Attach the canvas to the placeholder div
  noStroke();
}

function draw() {
  background(0);
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 20, 20);
}
