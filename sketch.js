const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

img = loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,400);
engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(390, 315, 270,10);
    ground2 = new Ground(700, 195, 210, 10);

// Lower level 1
block1 = new Block(300, 275, 30, 40)
block2 = new Block(330, 275, 30, 40)
block3 = new Block(360, 275, 30, 40)
block4 = new Block(390, 275, 30, 40)
block5 = new Block(420, 275, 30, 40)
block6 = new Block(450, 275, 30, 40)
block7 = new Block(480, 275, 30, 40)

// Lower level 2
block8 = new Block(330, 235, 30, 40)
block9 = new Block(360, 235, 30, 40)
block10 = new Block(390, 235, 30, 40)
block11 = new Block(420, 235, 30, 40)
block12 = new Block(450, 235, 30, 40)

// Lower level 3
block13 = new Block(360, 195, 30, 40)
block14 = new Block(390, 195, 30, 40)
block15 = new Block(420, 195, 30, 40)

// Lower Boss
block16 = new Block(390, 155, 30, 40)



// Higher level 1
blocks1 = new Block(640, 175, 30, 40)
blocks2 = new Block(670, 175, 30, 40)
blocks3 = new Block(700, 175, 30, 40)
blocks4 = new Block(730, 175, 30, 40)
blocks5 = new Block(760, 175, 30, 40)

// Higher level 2
blocks6 = new Block(670, 135, 30, 40)
blocks7 = new Block(700, 135, 30, 40)
blocks8 = new Block(730, 135, 30, 40)

// Higher Boss
blocks9 = new Block(700, 105, 30, 40)

ball = Bodies.circle(50, 200, 20)

World.add(world, ball)

launcher = new Launcher(this.ball, {x: 100, y: 200})

}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
   ground1.display();
   ground2.display();

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

   blocks1.display();
   blocks2.display();
   blocks3.display();
   blocks4.display();
   blocks5.display();
   blocks6.display();
   blocks7.display();
   blocks8.display();
   blocks9.display();

   launcher.display();
   imageMode (CENTER)
   image (img, ball.position.x, ball.position.y, 40, 40)
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}