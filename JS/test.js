function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function TekenKerk(hoogte) {
  noStroke();
  fill('purple');
  rect(0,350,75,hoogte);
  fill('white');
  triangle(0,350,75,350,37,310);
}

function draw() {
  noStroke();
  TekenKerk(300);
  translate(100,-100);
  TekenKerk(275);
  translate(100,-100);
  TekenKerk(350);

}

