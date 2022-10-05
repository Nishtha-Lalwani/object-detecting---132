img = "";
status1 ="";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
   canvas = createCanvas(600, 400);
   canvas.center;
   obect_detector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Object detecting";
}

function modelLoaded() {
    console.log("modelLoaded");
    status1 = true;
    object_detector.detect(img,gotResult);
}

function gotResult(error, results) {
if(error) {
    console.log(error);
}
console.log(results);
}



function draw(){
image(img, 0, 0, 600, 400);
fill("#808080");
text("dog", 45, 75);
noFill();
stroke("#FFD700");
rect(30, 60, 450, 350);

fill("#808080");
text("cat", 320, 120);
noFill();
stroke("#FFD700");
rect(300, 90, 270, 320);
}



