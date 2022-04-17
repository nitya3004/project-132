Status="";
Bulb_image="";

function preload(){
   Bulb_image=loadImage("bulb.jpg");
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
    objectDetector.detect(Bulb_image,gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(Bulb_image,0,0,640,350);
}