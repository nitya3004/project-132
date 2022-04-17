Status="";
Bottle_image="";

function preload(){
   Bottle_image=loadImage("bottle.jpeg");
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.position(315,200);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded!");
    Status=true;
    objectDetector.detect(Bottle_image,gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(Bottle_image,0,0,640,350);
}