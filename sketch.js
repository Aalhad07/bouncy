const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  ball = new Ball (400,100,40)
  

  ground = new Ground (400 , 400 , 800 , 20)

}

function draw() {
  background(0);  
  Engine.update(engine)
  ball.display ()

  ground.display ()
}