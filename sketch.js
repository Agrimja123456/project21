var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(150, 200, 50, 10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="80,80,80"
speed=random(55,90);
thickness=random(223,321)
weight=random(30,52);
bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
  bullet.velocityX=0
  var d =0.5*weight*speed*speed/22509;
  if(d>180){
    bullet.shapeColor=color(225,0,0);

  }
  if(d<180 && d>100){
    bullet.shapeColor=color(230,230,0);

  }
  if(d<100){
    bullet.shapeColor=color*(0,255,0);

  }
if(hascollide(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10)
{
wall.shapeColor=color(255,0,0);
}
if (damage<10){

wall.shapeColor=Color(0,255,0)

}


}
  
  
  }
  
  
  drawSprites();
}
function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}