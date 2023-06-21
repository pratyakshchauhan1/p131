Status="";
plant="";

function preload(){
plant = loadImage('BAMBOO PLANT.jpg');
}

function setup(){
canvas = createCanvas(600,350);
canvas.center();
object_detecter = ml5.objectDetecter('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_detecter.Detect()
}

function gotResults(results,error){
if(error){
console.error(error);
}
console.log(results);
}

function draw(){
image(plant,0,0,640,350);
}