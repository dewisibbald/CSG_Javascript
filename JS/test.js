function setup() {
  canvas = createCanvas(600,300);
  canvas.parent('processing');
}

function draw() {
  noStroke();
  background('cyan');
  
  if (mouseY > 200) {
    fill('orange');
  }
  else {
    fill('yellow');
  }

  ellipse(width/2,200,200);
  fill('green');
  rect(0,200,600);

for (var n = 0; < aantal; n++) {
  tekenHuis();
  translate();
}

function tekenHuis {
  push();
  translate(40,100);
  fill('red');
  triangle(40,0,0,50,80,50);
  fill('grey');
  rect(0,50,80,80);
  pop();
  }
}

