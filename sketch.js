var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite( 50, 200, 50, 50 );
  wall=createSprite( 1350, 200, 30, height/2 );

speed=random(55,90)
weight=random(400,1500)

}


function draw() {
  background("black"); 
  textSize(20);
  text("Deformation: "+ deformation,500,50)


  car.velocityX=speed;

car.collide(wall);

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
   deformation= 0.5*weight*speed*speed/22500
}
  
  if(deformation>180){
  car.shapeColor="red"
  }
  
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow"
    }
    
    if(deformation<100){
      car.shapeColor="green"
      }

  drawSprites();
}