let snowColor;
let skyColor;
let cloudPositions = [];

function setup() {
  createCanvas(400, 400);
  snowColor = color(255); // Initial snow color
  skyColor = color(135, 206, 250); // Initial sky color

  // Initialize cloud positions
  for (let i = 0; i < 5; i++) {
    cloudPositions.push({ x: random(width), y: random(50, 150) });
  }
}

function draw() {
  // Map mouseX to day-to-night transition
  let dayToNight = map(mouseX, 0, width, 0, 1); // 0 for day, 1 for night

  // Sky color transitions smoothly
  skyColor = lerpColor(color(135, 206, 250), color(25, 25, 112), dayToNight);
  background(skyColor);

  // Calculate the sun/moon's position on a circular arc
  let angle = map(mouseX, 0, width, -PI / 2, PI / 2); // Arc from sunrise to sunset
  let celestialX = width / 2 + cos(angle) * 150;
  let celestialY = height / 2 + sin(angle) * 100;

  // Sun and Moon
  let celestialColor = lerpColor(color(255, 204, 0), color(240, 240, 240), dayToNight); // Sun to moon
  fill(celestialColor);
  noStroke();
  ellipse(celestialX, celestialY, 60, 60); // Draw celestial body

  // Draw clouds
  drawClouds(dayToNight);

  // Draw Mount Fuji
  drawMountain();

  // Draw trees at the base of Mount Fuji
  drawTrees();

  // Stars appear at night
  if (dayToNight > 0.5) drawStars(dayToNight);
}

// Function to draw clouds
function drawClouds(dayToNight) {
  let cloudColor = lerpColor(color(255), color(100, 100, 100), dayToNight); // White clouds during day, gray at night
  fill(cloudColor);
  noStroke();

  for (let i = 0; i < cloudPositions.length; i++) {
    let cloud = cloudPositions[i];
    ellipse(cloud.x, cloud.y, 60, 30);
    ellipse(cloud.x + 20, cloud.y - 10, 50, 25);
    ellipse(cloud.x - 20, cloud.y - 10, 50, 25);

    // Move clouds
    cloud.x += 0.5;
    if (cloud.x > width + 50) cloud.x = -50; // Wrap around
  }
}

// Function to draw a realistic Mount Fuji
function drawMountain() {
  noStroke();

  // Base of the mountain
  fill(80, 80, 120); // Mountain color
  triangle(200, 100, 30, 370, 370, 370);

  // Snowcap on Mount Fuji
  fill(snowColor);
  beginShape();
  vertex(200, 100);
  vertex(170, 200);
  vertex(230, 200);
  endShape(CLOSE);

  // Interactive snow
  if (mouseIsPressed) {
    snowColor = color(random(200, 255), random(200, 255), random(255));
  } else {
    snowColor = color(255); // Reset snow to white
  }
}

// Function to draw trees at the base of the mountain
function drawTrees() {
  for (let x = 50; x < width; x += 30) {
    fill(34, 139, 34); // Green tree color
    triangle(x, 340, x - 10, 370, x + 10, 370); // Tree top
    fill(139, 69, 19); // Brown tree trunk
    rect(x - 2, 370, 4, 10);
  }
}

// Function to draw stars that appear at night
function drawStars(brightness) {
  let starCount = map(brightness, 0.5, 1, 0, 100); // More stars appear as night progresses
  noStroke();
  fill(255, 255, 255, 200);

  for (let i = 0; i < starCount; i++) {
    let x = random(width);
    let y = random(height / 2); // Stars only in upper half
    ellipse(x, y, 2, 2);
  }
}
