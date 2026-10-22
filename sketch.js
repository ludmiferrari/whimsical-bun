function setup() {
  // Crea el canvas usando el ancho y alto de la ventana actual
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 255, 15);

  let posX = 0;
  let sizeX = 30;
  let posY = 30;

  for (let i = 0; i < 45; i++) {
    for (let j = 0; j < 45; j++) {
      stroke(58, 100, 225);
      fill(0, 0, 255, 50);

      circle(posY * j + cos(frameCount * 0.1 + j) * 10, posX + i * 30, sizeX + cos(frameCount * 0.1 + i) * 10);

      stroke(208, 200, 45);
      fill(255, 0, 0);

      circle(posY * j + sin(frameCount * 0.1 + j) * 10, posX + i * 30, sizeX - 10 + sin(frameCount * 0.1 + i) * 10);
    }
  }
}

// Esta función se ejecuta automáticamente si cambias el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}