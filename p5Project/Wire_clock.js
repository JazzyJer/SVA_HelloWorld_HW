function setup() {
    createCanvas(600, 600);
    strokeWeight(1);
    noFill();
}

function draw () {
    background(0);

    let h = hour ();
    let m = minute ();
    let s = second ();

    for (let i = 0; i < h; i++){
        let xPos= (i + 1) * (width / 24);
        let vibration = random(-5, 5);
        stroke(255, 100, 100);
        line(xPos + vibration, 0, xPos + vibration, height);
    }

    for (let i = 0; i < m; i++){
        let yPos = (i +i) * (height / 60);
        stroke (100, 255, 100);
            line(0, yPos, width, yPos);
    }

    let currentTime = nf(h, 2) + ':' + nf (m, 2) +':' + nf(s, 2);
    fill(255);
    textSize(32);
    textAlign(RIGHT, BOTTOM);
    text(currentTime, width - 10, height - 10);

    
}