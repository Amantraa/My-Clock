function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke("blue");
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("red");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke("green");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("blue");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("red");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("green");
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  push();
  fill("yellow");
  noStroke();
  rotate(90);
  textSize(30);
  textAlign(CENTER);
  text(hr + ':' + mn + ':' + sc, 10, 190);
  pop();

  }