// sketch.js
let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(5, 15),
      speedX: random(-1, 1),
      speedY: random(-1, 1)
    });
  }
}

function draw() { 
  background(0, 20);

  particles.forEach((p) => {
    fill(0, random(100, 255), 255, 150);
    ellipse(p.x, p.y, p.size);
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
  });
}
