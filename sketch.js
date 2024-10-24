function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  lapis();
  noStroke();
  fill(150,0,0);
}

function lapis(){
    if (mouseIsPressed){
    rect(mouseX, mouseY, 10, 10);
    }
}
