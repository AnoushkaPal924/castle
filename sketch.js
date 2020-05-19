const World = Matter.World ;
const Engine = Matter.Engine ;
const Bodies = Matter.Bodies ;

var stick1,stick2,stick3,stick4,stick5,stick6;
var castle,world;

function setup() {
  createCanvas(800,400);
  castle = Engine.create();
  world = castle.world;
  
  stick1 = new pillar(200,200,20,100);
  stick2 = new pillar(225,195,20,110);
  stick3 = new pillar(250,190,20,120);
  stick4 = new pillar(275,185,20,130);
  stick5 = new pillar(300,190,20,120);
  stick6 = new pillar(325,195,20,110);
  stick7 = new pillar(350,200,20,100);
  ground = new pillar(275,260,200,10);
}

function draw() {
  background(255,255,255);  

  Engine.update(castle);
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  ground.display();

  drawSprites();
}