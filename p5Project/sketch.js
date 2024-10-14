function setup() {
  createCanvas(600, 600);
  background(random(0,30));
  noFill();
  strokeWeight(1.5);

for (let i = 0; i < 555; i++) {
    let coordinateX1 = random (-500, 500);
    let coordinateY1 = random (500, 500);
    let anchorX2 = random (-100, 650);
    let anchorY2 = random (-100, 650);
    let coordinateX3 = random (200, 400);
    let coordinateY3 = random (100,600);

    stroke(255, 0, 0, 25);
    curve(coordinateX1, coordinateY1, 300, 300, anchorX2, anchorY2, coordinateX3, coordinateX3);

}
  
  for (let i = 0; i < 555; i++) {
    let coordinateX1 = random (-300, 400);
    let coordinateY1 = random (-200, 500);
    let anchorX2 = random (-100, 650);
    let anchorY2 = random (-100, 650);
    let coordinateX3 = random (300, 400);
    let coordinateY3 = random (100,600);

     
  stroke(255, 244, 0, 20); 
  curve(coordinateX1, coordinateY1, 300, 300, anchorX2, anchorY2, coordinateX3, coordinateX3);
    
}
  for (let i = 0; i < 555; i++) {
    let coordinateX1 = random (-300, 500);
    let coordinateY1 = random (-250, 400);
    let anchorX2 = random (-100, 650);
    let anchorY2 = random (-100, 650);
    let coordinateX3 = random (200, 400);
    let coordinateY3 = random (100,600);

     
  stroke(255, 255, 255, 10); 
  curve(coordinateX1, coordinateY1, 300, 300, anchorX2, anchorY2, coordinateX3, coordinateX3);
}
  
  for (let i = 0; i < 555; i++) {
    let coordinateX1 = random (-300, 500);
    let coordinateY1 = random (-200, 500);
    let anchorX2 = random (-200, 600);
    let anchorY2 = random (-200, 550);
    let coordinateX3 = random (-200, 400);
    let coordinateY3 = random (-100,600);

     
  stroke(255, 198, 207, 5); 
  curve(coordinateX1, coordinateY1, 300, 300, anchorX2, anchorY2, coordinateX3, coordinateX3);
}
   for (let i = 0; i < 555; i++) {
    let coordinateX1 = random (-300, 500);
    let coordinateY1 = random (-200, 500);
    let anchorX2 = random (-200, 500);
    let anchorY2 = random (-200, 550);
    let coordinateX3 = random (-200, 400);
    let coordinateY3 = random (-100,600);

     
  stroke(233, 82, 192, 1); 
  curve(coordinateX1, coordinateY1, 300, 300, anchorX2, anchorY2, coordinateX3, coordinateX3);
}
}

function draw(){
 

}