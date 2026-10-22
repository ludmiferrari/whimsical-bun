function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,255,15);

  //blendMode(DIFFERENCE)

  let posX = 0
  let sizeX = 30
  let posY = 30


  for (let i = 0; i < 15; i ++){
    for (let j = 0; j < 15; j ++){

      stroke(58,100,225);
      fill(0,0,255,50);
    

      circle(posY * j + cos(frameCount * 0.1 +j) * 10, posX + i*30, sizeX + cos(frameCount * 0.1 +i) * 10)

      stroke(208,200,45);
      fill(255,0,0);

      circle(posY * j + sin(frameCount * 0.1 +j) * 10, posX + i*30, sizeX-10 + sin(frameCount * 0.1 +i) * 10  )

      
      
    }

    
    
  }

  
}