const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1,ground2
var block1
var block2,block3,block4
var block5,block6,block7,block8,block9
var block10,block11,block12,block13,block14,block15,block16

var block17
var block18,block19,block20
var block21,block22,block23,block24,block25,slingshot,polygon1
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

ground1=new Ground(390,418,250,30)
ground2=new Ground(760,250,550,30)

  block1=new Block(390,115,30,40)

  block2=new Block(360,195,30,40)
  block3=new Block(390,195,30,40)
  block4=new Block(420,195,30,40)

  block5=new Block(330,235,30,40)
  block6=new Block(360,235,30,40)
  block7=new Block(390,235,30,40)
  block8=new Block(420,235,30,40)
  block9=new Block(450,235,30,40)
  
  block10=new Block(300,275,30,40)
  block11=new Block(330,275,30,40)
  block12=new Block(360,275,30,40)
  block13=new Block(390,275,30,40)
  block14=new Block(420,275,30,40)
  block15=new Block(450,275,30,40)
  block16=new Block(480,275,30,40)

  block17=new Block(730,30,30,40) 
  
  block18=new Block(700,60,30,40)
  block19=new Block(730,60,30,40)
  block20=new Block(760,60,30,40)

  block21=new Block(670,90,30,40)
  block22=new Block(700,90,30,40)
  block23=new Block(730,90,30,40)
  block24=new Block(760,90,30,40)
  block25=new Block(790,90,30,40)

polygon1=new Polygon(92,225,80,80)

slingshot=new Slingshot(polygon1.body,{x:73,y:80})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();

  block18.display();
  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  ground2.display();

slingshot.display();
  polygon1.display();
  
  drawSprites();
  fill("blue") 
  text(mouseX + ',' + mouseY,10,45)
  fill("red")
  textSize(30)
 text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",230,30)
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly();
}




