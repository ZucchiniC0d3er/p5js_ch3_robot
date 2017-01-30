function setup() {
  createCanvas(720, 480);
  strokeWeight(12);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  //neck
  stroke(102);
  //line(266, 257, 266, 122);
  //line(276, 257, 276, 162);
  line(286, 257, 286, 162);

//arms (x1, y1, x2, y2)
  line(260, 320, 50, 240);
  //Antennae
  line(276, 155, 246, 112);
  line(276, 155, 306, 56);
  line(276, 155, 342, 170);

  // body
  noStroke();
  fill('#3399ff');
  ellipse(264, 377, 33, 33);
  fill('#0066ff');
  rect(219, 257, 90, 120);
  fill(102);
  rect(219, 274, 90, 6);

  //head
  //fill('#000099');
  fill(0, 0, 153, 160);
  ellipse(276, 155, 45, 45);
  fill(255);
  ellipse(288, 150, 14, 14);
  fill(0);
  ellipse(288, 150, 3, 3);
  fill('#99ccff');
  ellipse(263, 148, 5, 5);
  ellipse(296, 130, 4, 4);
  ellipse(305, 162, 3, 3);
}
// TODO lef off at variables
