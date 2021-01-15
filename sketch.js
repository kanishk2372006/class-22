const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
   engine=Engine.create();
   world= engine.world;
   var options = {
     restitution:0.9
   }
   james=Bodies.circle(400,200,40,options);
   World.add(world,james);
var option={
isStatic:true

}
 ground=Bodies.rectangle(400,380,800,20,option);
 World.add(world,ground);
}

function draw() {
  Engine.update(engine);
  background("red"); 
  ellipseMode(RADIUS) ;
ellipse(james.position.x,james.position.y,40);
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20)
}