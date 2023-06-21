Status="";
glue="";

function preload(){
glue = loadImage('GLUE.jpg');
}

function setup(){
canvas = createCanvas(640,350);
canvas.center();
object_detecter = ml5.objectDetecter('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
console.log("Model Loaded!");
Status = true;
objectDetecter = ml5.objectDetecter('cocossd',modelLoaded);
}

function gotResults(results,error){
if(error){
console.error(error);
}
console.log(results);
}

function draw(){
image(glue,0,0,640,350);
if(status !="")
{
for (i = 0; i < objects.length; i++)
{
document.getElementById("status").innerHTML = "Status : Object Detcted";

fill("#FF0000")
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%" ,objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("FF0000")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}
