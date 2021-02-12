var s1;
var s2;
var car, wall;

function setup() {
  createCanvas(1000,1000);
  s1=createSprite(230,190,60,80);
  s2=createSprite(400, 200, 50, 90);
  car=createSprite(200,150,150,50);
  wall=createSprite(900,150,50,200);
  s1.shapeColor="red";
  s2.shapeColor="green";
  car.shapeColor="blue";
  wall.shapeColor="lightblue";
  car.velocityX=3;
}

function draw() {
  background("yellow");  
  s1.x=mouseX;
  s1.y=mouseY;
  console.log(s1.x);
  console.log(s1.y)
 
 bounceOff(car,wall) ;

if(isTouching(s1,wall)){
textSize(36);
fill("black");
text("touched",500,500);
}
else{
  textSize(36);
  fill("pink");
  text("not touched",500,500); 
}
  drawSprites();
}
function isTouching(p1,p2){
  if(p1.x-p2.x<p1.width/2+p2.width/2
    && p2.x-p1.x<p1.width/2+p2.width/2
    && p1.y-p2.y < p1.height/2+p2.height/2
    && p2.y-p1.y < p1.height/2+p2.height/2){
    return true
  }
  else{
    return false
    
  }
}
function bounceOff(p1,p2){
  if(p1.x-p2.x<p1.width/2+p2.width/2
    && p2.x-p1.x<p1.width/2+p2.width/2){
      p1.velocityX=(-1)*p1.velocityX;
    }
   else if( p1.y-p2.y < p1.height/2+p2.height/2
    && p2.y-p1.y < p1.height/2+p2.height/2){
   p1.velocityY=(-1)*p1.velocityY
  }
  
}