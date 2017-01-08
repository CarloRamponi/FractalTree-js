var angle = 0;
var dir=true;

function setup() {
    var browserSize = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    createCanvas(browserSize.width, browserSize.height);
    //angle=PI/4;
}

function draw() {
    background(50);
    translate(width/2, height);
    ramo(150);
    if(dir==true){
        if(angle<=PI/2)
            angle+=0.05;
        else {
            dir=false;
        }
    }
    else {
        if(angle>=0)
            angle-=0.05;
        else {
            dir=true;
        }
    }
}

function ramo(len){
    stroke(255);
    line(0,0,0,-len);
    if(len > 3){
        translate(0,-len);
        push();
        rotate(angle);
        ramo(len*0.7);
        pop();
        push();
        rotate(-angle);
        ramo(len*0.7);
        pop();
    }
}
