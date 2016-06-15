var angle = 0;
var r = 30;

var slider;
var button;

function setup() {
  createCanvas(480, 240);
  background('green');
  noStroke();

  slider = createSlider(0, 100, 30);
  slider.position(40, 70);

  button = createButton('clear!');
  button.position(10, 90);
  button.mousePressed(function() {
    background('green');
  });
}

function draw() {
  r = slider.value();
  push();
  translate(width/2, height/2);
  x = sin(radians(angle)) * r;
  y = cos(radians(angle)) * r;
  ellipse(x, y, 10, 10);
  pop();
  angle += 2;
  r += 0.1;
}
