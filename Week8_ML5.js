let faceMesh;
let video;
let randomEmoji;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
  
  let emojiOptions = ['🎃', '👻', '💀'];
  randomEmoji = random(emojiOptions);
  
}

function draw() {
  image(video, 0, 0, width, height);
  tint(250,70, 45);
  brightness(100);
  filter(POSTERIZE, 13);

  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];

 
    let xMin = Math.min(...face.keypoints.map(p => p.x));
    let yMin = Math.min(...face.keypoints.map(p => p.y));
    let xMax = Math.max(...face.keypoints.map(p => p.x));
    let yMax = Math.max(...face.keypoints.map(p => p.y));

    let faceWidth = xMax - xMin;
    let faceHeight = yMax - yMin;
    let emojiSize = Math.max(faceWidth, faceHeight); 

    
    textSize(emojiSize);
    textAlign(CENTER, CENTER);
    fill(255); 
    text(randomEmoji, (xMin + xMax) / 2, (yMin + yMax) / 2);
  }
}


function gotFaces(results) {
  
  faces = results;
}
