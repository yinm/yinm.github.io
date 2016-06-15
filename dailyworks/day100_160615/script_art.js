var x, y, r;

function setup() {
  createCanvas(480, 240);
  noStroke();
  background('skyblue');
}

function draw() {
  x = random(width);
  y = random(height);
  if (random() > 0.9) {
    r = random(50, 50);
  }
  else {
    r = random(10, 30);
  }
  fill(random(255), random(255), random(255), random(30, 250));
  ellipse(x, y, r, r);
}
